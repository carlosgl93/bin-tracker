# Annual View Extra Value (v3.1.1)

| | |
|---|---|
| **Fecha** | 2026-06-20 |
| **Status** | Aprobado |
| **Release objetivo** | v3.1.1 (mejoras anuales) |
| **Branch** | `feature/v3.1.1-annual-extras` (basada en `feature/v3.1-mejoras-pulpa`) |
| **Spec-driven** | sí, este doc actúa como source of truth |

---

## 1. Resumen

Mejora la vista anual (ya entregada en v3.1.0) para que el operador (Sebastián, Pulpa Los Robles) pueda **identificar rapidamente su peor y mejor mes del año** y **ver el desempeno relativo de cada mes vs el promedio anual**, sin abandonar la vista.

**Outcome esperado:** al abrir `/annual`, Sebastian ve en menos de 5 segundos: (a) cual mes le rindio mejor, (b) cual mes le rindio peor, (c) que tan lejos esta cada mes del promedio. Sin clicks adicionales.

---

## 2. Contexto

v3.1.0 dejo la vista anual con:
- Selector de año (10 años hacia atras)
- Tabla resumen de 12 meses + Total (binsEntrados, kgEntrados, tamboresSalidos, kgSalidos)
- 2 charts recharts (BarChart kg entrados, LineChart kg salidos) lazy-loaded

Limitaciones detectadas por el operador:
- La tabla plana no destaca cual mes fue problematico
- Los charts muestran valores pero no se馻lan visualmente outliers
- No hay resumen rapido de "mejor mes / peor mes" arriba

**Restricciones de data confirmadas:**
- Solo hay registros del a駉 actual (2026). No es viable comparativa YoY ni estacionalidad historica de varios a駉s.

---

## 3. Objetivos

| # | Objetivo | Métrica de éxito |
|---|---|---|
| O1 | Operador identifica su mejor mes del a駉 sin analisis manual | Card "Mejor mes" visible arriba de la tabla con label + valor |
| O2 | Operador identifica su peor mes del a駉 sin analisis manual | Card "Peor mes" visible arriba de la tabla con label + valor |
| O3 | Operador ve de un vistazo que tan lejos esta cada mes del promedio | Chip de color en columna "Estado" de la tabla (verde/amarillo/rojo) |
| O4 | Operador obtiene contexto adicional al inspeccionar un mes en el chart | Tooltip enriquecido con kg producidos, kg recepcionados, % defectuosos, bins malos |

---

## 4. Alcance

### 4.1 In (este spec)

1. **2 cards resumen al tope** (sobre la tabla existente):
   - Mejor mes: nombre + kg producidos + delta vs promedio anual (%)
   - Peor mes: nombre + kg producidos + delta vs promedio anual (%)
2. **Columna "Estado" en la tabla resumen** con chip MUI:
   - Verde (`success`): >= 90% del promedio anual de kg producidos
   - Amarillo (`warning`): 60-89% del promedio anual
   - Rojo (`error`): < 60% del promedio anual
3. **Tooltip enriquecido en BarChart y LineChart**:
   - Mantener kg entrados / kg salidos (ya existe)
   - Agregar: kg producidos, kg recepcionados, % defectuosos, bins malos

### 4.2 Out (YAGNI, no en este spec)

- **Drill-down al MonthlyView** desde fila/barra del a駉: el routing actual no soporta deep-link por mes; se requeriria refactor de MonthlyView para leer query params. Diferido.
- **Comparativa YoY** (2025 vs 2026): no hay data de 2025 en Firebase. Diferido hasta tener 2+ a駉s.
- **Patrones estacionales / promedio historico**: mismo motivo. Diferido.
- **Meta / target tracking**: requiere config del operador. No pedido.
- **Export PDF / Excel**: scope separado.
- **Heatmap**: redundante con chip de color + cards.
- **Cambios al selector de a駉, tabla base, recharts chunk, AnnualCharts component**: nada de esto cambia de estructura, solo se agregan props / se reusan.

---

## 5. Decisiones de dise帽o

| Decisión | Alternativa descartada | Razón |
|---|---|---|
| Umbrales hardcoded (90% / 60%) | inputs configurables | operador no pidio metas; YAGNI |
| Color por umbral relativo al promedio | color por umbral absoluto | el promedio es lo unico comparable con 1 a駉 de data |
| Cards de mejor/peor mes basadas en `kgSalidos` (kg producidos) | basadas en binsEntrados | Sebastian mide "produccion" = lo que sale como tambores/kg; bins son input |
| Calculo en `annualSummary.ts` (helper) | inline en componente | consistencia con items 10-12 ya entregados |
| Componente `StatCard` reusable | inline 2 veces en AnnualView | DRY; podria usarse en otros resumenes futuros |
| Tooltip enriquecido via prop `formatter` de recharts | custom Tooltip component | menos codigo, mantiene defaults visuales |

