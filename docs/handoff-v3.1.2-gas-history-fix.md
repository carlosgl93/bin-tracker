# Handoff — v3.1.2 Gas History Fix + DailyView Integration

## Branch

Actual: `feature/v3.1-mejoras-pulpa` (v3.1.0 + v3.1.1 ya mergeadas localmente).

**Para v3.1.2, crear nueva branch basada en la actual:**
```
git checkout feature/v3.1-mejoras-pulpa
git checkout -b feature/v3.1.2-gas-history-fix
```

## Goal (ralph-loop completion promise)

El agente nuevo debe ejecutar este handoff con `/ralph-loop` siguiendo TDD estricto hasta cumplir el goal. Al terminar, output:

```
<promise>GAS_HISTORY_FIX_DONE</promise>
```

**Criterios para emitir el goal:**
- US-GH-1, US-GH-2, US-GH-3 implementadas y aceptadas.
- `pnpm test:unit:run` pasa 100% (≥107 tests).
- `pnpm ts:check` y `pnpm lint:check` clean (max-warnings 0).
- Sin cambios fuera de los archivos listados en "Archivos a tocar".
- 1 commit atómico `fix: getWeeklyGasHistory index + DailyView weekly gas (v3.1.2)`.
- Branch pusheada.

## Done en v3.1.0 + v3.1.1 (no tocar)

| Commit | Item |
|---|---|
| `94351cd` | item 4: quitar brix.average |
| `673ab9d` | item 2: bloque 20-21 |
| `56d37f0` | item 3: agregar sabado |
| `e60dd58` | item 1: reordenar form |
| `412416b` | item 6: header 700 + mult |
| `16324cc` | refactor: factores conversion |
| `abaf918` | item 5: gas precarga semanal (introdujo el bug) |
| `9ee7c7d` | items 7-9: KPIs semanales |
| `a6d0bc2` | items 10-12: vista anual base |
| `ced0b63` | docs: v3.1.1 annual extras spec |

## User stories atomicas

### US-GH-1 — Fix `getWeeklyGasHistory` index bug

**Como** operador del sistema,
**quiero** que la precarga de gas en el form muestre el dato real de cada día de la semana desde su propio doc de producción,
**para** detectar diferencias de gas día a día dentro de la misma semana.

**Contexto:** el modelo `ProductionRecord.gasControl` es un array de 6 entradas (una por día lun-sáb). El doc de Martes guarda su valor real en `gasControl[1]`, no en `[0]`. El helper actual lee siempre `[0]`, así que solo Lunes se ve poblado. Los demás días muestran `0` o vacío.

**Scope:** `src/utils/gasHistory.ts:59` — cambiar `record?.gasControl?.[0]` a `record?.gasControl?.[idx]` donde `idx` es el índice del día en `DIAS_KEYS` (Lun=0, Mar=1, Mié=2, Jue=3, Vie=4, Sáb=5).

**Aceptación (TDD — escribir test primero):**
- Test RED: records con `gasControl` de 6 entradas completas; cada doc tiene su valor en el slot correcto (Lun en [0], Mar en [1], ...); `getWeeklyGasHistory('2026-06-05', records)` retorna `history.martes.value === 90` (no 100 del Lunes).
- Implementar fix.
- Test GREEN.
- Tests existentes siguen pasando (usan modelo de 1 entrada; con fix retornan mismo resultado porque `[0]` es el único slot poblado).

**Archivos:** `src/utils/gasHistory.ts` (solo línea 59).

---

### US-GH-2 — DailyView consume `getWeeklyGasHistory`

**Como** operador revisando la vista diaria del viernes,
**quiero** ver el gas control de toda la semana (lun-jue cargados desde sus docs, vie destacado, sáb desde su doc),
**para** tener visibilidad rápida de cuánto gas usó cada día sin entrar al form de cada uno.

**Scope:** `src/pages/DailyView.tsx` — reemplazar el bloque "Control de Gas Diario" (líneas ~524-566) que itera `record.gasControl.map(...)` por:
1. Fetch `allRecords` via `useQuery({ queryKey: ['allProductionRecords'], queryFn: getAllProductionRecords, refetchOnMount: true })` (mismo patrón que NewProductionRecord, AnnualView, MonthlyView — react-query cache compartido).
2. Computar `gasHistory = useMemo(() => getWeeklyGasHistory(date, allRecords), [date, allRecords])`.
3. Computar `currentDayKey = useMemo(() => getCurrentDayKey(date), [date])`.
4. Iterar `DIAS_KEYS` (lun-sáb), por cada uno:
   - Si `entry.hasData`: mostrar chip MUI con `entry.percentage` + value numérico (mantener estilo actual del table body).
   - Si NO: mostrar `N/I` italic muted color (sin chip, sin número). Mismo estilo que NewProductionRecord.
   - Si `dia.key === currentDayKey`: label "Día" en bold (fontWeight 600). Sin highlight de color.
