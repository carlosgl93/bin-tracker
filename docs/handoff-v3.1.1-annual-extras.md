# Handoff — v3.1.1 Annual Extras

## Branch

Actual: `feature/v3.1-mejoras-pulpa` (v3.1.0 completo, listo para merge a master).

**Para v3.1.1, crear nueva branch basada en la actual:**
```
git checkout feature/v3.1-mejoras-pulpa
git checkout -b feature/v3.1.1-annual-extras
```

## Done en v3.1.0 (sesiones previas)

| Commit | Item |
|---|---|
| `94351cd` | item 4: quitar brix.average |
| `673ab9d` | item 2: bloque 20:00-21:00 |
| `56d37f0` | item 3: agregar sabado |
| `e60dd58` | item 1: reordenar form |
| `412416b` | item 6: header 700 + multiplicacion |
| `16324cc` | refactor: factores de conversion |
| `abaf918` | item 5: gas precarga semanal |
| `9ee7c7d` | items 7-9: KPIs semanales |
| `a6d0bc2` | items 10-12: vista anual base |

**Tests:** 106/106 passing. `pnpm ts:check` y `pnpm lint:check` clean. Build con recharts en chunk separado.

## A hacer en v3.1.1

**Spec formal:** `docs/superpowers/specs/2026-06-20-annual-view-extra-value-design.md`.

Resumen ejecutivo:
- 2 cards resumen: Mejor mes | Peor mes (basado en kg producidos), con delta vs promedio anual
- Columna "Estado" en tabla resumen: chip MUI solo color (verde/amarillo/rojo segun umbral 90%/60%)
- Tooltip enriquecido en BarChart y LineChart: kg producidos, kg recepcionados, % defectuosos, bins malos
- **NO drill-down** (deferido; routing actual no soporta deep-link por mes)

## Archivos a tocar

| Archivo | Cambio |
|---|---|
| `src/utils/annualSummary.ts` | + `getMonthlyPerformance`, `getBestMonth`, `getWorstMonth`, `PERFORMANCE_THRESHOLDS`; extender `MonthlySummary` con `kgRecepcionados`, `binsMalfunction`, `defectuososPercent` |
| `src/utils/annualSummary.test.ts` | + ~7 tests (umbrales, mejor/peor, meses vacios, todos en cero, agregacion de nuevos campos) |
| `src/components/StatCard.tsx` | nuevo, reusable |
| `src/pages/AnnualView.tsx` | + 2 cards arriba de tabla, columna Estado, pasar summary enriquecido a AnnualCharts |
| `src/pages/AnnualView/AnnualCharts.tsx` | custom Tooltip con payload detallado |

## Convenciones

- pnpm unico package manager
- Conventional commits: `feat` / `fix` / `chore` / `refactor` / `test` / `docs`
- Sin emojis en codigo, commits, docs
- Sin menciones a Claude / Anthropic / IA en artefactos
- Caveman mode (respuestas tersas)
- Commits atomicos: idealmente 1 commit "feat: extra-value annual view (v3.1.1)" con todos los cambios, o separados por concern si el diff es grande

## Tests / validacion pre-commit

```
pnpm test:unit:run   # 106+ tests
pnpm ts:check        # tsc --noEmit
pnpm lint:check      # eslint max-warnings 0
pnpm build           # confirma que recharts sigue en su chunk
```

## Decisiones clave (NO cambiar)

- Umbrales 90% / 60% hardcoded (no inputs configurables)
- Color de status basado en umbral relativo al promedio anual (no absoluto)
- Mejor/peor mes basados en `kgSalidos` (kg producidos), no en bins
- **Sin drill-down** a MonthlyView (no hay routing por mes hoy)
- Sin comparativa YoY (no hay data 2025 en Firebase)
- Sin target tracking, sin export PDF/Excel, sin heatmap (YAGNI)

## Edge cases a cubrir

- Anio sin registros: mejor/peor mes = null, UI muestra "Sin datos", todos los meses con status `low`
- Meses con kg producidos = 0: cuentan como `low`, no optan a "mejor mes"
- Promedio anual = 0: division protegida, todos `low` con delta 0
- Records con binsStatus o drumProductionByHour faltantes: tratan como 0

## Patrones a seguir (consistencia con codebase)

- Reusar `sumRecepcionadosKgs` y `sumBinsMalos` de `monthlyHelper.ts` (ya exportados, items 7-9)
- Reusar `drumsToKgs` / `binsToKgs` / `KG_PER_BIN` / `KG_PER_DRUM` de `conversionFactors.ts`
- `formatNumberES` para todos los numeros en UI
- Tests en `vitest`, mismo estilo que `monthlyHelper.test.ts` y `annualSummary.test.ts`
- Tipos exportados desde el helper, consumidos por el componente (single source of truth)

## Coverage target

≥95% en archivos tocados (paridad con codebase existente: `monthlyHelper.test.ts`, `annualSummary.test.ts`).

## NO hacer

- No reescribir `AnnualView.tsx` completo: agregar 2 cards + columna Estado, no mover codigo existente
- No reescribir `AnnualCharts.tsx`: solo cambiar la prop `content` del Tooltip
- No tocar `monthlyHelper.ts` (sus exports ya estan disponibles)
- No tocar selectores, tabla base, recharts imports (excepto agregar custom Tooltip)
- No agregar nuevas dependencias (recharts ya instalado)
- No deploy a produccion todavia

## Despues de v3.1.1

- PR a `master` desde `feature/v3.1.1-annual-extras`
- Validar visualmente en dev con data real de Firebase
- Deploy unico via `pnpm deploy` cubriendo v3.1.0 + v3.1.1, o separado si cliente prefiere
- Backlog futuro: drill-down a MonthlyView, comparativa YoY (cuando haya 2+ anios de data), export PDF/Excel

## Resume

1. `git checkout feature/v3.1-mejoras-pulpa`
2. `git checkout -b feature/v3.1.1-annual-extras`
3. Leer spec: `docs/superpowers/specs/2026-06-20-annual-view-extra-value-design.md`
4. Implementar los 5 cambios de archivos (orden sugerido: helper → tests → StatCard → AnnualView → AnnualCharts)
5. Validar: tests + ts + lint + build
6. Commit atomico
7. Reportar