---

## 6. Diseno tecnico

### 6.1 Helper (extension de `src/utils/annualSummary.ts`)

```ts
export const PERFORMANCE_THRESHOLDS = {
  high: 0.9,   // >= 90% del promedio = verde
  mid: 0.6,    // >= 60% del promedio = amarillo; < 60% = rojo
} as const;

export type PerformanceStatus = 'high' | 'mid' | 'low';

export type MonthPerformance = {
  month: number;
  monthLabel: string;
  kgSalidos: number;
  deltaVsAveragePct: number;  // ej: +23.4 (% sobre el promedio)
  status: PerformanceStatus;
};

export function getMonthlyPerformance(summary: MonthlySummary[]): MonthPerformance[]
export function getBestMonth(summary: MonthlySummary[]): MonthlySummary | null
export function getWorstMonth(summary: MonthlySummary[]): MonthlySummary | null
```

**Reglas:**
- Si `summary` esta vacio o todos los meses tienen `kgSalidos === 0`: performance retorna array con `deltaVsAveragePct = 0` y `status = 'low'` para todos (degradacion segura). Mejor/peor mes = `null`. UI muestra "Sin datos".
- Promedio anual: `totals.kgSalidos / countMonthsWithProduction`. Si count = 0, promedio = 0 → todo el a駉 cae en `low`.
- Meses con `kgSalidos === 0`: cuentan para el promedio (se cuentan como 0), se marcan como `low`. Operador ve el mes vacio como problema.
- Mejor/peor mes: se ignoran meses con `kgSalidos === 0` para que "mejor mes" no salga como "Ene con 0". Si todos son 0, retorna `null`.

### 6.2 Componente nuevo: `src/components/StatCard.tsx`

```ts
interface StatCardProps {
  label: string;             // 'Mejor mes' | 'Peor mes'
  monthLabel: string | null; // null = "Sin datos"
  value: number;             // kg producidos (formateado con formatNumberES)
  deltaPct: number;          // ej: +23.4; null monthLabel => 0
  tone: 'success' | 'error'; // chip color del label
}
```

Visual: MUI `Paper` outlined, padding 2, header con label en color de tono, mes en `h4`, valor kg en `h5`, delta en `caption` con signo.

### 6.3 Cambios a `AnnualView.tsx`

- Importar `getMonthlyPerformance`, `getBestMonth`, `getWorstMonth`, `PERFORMANCE_THRESHOLDS` desde `annualSummary`.
- Calcular `performance = useMemo(() => getMonthlyPerformance(summary), [summary])`.
- Calcular `bestMonth = useMemo(() => getBestMonth(summary), [summary])` y `worstMonth = ...`.
- Renderizar 2 `<StatCard>` arriba del Paper de tabla resumen, en `Stack direction="row" spacing={2} sx={{ mb: 3 }}`.
- Agregar columna "Estado" a la tabla resumen:
  - Header: `<TableCell>Estado</TableCell>` antes de las numericas (o al final; decision: al final para no romper lectura numerica)
  - Body: `<Chip color={colorSegunStatus} size="small" label={statusLabel} />` donde `statusLabel` es 'Alto' / 'Medio' / 'Bajo' (o solo color sin texto para minimalismo; decision: solo color, sin texto, para no agregar ruido)
- Pasar `summary` (que ya tiene kgSalidos + kgEntrados + binsMalfunction + defectuososPercent se agrega) a `<AnnualCharts>` para tooltip enriquecido.

**Performance ya tiene `kgSalidos`, pero AnnualCharts necesita `kgRecepcionados`, `binsMalfunction`, `defectuososPercent` por mes para el tooltip.** Esto requiere agregar esos campos a `MonthlySummary`. Cambios en `annualSummary.ts`:

```ts
export type MonthlySummary = {
  month: number;
  monthLabel: string;
  binsEntrados: number;
  kgEntrados: number;
  kgRecepcionados: number;      // NUEVO: bins Chechito+Don Luis+Otros * 700
  tamboresSalidos: number;
  kgSalidos: number;
  binsMalfunction: number;      // NUEVO: suma semanal
  defectuososPercent: number;  // NUEVO: 0-100
};
```

Calculos por mes en el loop existente (mismo patron que `binsEntrados`):
- `kgRecepcionados`: usa helper `sumRecepcionadosKgs` filtrado por mes (o se calcula en el loop directo).
- `binsMalfunction`: `rec.binsMalfunction || 0`.
- `defectuososPercent`: recalcular `binsMalfunction / (sum binsStatus + binsMalfunction) * 100` con denominador 0 → 0.

