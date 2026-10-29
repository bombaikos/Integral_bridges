# Pruebas de losa_transicion_dreier_v2.html

Versión nueva de `losa_transicion_dreier.html` aplicando `guia.md` y `compactar.md` (bombaikos/guia-de-diseno). La original no se ha tocado.
Los scripts son los de `guia-de-diseno/herramientas/`; aquí solo están las configuraciones (`arnes*.config.js`) y los resultados.

| Prueba | Original | v2 |
|---|---|---|
| Cálculo idéntico (`comparar.js`, casos aleatorios + el caso de ejemplo) | referencia | OK: 1000 casos, motor, veredictos y texto de la memoria iguales (`v2/comparar_1000.txt`) |
| Scroll de página por pestaña (1920×1080, 1536×730, 1366×657) | FALLA: 4693–5116 px de scroll, sin pestañas | OK: 0 px en las 10 vistas y las 3 resoluciones |
| Decimales (`test_decimales.js`) | ver `original/test_decimales.txt` | OK: 30 casos, precisión de cada magnitud |
| Auditoría guía §12.2 | ver `original/auditoria.txt` | 9 cumple, 2 no cumple, 1 a mano (abajo) |

## Lo que no pasa
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
