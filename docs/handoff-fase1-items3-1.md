# Handoff — Fase 1 items 3 y 1 (sabado + reorder form)

## Branch

`feature/v3.1-mejoras-pulpa` (base: `dev`, ya creada).

## Done en esta sesion

- `3decde6 chore: add v3.1 cotizacion + prd docs and pnpm workspace config`
- `94351cd feat: remove brix.average from model, form, and views`
- `673ab9d feat: add 20:00-21:00 hour block to production form`

Bugs pre-existentes ("tambores/horarios en 0" y "bins malos no se muestran") **no son bugs**: datos en Firebase son reales (0 = horas sin produccion, el operador no trabaja 09:00 estricto). Sin release correctivo. Sin deploy a produccion todavia.

## Estado actual de los tasks

- [x] U-Bug1 — no bug
- [x] U-Bug2 — no bug
- [x] U-Fase1-Item4: Quitar brix.average
- [x] U-Fase1-Item2: Bloque 20:00-21:00
- [ ] **U-Fase1-Item3: Agregar sabado** (proximo)
- [ ] **U-Fase1-Item1: Reordenar secciones del form** (ultimo)

## Item 3 — Agregar sabado

**Archivo principal:** `src/pages/NewProductionRecord.tsx`, `src/utils/monthlyHelper.ts`, `src/pages/MonthlyView/WeeklyProductionCard.tsx`, tests asociados.

**Que hacer:**

1. **NewProductionRecord.tsx line 27-33** — agregar `{ label: 'Sabado', key: 'sabado' }` al array `dias`. Mantener orden Lun-Sab.

2. **NewProductionRecord.tsx line 187-193** — el `gas` state inicial y los helpers (`getInitialFormState` line 62-67, `getEmptyFormState` line 151) deben pasar de `Array(5)` a `Array(6)` para soportar 6 dias.

3. **NewProductionRecord.tsx line 309-313** — el `fallbackRecord.gasControl` ya itera sobre `dias` (5→6 entradas), asi que este bloque se actualiza solo. Pero el `gas[i]` index en `handleSubmit` y en el render del form debe quedar consistente con el nuevo length.

4. **monthlyHelper.ts** — la logica `getWeekInfo` ya retorna `weekendDaysInTargetMonth` separadamente (commit `c1ab6f1` en master, ya esta en dev). **NO** tocar `getWeekInfo`. **NO** tocar `groupRecordsByWeek`. Ya soportan sabado. La regla "lun-sab = 6 dias laborales" **ya esta implementada** segun el handoff original ("Business week overflow ya implementado en monthlyHelper lo soporta").

5. **Tests:** extender `monthlyHelper.test.ts` con caso sabado. Mirar tests existentes del `c1ab6f1` commit para no duplicar. Solo anadir casos que verifiquen:
   - `getWeekInfo` retorna sabado en `weekendDaysInTargetMonth` (NO en `businessDaysInTargetMonth`)
   - `groupRecordsByWeek` incluye registros con `date.getDay() === 6` en el array `weekendIndicators` del WeeklyProductionCard
   - `sumDrums` y otras agregaciones suman correctamente cuando hay registros de sabado

6. **WeeklyProductionCard.tsx** — el render de `weekendIndicators` ya existe (commit `abebfb8`). **NO reescribir**. Solo verificar que se ve bien con un registro de sabado. Si el tooltip actual no muestra bins/gas para sabado, agregar (simetria con el tooltip de weekday).

**Aceptacion (PRD item 3):**
- Sabado seleccionable en form (el `dias` array incluye `Sabado`).
- Registros con `date.getDay() === 6` se incluyen en la semana correspondiente via `weekendIndicators` (no en `businessDaysInTargetMonth`).
- Weekly card muestra 6 dias de business + fines de semana si hay registros.
- `businessDaysInTargetMonth` sigue siendo 5 (lun-vie), `weekendDaysInTargetMonth` sigue siendo los sab/dom.
- `getProductionRecordsForMonthlyView` no requiere cambios.
- Tests pasan.

**Edge cases:**
- Si el sabado no tiene registro: no se renderiza chip rojo (regla ya implementada en commit `abebfb8`: `if (!record) return null`).
- Si tiene registro: chip verde con tooltip.
- Si es sabado 1ro del mes: el form debe permitir registrar el sabado con `getDay() === 6`.

**NO hacer:**
- NO cambiar `getWeekInfo` ni `groupRecordsByWeek`. Ya estan correctos.
- NO agregar sabado a `businessDaysInTargetMonth`. La regla del cliente es lun-sab = 6 dias, pero `businessDaysInTargetMonth` se mantiene en 5 (lun-vie); los sabados van por la via `weekendIndicators`.
- NO cambiar la formula de overflow de mes.