Helper nuevo para encapsular: `getMonthlyKpis(records, year): MonthlySummary[]` que reemplaza el cuerpo de `getMonthlySummary` actual + agrega los 3 campos. `getMonthlySummary` queda como wrapper que retorna lo mismo (compat).

### 6.4 Cambios a `AnnualCharts.tsx`

- `AnnualChartsProps` ahora usa el `MonthlySummary` actualizado (incluye `kgRecepcionados`, `binsMalfunction`, `defectuososPercent`).
- Custom `<Tooltip>` en BarChart y LineChart:
  ```tsx
  <Tooltip
    content={({ active, payload }) => {
      if (!active || !payload?.length) return null;
      const m = payload[0].payload as MonthlySummary;
      return (
        <Paper sx={{ p: 1.5 }}>
          <Typography variant="subtitle2">{m.monthLabel}</Typography>
          <Typography variant="caption">Kg producidos: {formatNumberES(m.kgSalidos)}</Typography>
          <Typography variant="caption">Kg recepcionados: {formatNumberES(m.kgRecepcionados)}</Typography>
          <Typography variant="caption">% defectuosos: {m.defectuososPercent.toFixed(1)}%</Typography>
          <Typography variant="caption">Bins malos: {formatNumberES(m.binsMalfunction)}</Typography>
        </Paper>
      );
    }}
  />
  ```
- `tickFormatter` y `formatter` default se mantienen (la card de detail va dentro del tooltip custom).

### 6.5 Archivos

| Archivo | Tipo | Cambio |
|---|---|---|
| `src/utils/annualSummary.ts` | editar | + `getMonthlyPerformance`, `getBestMonth`, `getWorstMonth`, `PERFORMANCE_THRESHOLDS`; extender `MonthlySummary` con 3 campos; agregar `kgRecepcionados`, `binsMalfunction`, `defectuososPercent` por mes |
| `src/utils/annualSummary.test.ts` | editar | + tests nuevos (umbrales, mejor/peor, meses vacios, todos en cero) |
| `src/components/StatCard.tsx` | nuevo | componente reusable (~50 lineas) |
| `src/components/StatCard.test.tsx` | nuevo | render snapshot / comportamiento basico (opcional, si el codebase usa testing-library para componentes) |
| `src/pages/AnnualView.tsx` | editar | + cards resumen, columna Estado con Chip, tooltip enriquecido |
| `src/pages/AnnualView/AnnualCharts.tsx` | editar | custom Tooltip con payload detallado |

---

## 7. UI / mockup

```
┌──────────────────────────────────────────────────────────────────┐
│ Resumen de Producción Anual                                       │
│ Visualiza la producción agregada por mes para un año seleccionado │
│                                                                   │
│ Año: [2026 ▾]                                                     │
│                                                                   │
│ ┌──────────────────────┐  ┌──────────────────────┐                │
│ │ ● Mejor mes          │  │ ● Peor mes           │                │
│ │   May                │  │   Feb                │                │
│ │   18.500 kg          │  │   6.200 kg           │                │
│ │   +23.4% vs promedio │  │   -58.1% vs promedio │                │
│ └──────────────────────┘  └──────────────────────┘                │
│                                                                   │
│ Resumen mensual                                                   │
│ ┌─────┬─────────┬─────────┬─────────┬─────────┬───────┐           │
│ │ Mes │ B.ent.  │ Kg.ent. │ T.sal.  │ Kg.sal. │Estado │           │
│ ├─────┼─────────┼─────────┼─────────┼─────────┼───────┤           │
│ │ May │   50    │ 35.000  │   77    │ 18.500  │  ●    │ (verde)   │
│ │ Jun │   45    │ 31.500  │   55    │ 13.200  │  ●    │ (verde)   │
│ │ Mar │   42    │ 29.400  │   50    │ 12.100  │  ●    │ (verde)   │
│ │ Abr │   38    │ 26.600  │   42    │ 10.000  │  ●    │ (amarillo) │
│ │ Feb │   25    │ 17.500  │   26    │  6.200  │  ●    │ (rojo)    │
│ │ ... │   ...   │   ...   │   ...   │   ...   │       │           │
│ │Total│  250    │175.000  │  300    │ 72.000  │       │           │
│ └─────┴─────────┴─────────┴─────────┴─────────┴───────┘           │
│   (● = chip MUI solo color, sin texto, segun §6.3)                │
│                                                                   │
│ [Charts existentes: Kg entrados (bar) + Kg salidos (line)]        │
│ Tooltip al hover:                                                 │
│   May                                                              │
│   Kg producidos: 18.500                                           │
│   Kg recepcionados: 10.500                                        │
│   % defectuosos: 2.3%                                             │
│   Bins malos: 1                                                    │
└──────────────────────────────────────────────────────────────────┘
```

