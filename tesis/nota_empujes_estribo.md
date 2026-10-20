# Empuje de tierras sobre el estribo de un puente integral (Dreier, EPFL 4880)

Fuente: tesis de Dreier, cap. 5, §5.1 y §5.1.1 (págs. 77–82 de la tesis, ≈ 95–100 del PDF), con apoyo en §4.1 (págs. 49–51), tablas 2.1 y 3.2. Decimal siempre con punto.

## 1. El problema
El muro del estribo recibe a la vez el desplazamiento impuesto `u_imp` del tablero, las cargas verticales y el empuje del relleno `σh`. Ese empuje depende del desplazamiento del muro y de la **historia de carga del relleno**, que casi no se puede estimar. Hay interacción suelo-estructura: la rigidez del muro (fisuración) depende del empuje, y el empuje depende de la deformación del muro.

## 2. Coeficientes de partida
| Coeficiente | Fórmula | Nota |
|---|---|---|
| Reposo | `K0 = 1 − sen φ` (ec. 4.2, Jaky) | suelos granulares |
| Activo | `Ka = (1 − sen φ)/(1 + sen φ)` (ec. 4.3, Rankine) | muro vertical sin rozamiento; se alcanza con ~0.001·h |
| Pasivo | `Kp` de Caquot–Kérisel, según φ y rugosidad δ del muro | se alcanza con ~0.01·h; la tesis no da una fórmula, remite a tablas |

Rankine (δ = 0) da `Kp = (1 + sen φ)/(1 − sen φ)`, que **subestima** el Kp real con muro rugoso. Para φ = 37° (grava compactada, tabla 3.2): K0 = 0.398, Ka = 0.249, Kp Rankine = 4.02.

Las tablas de Caquot–Kérisel están en su libro de 1973 (no disponible aquí). La calculadora usa en su lugar la solución analítica de Lancellotta (2002), que se obtiene de una espiral logarítmica y coincide con Rankine para δ = 0: `Kp = (cos δ + √(sen²φ − sen²δ))/(1 − sen φ) · exp(2θ tan φ)`, con `θ = ½[asen(sen δ/sen φ) + δ]`. Es una cota inferior, algo por debajo de Caquot–Kérisel. Valores obtenidos (muro vertical, terreno horizontal):

| φ | δ = 0 | δ = φ/2 | δ = 2φ/3 | δ = φ |
|---|---|---|---|---|
| 30° | 3.00 | 4.44 | 4.93 | 5.80 |
| 35° | 3.69 | 6.16 | 7.09 | 8.85 |
| 37° | 4.02 | 7.11 | 8.31 | 10.66 |

Contraste con fuentes en línea (sin verificar con el libro original): para φ = 35° y δ/φ entre 0.5 y 0.66 se citan valores de 6.3–6.5 y 7.5–8.0, es decir, la fórmula queda un 5 % a 10 % por debajo.

## 3. Evolución del relleno (fig. 5.3)
1. Tras colocar el relleno: estado `K0`.
2. Retracción y fluencia acortan el tablero (unos 20 años): rotura activa, `K → Ka`.
3. Después, los ciclos térmicos recompactan el relleno y el empuje vuelve a subir hasta un `K` difícil de estimar y variable en la altura. En laboratorio (England, Cosgrove-Lehane, Goh) el empuje pasivo crece ciclo a ciclo de forma logarítmica (*ratcheting*).

## 4. Método propuesto: BA 42/96
Con `u_imp,ΔT = αT · ΔT · L_pf` (αT ≈ 10⁻⁵ 1/°C; ΔT = ±20 °C para hormigón según SIA 261, tabla 2.1):

- Estribo semi-integral (ec. 5.1), constante en toda la altura: `K = K0 + (40 · u_imp,ref / h)^0.4 · Kp ≤ Kp`
- Estribo integral (ec. 5.2), hasta z = h/2: `K = K0 + (20 · u_imp,ref / h)^0.4 · Kp ≤ Kp`. Por debajo de h/2 el coeficiente se reduce progresivamente hasta el empuje al reposo, por compactación parcial y por la forma de la deformada.
- `h` es la altura del muro en el integral y la altura del tablero en el semi-integral.
- Referencia de u_imp: BA 42/96 usa `u_imp,ΔT`. La norma suiza (OFROU 2010) usa `max(u_imp,ΔT ; u_imp,Q + 0.6·u_imp,ΔT)`.
- Dirección activa: se propone usar `Ka` en toda la altura.

## 5. Qué desaconseja la tesis
- Muelles (módulos de reacción) y elementos finitos para el empuje: dependen de una historia de carga hipotética.
- Geosintéticos y EPS (Horvath, Pötzl y Naumann): reducen empuje y asiento, pero son caros y se reservan para casos extremos.

## 6. Qué comprobar en el diseño (§6.1 del resumen)
Dos casos a largo plazo: **activo** (u_imp máximo) y **pasivo** (empuje alto y gran cortante en cabeza). Se busca ductilidad en cabeza y pie del muro más que resistencia.

## 7. Interpretaciones propias (a confirmar)
- Entre z = h/2 y z = h, el texto dice «progresivamente»: se ha supuesto variación **lineal** de K hasta K0 en el pie.
- La tesis define `u_imp = αT (Tmax − Tmin) L_pf`: la calculadora toma ΔT como dato de entrada, sin decidir si es la amplitud total o la semiamplitud.
- Kp: la calculadora usa Lancellotta con δ = 2/3·φ (el valor de interfaz del modelo de Dreier) y deja introducir un Kp propio (p. ej. de Caquot–Kérisel).