**Patrones a seguir:**
- Mismo patron que ya existe para weekday `dayIndicators` (line 68-207) y `weekendIndicators` (line 210-284) en WeeklyProductionCard.tsx. Simetria.
- Mismo patron que ya existe en `getWeekInfo` (line 218-222): `if (dayOfWeek >= 1 && dayOfWeek <= 5) { businessDays... } else if (dayOfWeek === 0 || dayOfWeek === 6) { weekendDays... }`. Esto ya incluye sabado (6) en weekend. **NO TOCAR**.

**Coverage target:** ≥95% en archivos tocados (paridad con codebase).

## Item 1 — Reordenar secciones del form

**Archivo principal:** `src/pages/NewProductionRecord.tsx`.

**Que hacer:** Solo el orden de los `<Paper>` blocks en el render (line 416-812). NO tocar state, NO tocar handlers, NO reescribir el archivo.

**Nuevo orden (segun cotizacion item 1 y PRD):**
1. Informe proceso: `Fecha del Registro` (line 423-435) + `Horarios del Proceso` (line 436-460)
2. Estado de bins (line 608-692)
3. Tambores y Horarios (line 462-491)
4. Stock de Tambores (line 492-540)
5. Stock de Bolsas (line 541-607)
6. Brixs (line 693-751)
7. Control de Gas Diario (line 752-798)
8. Comentarios (line 799-812) — esto queda al final, no se reordena

**Operacion:** mover los `<Paper>` blocks como unidades completas. Mantener todo el JSX interno intacto. La forma mas limpia: hacer `git mv` logico cortando y pegando bloques, no reescribir.

**NO hacer:**
- NO reescribir el archivo completo. Solo mover bloques.
- NO cambiar el state.
- NO cambiar los handlers.
- NO agregar nuevos campos.

**Aceptacion:**
- Visualmente las secciones aparecen en el orden listado.
- El state del form no cambia.
- No se introducen regresiones en submit/load existentes.
- Tests pasan.

## Tests / validacion pre-commit

Para cada item:
```
pnpm test:unit:run  # 67+ tests
pnpm ts:check       # tsc --noEmit
pnpm lint:check     # eslint max-warnings 0
```

Si hay tests nuevos o modificados, agregar al archivo correspondiente:
- `monthlyHelper.test.ts` para helpers
- `productionRecords.test.ts` para services
- Si se agrega test de componente, crear `ComponentName.test.tsx` adyacente

## Convenciones

- pnpm unico package manager
- Conventional commits: feat / fix / chore / docs / test
- Sin emojis en codigo, commits, docs
- Sin menciones a Claude/Anthropic/IA
- Caveman mode (respuestas tersas)
- Commits atomicos: 1 commit por item

## Archivos clave referencia

- `src/services/production/types.ts` — `ProductionRecord` (ya sin `brix.average`)
- `src/services/production/productionRecords.ts` — queries
- `src/utils/monthlyHelper.ts` — logica de business week (NO TOCAR en item 3, ya correcto)
- `src/utils/dates.ts`, `src/utils/formatNumberES.ts` — helpers
- `src/pages/NewProductionRecord.tsx` — form (item 3 modifica dias + gas array, item 1 solo reordena)
- `src/pages/DailyView.tsx` — vista diaria (ya sin promedio brix)
- `src/pages/MonthlyView/WeeklyProductionCard.tsx` — chip render (ya soporta sabado via weekendIndicators)

## Decisiones clave ya tomadas

- Sabado = dia laboral mas (lun-sab = 6 dias via weekendIndicators, no en businessDaysInTargetMonth).
- `businessDaysInTargetMonth` se mantiene en 5 (lun-vie). Decision confirmada en handoff original.
- Sin emojis, sin dependencias nuevas salvo recharts (que es para fase 4).
- Sin deploy a produccion todavia.
- Sin migracion de data historica.
- Sin release correctivo (no eran bugs).

## Cosa que NO hacer

- No cambiar tarifa ni items de la cotizacion.
- No usar emojis.
- No usar npm/yarn (solo pnpm).
- No tocar data historica.
- No introducir dependencias nuevas salvo recharts.
- No reescribir NewProductionRecord.tsx completo, solo mover bloques.
- No tocar `getWeekInfo` ni `groupRecordsByWeek` en item 3 — ya soportan sabado.

## Despues de fase 1

Una vez items 3 y 1 merged:
- Fase 2: items 5 (gas precarga) y 6 (700kg header + multiplicacion).
- Fase 3: items 7, 8, 9 (KPIs semanales).
- Fase 4: items 10, 11, 12 (vista anual con recharts).
- Deploy unico al final con `pnpm deploy`.

## Resume

1. `git checkout feature/v3.1-mejoras-pulpa`
2. Item 3: agregar sabado a `dias` + tests, commit atomico.
3. Item 1: reordenar papers del form, commit atomico.
4. Validar tests + ts + lint.
5. Reportar.
