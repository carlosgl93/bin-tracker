# PRD — Mejoras Pulpa / Bin Tracker (Release de mejoras)

| | |
|---|---|
| **Cliente** | Sebastián Irarrázabal — Pulpa Los Robles |
| **Producto** | Pulpa / Bin Tracker (PWA, Firebase) |
| **Versión actual** | v3.0.0 |
| **Release objetivo** | v3.1.0 (mejoras) — esta semana |
| **Spec-driven** | sí, este PRD actúa como source of truth |
| **Cotización ref.** | [cotizacion-mejoras-pulpa-2026-06-19.md](./cotizacion-mejoras-pulpa-2026-06-19.md) |

---

## 1. Resumen ejecutivo

Release de 12 mejoras a la app Pulpa / Bin Tracker, agrupadas en 4 fases implementables incrementalmente. El release correctivo de bugs pre-existentes (entrega aparte, sin costo) debe estar en producción **antes** de empezar este trabajo.

**Outcome esperado:**
- Operador (Sebastián / Pulpa Los Robles) puede registrar días lunes-sábado con horarios extendidos (09:00–21:00).
- Reporte diario expone kilos producidos por fuente con la conversión `× 700 kg`.
- Vista mensual agrega KPIs semanales de calidad (kg recepcionados, bins malos, % defectuosos).
- Vista anual nueva: resumen mensual + gráficos, con selector de año.

---

## 2. Objetivos

| # | Objetivo | Métrica de éxito |
|---|---|---|
| O1 | Cubrir operación de 6 días (lun–sáb) sin perder la lógica de business week | weekly card muestra 6 días correctamente; KPIs mensuales no se rompen |
| O2 | Eliminar información redundante / ruidosa del modelo (brix.average) | campo removido del UI y de la escritura; data histórica intacta |
| O3 | Visibilizar gas histórico de la semana en curso para detectar diferencias día a día | operador ve gas de días pasados de la semana al abrir el form |
| O4 | Hacer explícita la conversión de bins a kg (factor 700) en la vista diaria | usuario ve `X × 700 = Z` por fuente |
| O5 | Entregar KPIs de calidad a nivel semanal en la vista mensual | bloque "kg recepcionados", "bins malos" y "% defectuosos" visibles por semana |
| O6 | Vista anual funcional y útil para revisión de tendencia | selector de año + tabla resumen + ≥2 gráficos |

---

## 3. Personas

- **Operador Pulpa Los Robles** (Sebastián / equipo). Registra producción diaria y consulta reportes.
  - Dispositivo: móvil / tablet principalmente.
  - Conexión: variable (PWA offline-first debe mantenerse).
  - Necesidades: ver rápido si la producción va bien, detectar desvíos de gas y bins malos.

---

## 4. Alcance