---

## 8. Criterios de aceptacion

### Funcional
- [ ] 2 cards resumen visibles arriba de la tabla con mejor mes y peor mes (o "Sin datos" si el a駉 no tiene produccion).
- [ ] Cada card muestra: label, nombre del mes, kg producidos (con `formatNumberES`), delta vs promedio con signo (`+` / `-`) y 1 decimal.
- [ ] Tabla resumen tiene columna "Estado" al final, con chip MUI de color:
  - Verde (`success`) cuando `kgSalidos >= 90%` del promedio anual
  - Amarillo (`warning`) cuando `60% <= kgSalidos < 90%`
  - Rojo (`error`) cuando `kgSalidos < 60%`
- [ ] Tooltip de BarChart y LineChart muestra: mes, kg producidos, kg recepcionados, % defectuosos (1 decimal), bins malos.
- [ ] Selector de a駉, tabla base, recharts chunk, AnnualCharts component estructuralmente intactos.

### Tests (vitest)
- [ ] `getMonthlyPerformance`: array de 12 elementos con `deltaVsAveragePct` y `status` correctos para data con variabilidad.
- [ ] `getMonthlyPerformance`: meses con `kgSalidos = 0` caen en `status = 'low'`.
- [ ] `getMonthlyPerformance`: a駉 vacio retorna 12 elementos con delta 0 y status `low`.
- [ ] `getBestMonth` / `getWorstMonth`: retornan el mes correcto (max / min kgSalidos) en data con variabilidad.
- [ ] `getBestMonth` / `getWorstMonth`: retornan `null` cuando todos los meses son 0.
- [ ] `getBestMonth`: ignora meses con 0 para que el "mejor" no sea un mes vacio.
- [ ] `MonthlySummary` extendido: `kgRecepcionados`, `binsMalfunction`, `defectuososPercent` agregados correctamente por mes y en `getYearlyTotals`.

### No regresion
- [ ] Tests existentes (106) siguen pasando.
- [ ] `pnpm ts:check` clean.
- [ ] `pnpm lint:check` clean.
- [ ] `pnpm build` mantiene `recharts` en su propio chunk (verificable en `dist/assets/`).

---

## 9. Coverage y deuda tecnica

- `StatCard` queda como componente reusable. Si el codebase lo necesita en otro lado (e.g., MonthlyView resumen del mes), ya esta.
- `annualSummary.ts` queda como modulo consolidado de KPIs anuales. Es la unica fuente para `MonthlySummary`.
- Deuda explicita: drill-down a MonthlyView queda pendiente. Documentado en §4.2.

---

## 10. Riesgos y mitigaciones

| Riesgo | Mitigacion |
|---|---|
| Promedio anual = 0 (a駉 sin produccion) hace que la division explote | Branch explicito en `getMonthlyPerformance`: si promedio = 0, todos los meses quedan en `status = 'low'` con delta 0 |
| Chip de color se ve mal con MUI v6 | Usar `color="success" / "warning" / "error"` (props nativas de MUI Chip) |
| Tooltip custom rompe layout del chart | Tooltip de recharts recibe `content` como render prop; default reemplazado completamente, sin perder el contenedor Paper |
| Helper nuevo `getMonthlyKpis` duplica logica con `getMonthlySummary` existente | Wrapper: `getMonthlyKpis` hace el trabajo real, `getMonthlySummary` lo llama y retorna el mismo shape (compat con callers existentes) |
| `binsMalfunction` no estaba en `MonthlySummary` y se calcula en otro lado (`sumBinsMalos` en monthlyHelper) | Reuso: import `sumBinsMalos` de monthlyHelper y se filtra por mes en el loop |

---

## 11. Out of scope explicito

Reiterado de §4.2 para claridad:
- Drill-down a MonthlyView (no hay routing por mes hoy)
- Comparativa YoY (no hay data 2025)
- Estacionalidad multi-a駉 (mismo motivo)
- Target tracking (no pedido)
- Export PDF / Excel (fase futura)
- Heatmap (redundante)

---

## 12. Deploy

- Branch: `feature/v3.1.1-annual-extras` desde `feature/v3.1-mejoras-pulpa` HEAD
- PR unico al final
- Merge a `master` tras validar visualmente en dev
- Deploy junto con v3.1.0 (o en commit aparte si el cliente lo prefiere; default: deploy unico via `pnpm deploy`)
