# Listas de comprobación — losa_transicion_dreier_v2.html

Resultados medidos en Chromium (ver `v2/`). «Mano» = no medible, revisado por inspección.

## guia.md § 12.2
| Punto | Estado | Medida |
|---|---|---|
| Tokens copiados tal cual (solo --acento, --banda) | cumple | auditoría, claro y oscuro |
| Texto ≥ 12 px, también en SVG | cumple | mínimo ≥ 11.9 px |
| Escala 12/14/16 (28 solo veredicto) | cumple | |
| Contraste AA del texto pequeño | **no cumple** | 3.47:1 en pestaña activa (token --marca-azul de la guía) |
| Barra de 52 px, Archivo, Ayuda, pantalla completa | cumple | 52 px |
| Abrir y Guardar | cumple | |
| Campos de 26 px | cumple | 26 px |
| Sin botón Calcular | cumple | |
| Tablas > 4 filas con Copiar | cumple | |
| Series por trazo, no color | **no cumple** | gráfica del ábaco con colores, como la original (decisión de Pepiño); y muelles del alzado (falso positivo) |
| Sin errores de JavaScript | cumple | |
| Separador decimal punto, U+202F antes de unidad | cumple | test_decimales OK |
| Sin scroll de página en PC | cumple | 0 px, 3 resoluciones |
| Nada aparece o desaparece | cumple (mano) | datos no válidos se atenúan |
| Táctil | no probado | |
| Idioma es/en | no cumple por acuerdo (solo español) | |
| Ayuda | mano: botón Ayuda presente | |
| «¿Se puede quitar algo?» | mano | |

## compactar.md § 13
| Punto | Estado |
|---|---|
| Inventario y pruebas sobre la original antes de tocar | cumple (`original/`) |
| Revisión del cálculo documentada | cumple (`informe_revision_calculo.md`) |
| Una sola ronda de decisiones | cumple |
| Versión nueva, original intacta | cumple |
| Motor sin cambios (`motor(I)` puro) | cumple, ver comparar |
| Cálculo idéntico | OK en 1000 casos (`v2/comparar_1000.txt`) |
| Scroll por pestaña | cumple |
| Decimales | cumple |
| Auditoría | 2 no cumple (arriba) |
| Código retirado tras constante CON_* | cumple (CON_PASADOR, CON_TRAZA) |
| Capturas | `v2/capturas/` (selección en la entrega) |