Referencia: [sección 2 de la cotización](./cotizacion-mejoras-pulpa-2026-06-19.md#2-alcance). **12 ítems, 5 módulos, 22,5 horas estimadas.**

Fuera de alcance (explícito):
- Fix de bugs pre-existentes (release anterior, sin costo).
- Features no listadas en sección 2 de la cotización.
- Migración de data histórica.
- Cambios en infraestructura / hosting / Firebase.

---

## 5. Fases de implementación

### Fase 1 — Cleanup del modelo y formulario base
**Objetivo:** dejar el modelo y form listos para soportar las fases siguientes.

| Ítem | Título | Horas |
|---|---|---|
| 4 | Quitar promedio de Brix | 0,5 |
| 2 | Agregar bloque 20:00–21:00 | 1,5 |
| 3 | Agregar sábado (form, business week, weekly view) | 2,5 |
| 1 | Reordenar secciones del formulario | 2,5 |

**Total fase 1:** 7,0 horas
**Criterio de aceptación de fase:** form reordenado, sábado seleccionable, 13 rangos horarios (09–21), brix sin average, weekly card muestra 6 días, tests pasando.

### Fase 2 — Mejoras vista diaria
**Objetivo:** visibilizar gas histórico y conversión a kg.

| Ítem | Título | Horas |
|---|---|---|
| 5 | Gas: precargar último valor conocido (semana actual) | 2,5 |
| 6 | Header "700 kg" + multiplicación X × 700 = Z | 1,5 |

**Total fase 2:** 4,0 horas
**Criterio de aceptación:** form precarga gas de días pasados de la semana con "N/I" cuando no hay dato + leyenda condicional; DailyView muestra header "700 kg" y `X × 700 = Z` por fuente.

### Fase 3 — KPIs mensuales semanales
**Objetivo:** visibilidad de calidad y producción por semana.

| Ítem | Título | Horas |
|---|---|---|
| 7 | Bloque "Kilogramos recepcionados" | 2,0 |
| 8 | Bloque "Bins malos" | 1,0 |
| 9 | Bloque "% defectuosos" | 0,5 |

**Total fase 3:** 3,5 horas
**Criterio de aceptación:** los 3 bloques visibles en WeeklyProductionCard, entre amarillo (kg producidos) y azul (stock), con cálculos por semana.

### Fase 4 — Vista anual
**Objetivo:** tendencia anual consultable.

| Ítem | Título | Horas |
|---|---|---|
| 10 | Selector de año | 1,0 |
| 11 | Cuadro resumen mensual | 4,0 |
| 12 | Gráficos (recharts, lazy-loaded) | 2,5 |

**Total fase 4:** 7,5 horas
**Criterio de aceptación:** selector de año funcional, tabla con 12 filas (meses), ≥2 gráficos de tendencia, bundle del chunk anual separado (lazy loading verificado en build).

**Total release:** 22,0 horas (margen 0,5h vs estimación cotización).

---

## 6. Specs por ítem

### Ítem 1 — Reordenar secciones del formulario
**Archivo principal:** `src/pages/NewProductionRecord.tsx`

Nuevo orden de render de secciones:
1. Informe proceso (fecha, hora inicio, hora término)
2. Estado de bins
3. Tambores y horario
4. Stock de tambores
5. Stock de bolsa
6. Brix
7. Gas

**Aceptación:**
- Visualmente las secciones aparecen en el orden listado.
- El state del form no cambia (sólo el orden de render).
- No se introducen regresiones en submit/load existentes.

### Ítem 2 — Bloque 20:00–21:00
**Archivos:** `src/pages/NewProductionRecord.tsx`, `src/services/production/types.ts`

- Agregar `'20:00-21:00'` al array `horas` en NewProductionRecord.
- `drumProductionByHour` ahora puede tener 13 entradas.
- Mantener retrocompatibilidad: registros viejos con 10 entradas deben cargarse correctamente (índices undefined → string vacío en el form).
- Default: 0 para el rango 20-21.

**Aceptación:**
- Aparece la fila `20:00–21:00` en producción por hora.
- Registros históricos (10 entradas) siguen mostrándose sin error.

### Ítem 3 — Agregar sábado
**Archivos:** `src/pages/NewProductionRecord.tsx`, `src/pages/MonthlyView/WeeklyProductionCard.tsx`, `src/utils/monthlyHelper.ts`, tests asociados

- Agregar `{ label: 'Sábado', key: 'sabado' }` al array `dias`.
- `monthlyHelper.getWeekInfo`: ahora retorna 6 días laborales por semana (lun-sáb).
- `groupRecordsByWeek`: incluye registros con `date.getDay() === 6`.
- WeeklyProductionCard: renderiza chip/columna para sábado.
- `formatNumberES` no requiere cambios.

**Aceptación:**
- Sábado seleccionable en form.
- Registros de fecha sábado se incluyen en la semana correspondiente.
- Weekly card muestra 6 días.
- `businessDaysInTargetMonth` ahora tiene 6 días.

### Ítem 4 — Quitar promedio de Brix
**Archivos:** `src/pages/NewProductionRecord.tsx`, `src/pages/DailyView.tsx`, `src/services/production/types.ts`

- `ProductionRecord.brix` queda `{ 1: number; 2: number; 3: number }`.
- Quitar input y display del campo `average`.
- Remover lógica que calcula el promedio (si existe).
- **Migración diferida:** lecturas tolerantes a `brix.average` legacy (no rompe si existe, simplemente no se muestra).

**Aceptación:**
- Form no tiene input "promedio brix".
- DailyView no muestra promedio.
- `ProductionRecord` type no incluye `average`.
- Registros históricos se siguen leyendo sin error (campo extra se ignora).

### Ítem 5 — Gas: precarga semanal
**Archivos:** `src/pages/NewProductionRecord.tsx`, `src/services/production/productionRecords.ts`, `src/utils/monthlyHelper.ts` (helpers), tests

**Comportamiento:**
- Al abrir el form de un día (ej: viernes), cada fila de día (lun, mar, mié, jue, vie, sáb) muestra como **readonly** el valor de gas del último registro de ESE día en la **semana actual**.
- Si no hay registro para ese día en la semana actual → mostrar **`N/I`**.
- Leyenda inferior izquierda "N/I = No ingresado" se muestra **solo si** existe al menos un día pasado de la semana actual sin valor.
- Si todos los días pasados de la semana tienen valor, no se muestra la leyenda.
- Días futuros de la semana actual (incluyendo el día seleccionado si es hoy y aún no se registra) → `N/I`.

**Edge cases:**
- Si el día seleccionado es lunes: no hay días pasados esta semana → todas las filas se renderizan vacías/editor-ready (sin leyenda).
- Si no hay registros previos en absoluto: todas las filas en `N/I`, leyenda visible.
- Si es sábado sin registros antes en la semana: lunes a viernes en `N/I`, sábado editable.

**Aceptación:**
- Specs anteriores pasan en test manual y unitario.
- `getWeeklyGasHistory(date)` retorna la estructura correcta para los días pasados.
- No se introducen regresiones en submit del día actual.

### Ítem 6 — Header "700 kg" + multiplicación
**Archivos:** `src/pages/DailyView.tsx`, posiblemente `src/utils/formatNumberES.ts`

- Bloque "Estado de bins" arranca con un título "700 kg" visible.
- Por cada fuente en `binsStatus` (Inicio, Chechito, Don Luis, Otros), mostrar:
  ```
  {source}: {quantity} × 700 = {quantity * 700} kg
  ```
- Aplicar `formatNumberES` al resultado.

**Aceptación:**
- Header "700 kg" visible arriba del bloque.
- Línea de multiplicación por cada fuente.
- Responsive: en mobile, formato compacto.

### Ítem 7 — Kilogramos recepcionados (semanal)
**Archivos:** `src/pages/MonthlyView/WeeklyProductionCard.tsx`, `src/utils/monthlyHelper.ts`

- Sumar `binsStatus` de fuentes Chechito + Don Luis + Otros por día, multiplicar por 700.
- Agregar diariamente → total semanal en kg.
- Bloque renderizado entre el bloque amarillo (kg producidos) y el azul (stock).

**Aceptación:**
- Bloque "Kilogramos recepcionados" visible en WeeklyProductionCard.
- Cálculo correcto en al menos 1 test con data real.

### Ítem 8 — Bins malos (semanal)
**Archivos:** idem ítem 7

- Sumar `binsMalfunction` de los registros de la semana.

**Aceptación:**
- Bloque "Bins malos" visible.
- Test pasa.

### Ítem 9 — % defectuosos (semanal)
**Archivos:** idem ítem 7

**Fórmula:**
```
% defectuosos = binsMalfunction / (producidos OK + binsMalfunction) × 100
```

Donde `producidos OK = sum(binsStatus[*].quantity)` sin contar `binsMalfunction`.

**Display:** formato `X,Y%` con 1 decimal.

**Aceptación:**
- Bloque visible.
- Test con caso `5 malos / 100 totales = 5,0%` y `0/100 = 0,0%`.

### Ítem 10 — Selector de año
**Archivos:** `src/pages/AnnualView.tsx`, nueva implementación

- Reemplazar placeholder.
- DatePicker con `views={['year']}`.
- Default: año actual.
- Estado local: `year` (number).

### Ítem 11 — Cuadro resumen mensual
**Archivos:** `src/pages/AnnualView.tsx`, `src/services/production/productionRecords.ts`

**Por cada mes del año seleccionado, calcular:**
- `binsEntrados`: suma de `binsStatus[*].quantity` de todos los registros del mes.
- `kgEntrados`: binsEntrados × 700.
- `tamboresSalidos`: suma de `totalDrumsWeight / 240` (o campo que ya represente tambores). Verificar en MonthlyView cuál es la fórmula correcta y replicar.
- `kgSalidos`: tamboresSalidos × 240 (o `totalDrumsWeight` directo).

> **Acción:** confirmar la fórmula exacta de tambores/kg salidos revisando `monthlyHelper.ts` antes de implementar.

**Tabla MUI con 12 filas + totales.**

### Ítem 12 — Gráficos anuales
**Archivos:** `src/pages/AnnualView.tsx`

- Librería: **recharts** con **lazy loading** (`React.lazy` + `Suspense`).
- ≥ 2 gráficos:
  - Bar chart: kg entrados por mes.
  - Line/Bar chart: kg salidos por mes.
- Responsive.
- Bundle chunk anual separado (`vite.config.ts` manual chunks).

---

## 7. Cambios al modelo de datos

### `ProductionRecord` (`src/services/production/types.ts`)

```ts
export type ProductionRecord = {
  id?: string;
  date: string;
  startTime: string;
  endTime: string;
  gasControl: GasControl[];             // ahora puede incluir sábado
  drumProductionByHour: DrumProductionByHour[]; // 13 entradas ahora
  drumStock: DrumStock;
  bagStock: BagStock;
  binsStatus: BinsStatus[];             // 4 fuentes (Inicio, Chechito, Don Luis, Otros)
  binsMalfunction: number;
  totalExistence: number;
  totalProcessed: number;
  totalFinal: number;
  brix: { 1: number; 2: number; 3: number }; // SIN average
  totalDrumsWeight: number;
  comments?: string;
};
```

**Lectura tolerante:** `b.average` en data legacy se ignora. `drumProductionByHour` con menos de 13 entradas se acepta.

**Sin migración de data:** registros históricos no se tocan.

---

## 8. Decisiones de diseño

| Decisión | Alternativa descartada | Razón |
|---|---|---|
| Sábado como día laboral más | día opcional separado | cliente quiere lun-sáb = semana laboral |
| Gas precarga solo semana actual | histórico de últimas N semanas | operador quiere ver diferencias día a día esta semana |
| `% defectuosos` con malos en denominador | tasa de pérdida (malos/producidos OK) | estándar industria (% defect rate) |
| `recharts` con lazy load | `@mui/x-charts` | mejor dominio de API + bundle controlado |
| Migración diferida de `brix.average` | backfill / drop | minimizar riesgo, no tocar data histórica |
| 4 fases demoables | items 1–12 lineales | mejor validación incremental con cliente |

---

## 9. Riesgos

| Riesgo | Mitigación |
|---|---|
| Sábado rompe lógica de business week overflow | tests con casos junio/julio + enero/diciembre como ya están en `monthlyHelper.test.ts` |
| Gas precarga genera N+1 queries | usar la query existente de weekly records; calcular gas in-memory |
| Bundle anual pesa más por recharts | lazy loading obligatorio + manual chunks en `vite.config.ts` |
| Reorden form rompe UX móvil | verificar breakpoints; mantener todos los `<Paper>` wrapping existentes |
| Bins status no incluye "malos" como fuente sino como campo aparte | confirmar al implementar ítems 6–9 que `binsMalfunction` no está en `binsStatus` |

---

## 10. QA / testing

**Paridad con codebase existente:**
- `vitest` para utils/helpers nuevos o modificados (objetivo ≥95% en archivos tocados, mismo estándar que `monthlyHelper`).
- `@testing-library/react` para componentes modificados.
- Playwright e2e selectivo: happy path del form reordenado y de la vista anual.

**Tests nuevos requeridos:**
- `monthlyHelper.test.ts`: extend con casos sábado en business week.
- `gasHistory.test.ts` (nuevo): helper `getWeeklyGasHistory(date, records)`.
- `binKgs.test.ts` (nuevo o en `formatNumberES`): helper `binsToKgs(qty, factor = 700)`.
- `annualSummary.test.ts` (nuevo): agregación mensual desde records.
- `AnnualView.test.tsx` (nuevo): render con selector + tabla + lazy load de recharts.

**Smoke test manual pre-deploy:**
1. Crear registro lunes: verificar precarga gas = N/I.
2. Crear registro martes: precarga gas lunes OK, miércoles-viernes N/I, leyenda visible.
3. Vista anual año 2025: tabla con 12 filas + 2 gráficos.

---

## 11. Deploy / release plan

1. **Release correctiva** (bugs pre-existentes) → ya en producción antes de empezar.
2. Branch: `feature/v3.1-mejoras-pulpa` (basada en master tras release correctiva).
3. PR por fase (4 PRs) para revisión.
4. Merge a master tras validar fase en ambiente dev.
5. Deploy manual (`pnpm deploy`) tras 4 fases completas.
6. Smoke test post-deploy en `https://bintracer-fd72d.web.app`.

---

## 12. Factores de conversión (referencia única)

| Concepto | Factor | Fuente |
|---|---|---|
| **kg por bin** | **700** | notas originales + ítems 6, 7, 11 |
| **kg por tambor** | **240** | código actual en `monthlyHelper.ts:254,294,318` y `WeeklyProductionCard.tsx:99,233,336` |

Centralizar en un helper `src/utils/conversionFactors.ts` con constantes `KG_PER_BIN = 700` y `KG_PER_DRUM = 240`. Reutilizar en:
- Ítem 6 (DailyView bins header + multiplicación).
- Ítem 7 (kg recepcionados = bins Chechito + Don Luis + Otros × 700).
- Ítem 11 (cuadro anual: kg entrados = bins × 700; kg salidos = tambores × 240).
- Tests.

---

## 13. Nombres de bloques UI

**Mantener nombres existentes** (no renombrar para no generar confusión):

| Bloque | Nombre actual | Acción |
|---|---|---|
| Informe proceso | "Información del Proceso" | sin cambios |
| Estado de bins | "Estado de Bins" | agregar subheader "700 kg" (ítem 6) |
| Tambores y horario | "Tambores y Horarios" | extender con fila 20–21 (ítem 2) |
| Stock tambores | "Stock de Tambores" | sin cambios |
| Stock bolsa | "Stock de Bolsas" | sin cambios |
| Brix | "Brixs" | quitar input "promedio" (ítem 4) |
| Gas | "Control de Gas Diario" | agregar precarga + leyenda N/I (ítem 5) |

**Bloques nuevos** (en WeeklyProductionCard, ítems 7–9) — nombres provisorios, ajustar si cliente pide cambio:
- "Kilogramos recepcionados"
- "Bins malos"
- "% defectuosos"

---

## 14. Definiciones

**`binsStatus`** contiene solo las 4 fuentes (Inicio, Chechito, Don Luis, Otros). **`binsMalfunction`** es campo aparte, NO está dentro de `binsStatus`. Por lo tanto el denominador del % defectuosos (ítem 9) usa la suma de `binsStatus[*].quantity` separada de `binsMalfunction`.

---

## 15. Resuelto (open questions cerradas)

- [x] Fórmula de tambores/kg: 240 kg/tambor (código actual). Mantener.
- [x] `binsMalfunction` dentro o fuera de `binsStatus`: fuera. Campo separado.
- [x] Nombres UI: mantener los actuales; nuevos provisorios.

---

_PRD v1 · 19-06-2026 · spec-driven, 4 fases, 22h estimadas_
