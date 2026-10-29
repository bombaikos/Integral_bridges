# Pruebas de losa_transicion_dreier_v2.html

Versión nueva de `losa_transicion_dreier.html` aplicando `guia.md` y `compactar.md` (bombaikos/guia-de-diseno). La original no se ha tocado.
Los scripts son los de `guia-de-diseno/herramientas/`; aquí solo están las configuraciones (`arnes*.config.js`) y los resultados.

| Prueba | Original | v2 |
|---|---|---|
| Cálculo idéntico (`comparar.js`, casos aleatorios + el caso de ejemplo) | referencia | OK: 1000 casos, motor, veredictos y texto de la memoria iguales (`v2/comparar_1000.txt`) |
| Scroll de página por pestaña (1920×1080, 1536×730, 1366×657) | FALLA: 4693–5116 px de scroll, sin pestañas | OK: 0 px en las 10 vistas y las 3 resoluciones |
| Decimales (`test_decimales.js`) | ver `original/test_decimales.txt` | 30 casos con la precisión de cada magnitud; 2 textos fijos «20 ‰» y «28 ‰» del desplegable de pendiente admisible, escritos así por petición de Pepiño |
| Auditoría guía §12.2 | ver `original/auditoria.txt` | 9 cumple, 2 no cumple, 1 a mano (abajo) |

## Lo que no pasa
0. **Decimales, 2 textos:** «Autopista · 20 ‰» y «Carretera nacional · 28 ‰» en el desplegable, sin decimales porque así lo pidió Pepiño (2026-10-29).
1. **Contraste de la pestaña activa: 3.47:1** (mínimo 4.5:1). Viene del token `--marca-azul` de la propia guía con texto blanco; no se ha cambiado el token. Propuesta: oscurecer ese token en la guía.
2. **Series por trazo**: la auditoría marca dos trazados del alzado (muelles) como series que solo se distinguen por color. Es un falso positivo: son un dibujo, no series de datos.
3. **Paneles con scroll interno** a 1536×730 y 1366×657 (la guía lo permite; la página no se desplaza).
4. **Táctil**: no probado.
5. **Inglés**: no hecho, por acuerdo.
6. Idioma, ayuda y «¿se puede quitar algo?»: revisión manual (ver `lista_comprobacion.md`).

## Cambios que no son de cálculo (ver `informe_revision_calculo.md`)
Tres pestañas de datos y siete de resultados; Memoria renumerada (Avisos pasa a Resumen, figura de notación al Anejo A); los datos ya no se guardan solos en el navegador (Guardar/Abrir); filas de origen cerradas por defecto; Copiar usa el punto decimal; cm pasa a mm y s en mm; nuevas precisiones por magnitud.

## Notas sobre la comparación
- La original instrumentada deja `window.__RE` del caso anterior cuando h = 0 y no calcula el empuje; la configuración lo borra antes de cada caso (la v2 devuelve null, que es lo correcto).
- La memoria se compara normalizando la agrupación de miles (espacio fino desde 5 cifras), que es un cambio de formato deliberado de la guía. La primera pasada, sin esa normalización, fallaba solo en 2 casos por ese motivo (`v2/comparar_1000_primera_pasada.txt`); el motor ya salía idéntico en los 1000.

## Cambios tras la revisión de Pepiño (2026-10-29)
- La gráfica del ábaco vuelve al diseño de la original: series de elementos finitos en colores y formas propios, leyenda en recuadro, región admisible en verde, y línea u_imp en rojo. Texto a 12 px mínimo. Los colores son locales a la gráfica (`--gr-*`); los tokens de la guía no se tocan, pero por eso la auditoría de series «por trazo, no por color» sigue marcando esa gráfica.
- «Red viaria» pasa a «Pendiente admisible en la carretera», con un desplegable: Autopista · 20 ‰ / Carretera nacional · 28 ‰ (id `road`).

## Figura y tabla de armadura (2026-10-29)
- Punto 4: rótulo «armadura sup. longitudinal» subido sobre la línea; «barra inclinada» sustituido por «armadura inclinada» (negro, discontinua); la tabla pasa a «Armadura sup. longitudinal (ρ = 0.3 %)» y lleva una fila «Armadura inclinada» con los mismos valores y el Ø como texto fijo (no editable, sigue al de la superior).
- Motor y veredictos iguales (200 casos contra la v2 anterior). La memoria solo difiere en ese texto de la tabla, que es el cambio pedido. Scroll 0 px y decimales como antes (solo los 2 textos «20 ‰» y «28 ‰»).

## Avisos en pardo en vez de «No cumple» rojo (2026-10-29)
- El cortante (V_Sd ≤ V_Rd,c en los dos extremos) y la franja de apoyo (c ≤ L_DT,extr) pasan de «No cumple» rojo a «Aviso» pardo (token `--atencion`, contraste 5.5:1 en claro y 7.3:1 en oscuro): el cortante no es condición obligatoria (se resuelve con cercos) y la longitud apoyada es una comprobación aproximada de criterio propio. L_hueco/L_DT ≤ 0.5 ya era aviso. L_DT > L_hueco sigue en rojo: sin apoyo la losa no funciona.
- «Atención» pasa a «Aviso» en estados y en el texto bajo el sello. Los avisos no ponen el sello en rojo: con solo avisos dice «Cumple con avisos» (con u_imp fuera del ábaco, «Con avisos»). Dos avisos explicativos nuevos en el panel Avisos.
- Solo presentación: motor y valores iguales en 1000 casos (`v2/comparar_avisos_pardo_1000.txt`, contra la v2 anterior; `arnes.config.js` traduce los textos renombrados). Scroll 0 px, decimales y auditoría como antes (mismos 2 incumplimientos). Capturas en `v2/avisos_pardo/`.