5. Loading state: mientras `isLoading` de la query (renombrar a `isLoadingAllRecords` para distinguir del `isLoading` prop de página), mostrar spinner pequeño inline dentro del Paper del gas, no afecta al spinner de página.

**Aceptación:**
- DailyView muestra 6 filas (lun-sáb) sourced de cada doc de la semana.
- Día actual con label en bold; resto normal.
- Sin chip cuando no hay data, `N/I` italic muted en su lugar.
- Data stale del `record.gasControl` antiguo ya no se renderiza.
- NewProductionRecord no se toca — sigue funcionando (ya consume el helper, que ahora está correcto).
- Spinner inline aparece brevemente solo si la query no está cacheada (caso edge — normalmente react-query ya la tiene warm).

**Archivos:** `src/pages/DailyView.tsx` (solo el bloque gas, líneas ~524-566).

---

### US-GH-3 — Regression test para modelo real de 6 entradas

**Como** developer manteniendo el código,
**quiero** un test que ejercite `getWeeklyGasHistory` con records del modelo real (6 entradas en `gasControl`, una por día),
**para** prevenir que el bug `[0]` vuelva a colarse.

**Contexto:** los tests existentes en `gasHistory.test.ts` (líneas 58-71) usan `gasControl: gas ? [{ day: date, ...gas }] : []` — modelo de 1 entrada. Ese modelo enmascara el bug porque `[0]` siempre es la entrada correcta. Necesitamos tests con el modelo de 6 entradas.

**Scope:** agregar `describe` block o `it` cases en `src/utils/gasHistory.test.ts` que:
1. Construya records con `gasControl` de 6 entradas (`dias.map((d, i) => ({ day: d.label, value: i*10, percentage: i*5 }))`).
2. El doc de Martes tiene value real solo en `[1]`; los otros slots están vacíos o con data distinta.
3. Assert `history.martes.value === 20` (no 0 ni el valor de Lunes).
4. Mismo check para cada día (mie en [2], jue en [3], vie en [4], sab en [5]).
5. Edge case: doc con `gasControl` parcialmente poblado (solo el slot del día propio) — assert correcto.

**Aceptación:**
- Test RED primero (con bug actual: falla porque `martes.value === 0` o el del Lunes).
- Implementar US-GH-1.
- Test GREEN.
- Tests previos siguen pasando.

**Archivos:** `src/utils/gasHistory.test.ts`.

---

## Archivos a tocar (resumen)

| Archivo | Cambio | US |
|---|---|---|
| `src/utils/gasHistory.ts` | fix index `[0]` → `[idx]` (línea 59) | US-GH-1 |
| `src/utils/gasHistory.test.ts` | nuevo test con modelo 6-entradas | US-GH-3 |
| `src/pages/DailyView.tsx` | refactor bloque gas a weekly history | US-GH-2 |

Total: 3 archivos. Diff estimado < 80 líneas (incluyendo tests).

## Convenciones

- pnpm único package manager. `npm`/`yarn` prohibidos.
- Conventional commits: `fix:` para el commit único (afecta bug + integración).
- Sin emojis en código, commits, docs.
- Sin menciones a Claude / Anthropic / IA en artefactos.
- Caveman mode (respuestas tersas).
- TDD estricto: test RED → implement → test GREEN → refactor.
- Coverage target: ≥95% en archivos tocados (paridad con codebase).

## Tests / validacion pre-commit

```bash
pnpm test:unit:run      # debe pasar >=107 tests (106 actuales + 1 nuevo minimo)
pnpm ts:check           # tsc --noEmit, clean
pnpm lint:check         # eslint max-warnings 0
```

## Workflow TDD (orden estricto)

1. **US-GH-3 primero** (test RED):
   - Editar `src/utils/gasHistory.test.ts`, agregar describe block con modelo de 6 entradas.
   - Correr `pnpm test:unit:run src/utils/gasHistory.test.ts` — debe fallar en `history.martes.value`.
2. **US-GH-1** (implement):
   - Editar `src/utils/gasHistory.ts:59`, cambiar `[0]` por `[idx]`.
   - Correr test — debe pasar.
   - Correr suite completa — ningún test previo debe romperse.
3. **US-GH-2** (refactor DailyView):
   - Editar `src/pages/DailyView.tsx`, bloque gas (líneas ~524-566).
   - Sin test nuevo (es UI integration; validación manual en dev).
   - Correr `pnpm ts:check` y `pnpm lint:check` para typecheck/lint.
