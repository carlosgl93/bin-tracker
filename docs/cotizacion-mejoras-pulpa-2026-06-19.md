# Cotización — Mejoras Pulpa (Bin Tracker)

| | |
|---|---|
| **Para** | Sebastián Irarrázabal — Pulpa Los Robles |
| **Contacto** | +56 9 9199 5193 |
| **De** | Carlos Gumucio |
| **Fecha** | 19 de junio de 2026 |
| **Validez** | 15 días corridos |
| **Proyecto** | Pulpa / Bin Tracker — Release de mejoras |
| **Versión app** | v3.0.0 |

---

## 1. Contexto

La presente cotización cubre las mejoras y ajustes al producto Pulpa / Bin Tracker acordadas en reunión de trabajo, sobre la aplicación actualmente en producción en [https://bintracer-fd72d.web.app](https://bintracer-fd72d.web.app).

El alcance se limita a **mejoras funcionales y de UX**. La corrección de bugs pre-existentes (release correctiva) se entrega por separado, sin costo, en una release previa.

---

## 2. Alcance

### 2.1 Formulario de nuevo registro (reorden + ajustes)

| # | Ítem | Detalle | Horas est. |
|---|---|---|---|
| 1 | Reordenar secciones del formulario | Nuevo orden: (1) Informe proceso, (2) Estado de bins, (3) Tambores y horario, (4) Stock de tambores, (5) Stock de bolsa, (6) Brix, (7) Gas | 2,5 |
| 2 | Agregar bloque 20:00–21:00 | Nueva fila en producción por hora (rango horario 20:00–21:00) | 1,5 |
| 3 | Agregar sábado | Día disponible en: días del form, lógica de business week, weekly view, resumen semanal | 2,5 |
| 4 | Quitar promedio de Brix | Eliminar campo `brix.average` del modelo, formulario y vistas | 0,5 |

### 2.2 Gas (precarga de histórico por día)

| # | Ítem | Detalle | Horas est. |
|---|---|---|---|
| 5 | Gas: precargar último valor conocido | Al abrir el form, cada fila de día muestra como readonly el último valor de gas registrado (si no hay valor para el día actual) | 2,5 |

### 2.3 Vista diaria — Estado de bins

| # | Ítem | Detalle | Horas est. |
|---|---|---|---|
| 6 | Header "700 kg" + multiplicación X × 700 = Z | Mostrar título "700 kg" arriba del bloque; por cada fuente (Inicio, Chechito, Don Luis, Otros) desplegar la multiplicación `cantidad × 700 = kilos producidos` | 1,5 |

### 2.4 Vista mensual — KPIs semanales nuevos

| # | Ítem | Detalle | Horas est. |
|---|---|---|---|
| 7 | Bloque "Kilogramos recepcionados" | Ubicado entre el bloque amarillo (kg producidos) y el azul (stock). Suma diaria de bins de Chechito + Don Luis + Otros × 700, agregada por semana | 2,0 |
| 8 | Bloque "Bins malos" | Sumatoria semanal de `binsMalfunction` | 1,0 |
| 9 | Bloque "% malos vs producidos" | Ratio semanal de bins malos sobre total producidos | 0,5 |

### 2.5 Vista anual

| # | Ítem | Detalle | Horas est. |
|---|---|---|---|
| 10 | Selector de año | DatePicker con vista de año | 1,0 |
| 11 | Cuadro resumen mensual | Tabla con columnas: bins entrados, kg entrados, tambores salidos, kg salidos — un fila por mes del año seleccionado | 4,0 |
| 12 | Gráficos del resumen | Visualización gráfica del cuadro resumen (tendencias mensuales) | 2,5 |

---

## 3. Estimación de horas y monto

| | |
|---|---|
| Total horas estimadas | **22,5 horas** |
| Tarifa | **0,5 UF/hr** (CLP 19.990/hr) |
| Subtotal | **CLP 449.775** |
| Total estimado | **CLP 449.775** |

---

## 4. Plazo de entrega

**Esta semana (semana del 23 al 27 de junio de 2026).**

Workflow:
1. Release correctiva (bugs pre-existentes) — sin costo, entrega inmediata.
2. Release de mejoras (este alcance) — entrega al cierre de la semana.

---

## 5. Forma de pago

**Contra entrega** de la release de mejoras, una vez validada en producción.

- **Medio de pago:** transferencia bancaria.
- **Moneda:** CLP.

---

## 6. Garantía

**30 días corridos** post-entrega, cubriendo defectos o regresiones introducidas por el código nuevo de esta release.

No cubre:
- Modificaciones al alcance descritas en la sección 2.
- Bugs pre-existentes en releases anteriores.
- Cambios solicitados fuera de este alcance.

---

## 7. Fuera de alcance

- Fixes de bugs pre-existentes (entregados aparte, sin costo).
- Nuevas features no listadas en la sección 2.

---

## 8. Aceptación

La aceptación de esta cotización se realiza mediante:

- Confirmación escrita por el cliente (WhatsApp / email), **o**
- Pago del monto acordado.

Una vez aceptada, cualquier ítem adicional se cotiza por separado a la misma tarifa (0,5 UF/hr).

---

_Pulpa Los Robles · Cotización v1 · 19-06-2026_
