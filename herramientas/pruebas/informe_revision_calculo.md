# Revisión del cálculo (losa de transición, Dreier)

Alcance: lectura del código del motor de `losa_transicion_dreier.html`, sin recálculo independiente. El motor **no se ha cambiado**: `losa_transicion_dreier_v2.html` lo trae separado de la pantalla (`motor(I)` y `motorEmpuje(...)`, funciones puras) y la comparación con la original da el mismo resultado en todos los casos (ver `README.md`).

## Sin errores que cambien resultados
No he encontrado fórmulas mal transcritas respecto de lo que dice el Anejo C. Lo siguiente es lo que queda abierto o sin uso:

1. **Rama con pasador sin uso.** La unión articulada con pasador (ec. 5.13, giro Δα) está detrás de `conn === "pin"`, pero `conn` es siempre `"hinge"`. En la v2 queda como código retirado (`CON_PASADOR = false`), no se borra.
2. **Criterios ya decididos** (no se vuelven a plantear): ec. 5.3 con tan(45° − φ/2), ec. 5.15 con L², m⁻pl,d = −55 kN·m/m solo en la ec. 5.14, L_diag = 0.62 m fijo, cortante a 2d con ancho 2.40 + 4d, franja de apoyo con q_adm = 350 kN/m² (criterio propio), δ = φ_k en el axil. Están en el Anejo C.
3. **Datos vacíos o no válidos.** En la original un campo vacío producía `NaN` en cadena y se pintaban resultados vacíos. En la v2 el campo se marca y los resultados quedan atenuados con el último cálculo válido (guía 1.7). Es un cambio de interfaz; el motor recibe siempre números.
4. **Valores que conviene confirmar** (no son errores): K_p de Lancellotta queda un 5–10 % por debajo de Caquot–Kérisel (ya anotado); el empuje es característico, sin mayorar; el límite 0.5 de L_hueco/L_DT es una lectura propia de la frase de la tesis (PDF p. 126).
5. **Casos que no se modelan** (ya en el Anejo C): fisuración del aglomerado (ec. 4.5), dirección pasiva, comprobación estructural del muro.

## Cambios de presentación que no son de cálculo
- Longitudes del detalle de la rótula: de cm a mm (guía 4, un solo sistema).
- Separación de armadura en mm con 0 decimales (antes m con 3).
- Ángulos con 1 decimal, K con 3, razones con 2, χ_adm con 2 (tabla de precisiones de la guía).