4. **Validacion final:** los 3 comandos de la sección "Tests / validacion".
5. **Commit atómico:**
   ```bash
   git add src/utils/gasHistory.ts src/utils/gasHistory.test.ts src/pages/DailyView.tsx
   git commit -m "fix: getWeeklyGasHistory index + DailyView weekly gas (v3.1.2)"
   ```
6. **Push:**
   ```bash
   git push -u origin feature/v3.1.2-gas-history-fix
   ```
7. **Output goal:** `<promise>GAS_HISTORY_FIX_DONE</promise>`

## Edge cases a cubrir

- Día seleccionado = domingo: `getCurrentDayKey` retorna `'domingo'`, no matchea con ningún `DIAS_KEYS`. DailyView renderiza las 6 filas sin highlight de bold; sin errores.
- Semana sin records: todas las filas en `N/I`, sin spinner eterno (query resuelve rápido).
- Records con `gasControl` undefined: helper retorna `entry.hasData: false` para todos los días.
- Records con `gasControl` de longitud < 6: helper usa `?.[idx]` que retorna `undefined` → entry.hasData false. OK.
- Recharts (AnnualView) chunk no afectado — no tocamos recharts.
- Cache de react-query: `['allProductionRecords']` ya está en uso por NewProductionRecord, AnnualView, MonthlyView. DailyView se beneficia del cache compartido.

## Patrones a seguir (consistencia con codebase)

- `useQuery` con `queryKey` array, mismo formato que NewProductionRecord.tsx:288-292.
- `useMemo` para computar history, mismo patrón que NewProductionRecord.tsx:295-298.
- Imports: `getAllProductionRecords` desde `@/services/production/productionRecords`; `getWeeklyGasHistory`, `getCurrentDayKey`, `DIAS_KEYS`, `DIAS_LABELS` desde `@/utils/gasHistory`.
- Estilo de tabla MUI: `Table`, `TableHead`, `TableBody`, `TableRow`, `TableCell` — mismas props que ya están en DailyView:539-565.
- Chip MUI: mismo uso que DailyView:553-558 (`color="primary"`, `variant="filled"` si percentage > 0, sino `outlined`).
- Loading inline: `<CircularProgress size={20} />` dentro de un `Box` centrado, no Paper wrapper adicional.

## Decisiones clave (NO cambiar)

- Fix mínimo: solo tocar `gasHistory.ts:59`. No refactorizar más.
- Sin componente compartido entre DailyView/NewProductionRecord (YAGNI; DRY premature).
- Bold label para día actual en DailyView; sin highlight de color (decisión de UX minimal).
- Sin tests de componente para DailyView (validación manual en dev es suficiente; el helper ya tiene cobertura).
- Sin migración de data histórica.
- Sin deploy a producción todavía.

## NO hacer

- No reescribir `DailyView.tsx` completo, solo el bloque gas.
- No tocar `monthlyHelper.ts`, `WeeklyProductionCard.tsx`, `NewProductionRecord.tsx`, `AnnualView.tsx`.
- No cambiar `DIAS_KEYS`, `DIAS_LABELS`, ni agregar domingo a la tabla.
- No agregar dependencias nuevas.
- No tocar `ProductionRecord` type.
- No tocar data de Firebase.
- No deploy.

## Riesgos

| Riesgo | Mitigación |
|---|---|
| Regresión en tests existentes | correr suite completa post-fix; tests previos usan modelo 1-entrada, deben seguir OK |
| DailyView rompe al cambiar de día | validación manual en dev con 3 fechas distintas (lun, mié, vie) |
| Cache de react-query no incluye data fresca | `refetchOnMount: true` ya configurado (mismo patrón que NewProductionRecord) |
| Bold del label genera offset visual | usar `fontWeight: 600` solo en TableCell del día, no en la fila entera |

## Despues de v3.1.2

- PR a `master` desde `feature/v3.1.2-gas-history-fix`.
- Validar visualmente en dev con data real de Firebase (lun, mié, vie de una semana con registros).
- Deploy único via `pnpm deploy` cubriendo v3.1.0 + v3.1.1 + v3.1.2, o separado si cliente prefiere.
- Backlog futuro: extraer `<WeeklyGasTable />` compartido si se repite en 3+ páginas.

## Resume

1. `git checkout feature/v3.1-mejoras-pulpa`
2. `git checkout -b feature/v3.1.2-gas-history-fix`
3. Leer spec: `docs/prd-mejoras-pulpa-2026-06-19.md` sección 16 (ítem 13).
4. Workflow TDD: US-GH-3 (test RED) → US-GH-1 (fix) → US-GH-2 (refactor DailyView).
5. Validar: tests + ts + lint.
6. Commit atómico `fix: getWeeklyGasHistory index + DailyView weekly gas (v3.1.2)`.
7. Push branch.
8. Output: `<promise>GAS_HISTORY_FIX_DONE</promise>`
