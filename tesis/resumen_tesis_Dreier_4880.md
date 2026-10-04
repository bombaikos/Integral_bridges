# Interacción suelo-estructura en puentes integrales
**Damien Dreier — Tesis EPFL nº 4880 (2010)**, dirigida por el Prof. Aurelio Muttoni (laboratorio IBETON, EPFL), financiada por la Oficina Federal de Carreteras suiza (OFROU).
PDF: [EPFL_TH4880.pdf](../EPFL_TH4880.pdf) (225 páginas: 157 de texto, más anexos).

> Resumen hecho a partir del texto completo. Las cifras están tomadas de la tesis; las referencias entre corchetes indican capítulo, ecuación o figura.

---

## 1. La idea en pocas líneas

Los aparatos de apoyo y las juntas de dilatación son el punto débil de los puentes: se corroen, se atascan, dejan pasar agua y obligan a cortar el tráfico para su mantenimiento. Eliminarlos (puente **integral**) obliga a tratar puente, estribo, terraplén, pila y cimentación como **un único sistema**, es decir, a considerar la **interacción suelo-estructura**.

La tesis estudia dos zonas:

1. **El extremo del puente (estribo + losa de transición)**: asiento del pavimento al final de la losa de transición, vacío detrás del muro del estribo, fisuración del aglomerado en la unión estribo-losa y empuje de tierras.
2. **El sistema pila–cimentación superficial**: fisuración de la pila en servicio por el desplazamiento impuesto en cabeza.

**Conclusión principal:** con pequeños cambios geométricos en la losa de transición (más larga y más inclinada, es decir, con su extremo más **enterrado**), un nuevo detalle de unión tipo **rótula de hormigón** y un modelado realista del suelo, la longitud de los puentes integrales puede superar claramente el límite suizo actual (unos 60 m), casi sin sobrecoste.

---

## 2. Conceptos y terminología (cap. 1)

Según la directiva OFROU 2010:
- **Estribo con juntas:** con apoyos y junta de dilatación.
- **Estribo semi-integral:** solo junta, o solo apoyos.
- **Estribo integral:** sin apoyos ni juntas.

Lo mismo se aplica al puente completo (puente con juntas, semi-integral o integral).

**Objetivos de la tesis:**
- Evaluar los problemas propios de los puentes integrales considerando el suelo.
- Determinar los límites de aplicación de los estribos integrales.
- Proponer soluciones constructivas sencillas para superar el límite vigente, que es un **desplazamiento impuesto u_imp < 20 mm**.
- Estudiar la fisuración en servicio de pilas con cimentación superficial.

**Aportaciones propias:**
- Modelo numérico σ-ε y M-κ-N del hormigón bajo carga mantenida, descarga y recarga.
- Estudio por elementos finitos del asiento al final de la losa de transición, con un modelo de suelo avanzado.
- Propuesta geométrica para la losa de transición.
- Método simplificado de dimensionamiento de la losa.
- Nuevo detalle de unión validado con ensayos.
- Método para evaluar pilas sometidas a desplazamiento impuesto.

---

## 3. Estado del arte (cap. 2)

### 3.1 El desplazamiento impuesto u_imp (la acción clave)
**u_imp = k_tablero · L_pf · ε_imp**, con **ε_imp = ε_retracción + ε_fluencia + ε_ΔT** [ec. 2.1].
- **L_pf** es la distancia del **punto fijo** (centro de rigidez longitudinal) al estribo o pila. En un puente simétrico, L_pf = L_puente / 2.
- **k_tablero** mide cuánto se coarta el tablero. En estribos integrales con relleno granular, k ≈ 1 (el suelo apenas coarta).
- **Fluencia:** ε_cr = σ_c,n · φ / E_c,0 [ec. 2.4].
- **Incertidumbre:** entre modelos (CEB-FIP, EN 1992-2, RILEM B3) hay diferencias del 20–30 %. Por eso se recomienda un estudio de sensibilidad.
- **Temperatura:** ε_ΔT = α_T · ΔT, con α_T ≈ 10⁻⁵ /°C. Según SIA 261, ΔT_uniforme = ±20 °C para hormigón, ±30 °C para acero y ±25 °C para mixto.
- **Valores adoptados en toda la tesis:** retracción −0,3 ‰, fluencia −0,3 ‰ y temperatura ±0,2 ‰, es decir, **ε_imp = −0,8 mm/m** de acortamiento máximo.
- **Direcciones:** se llama **activa** cuando el tablero se acorta (retracción, fluencia y frío), y el muro se separa del terraplén. Se llama **pasiva** cuando el tablero se alarga (calor).
- **Puentes mixtos, o eliminación de juntas en puentes existentes (25–30 años):** solo cuenta la temperatura, porque la retracción y la fluencia ya se han producido.

### 3.2 Reglas suizas vigentes (OFROU 2010)
- **u_imp < 5 mm:** sin junta y sin losa de transición.
- **5 ≤ u_imp < 20 mm:** sin junta, pero **con** losa de transición.
- **u_imp ≥ 20 mm:** junta y losa de transición.
- **Equivalencia en longitud:** con ε_imp = −0,8 ‰, el límite de 20 mm equivale a un puente simétrico de **unos 50 m**. Con deformaciones menores, la longitud crece: 62 m con −0,65 ‰ y 80 m con −0,5 ‰ [§ 2.4.2].
- **Losa de transición típica suiza:** **L = 4–6 m, pendiente α = 10 %, espesor h = 0,30 m**, apoyada directamente sobre el terraplén.

### 3.3 Uniones estribo–losa de transición recomendadas [fig. 2.14]
- **(a) Pasador de acero:** el centro de giro queda a ~0,6 m bajo el pavimento, lo que fisura el aglomerado. Solo se admite en estribos con juntas.
- **(b) Placa de deslizamiento con armadura de conexión:** el giro se produce cerca de la superficie. Es la solución recomendada para estribos (semi)integrales, pero es difícil de ejecutar.
- **(c) Junta de betún-polímero:** admite unos ±10 mm. Solo sirve para desplazamientos pequeños.
- **(d) Variante del cantón de los Grisones:** doble impermeabilización y 15 cm más de capa bituminosa.

Hay casos reales de fisuración del pavimento con el detalle (a), por ejemplo en los puentes de Reichenau (68 m) y Cumpadials (80 m).

### 3.4 Pilas
- El momento en la pila debido a u_imp depende de las uniones en cabeza y pie. Una articulación en el pie **divide por 2** el momento en cabeza respecto al empotramiento [fig. 2.19].
- Una cimentación superficial sobre buen suelo queda entre el empotramiento y la articulación.
- Hay que buscar un compromiso: rigidez para el estado límite último (pandeo) frente a flexibilidad para el de servicio (fisuración).

---

## 4. Materiales (cap. 3)

**Hormigón:**
- Ley σ-ε de Guidotti et al. [ec. 3.1–3.3], que solo necesita f_c y E_c.
- Daño en descarga con un parámetro **λ = 4** (calibrado con ensayos de Karsan y de Imran-Pantazopoulou).
- Carga mantenida: ε = ε₀(1+φ) + ε_sh.
- Fluencia no lineal: φ = φ_lin · (1 + 2(σ/f_c)⁴) [ec. 3.10]. Rotura bajo carga mantenida si σ > 0,7 f_c.
- Relación M-κ-N a largo plazo en 5 pasos (Fernández Ruiz), con módulo E_φ = E₀/(1+χφ) y coeficiente de envejecimiento **χ = 0,8** (carga constante) o **0,6** (carga creciente, como un desplazamiento impuesto) [ec. 3.14].

**Suelos granulares:**
- Modelo elastoplástico **de Hujeux** (École Centrale de París), multimecanismo, para carga monótona y cíclica [ec. 3.15–3.26].
- Rigidez dependiente de la presión media p'.
- Condiciones **drenadas** y **sin fluencia del suelo** (no válido para arcillas).
- Rellenos estudiados [tabla 3.2]:

| Relleno | e | φ | γ (kN/m³) |
|---|---|---|---|
| Grava compactada (caso base) | 0,32 | 37° | 19,4 |
| Grava suelta | 0,43 | 34° | 19,4 |
| Balasto | 0,79 | 42° | 18,0 |
| Grava muy compactada | 0,25 | 37° | 20,5 |

- Suelo de cimentación de las pilas [tabla 3.3]: φ = 36°, γ = 19 kN/m³, muy preconsolidado (σ_v,mec = −1000 kPa, como un depósito glaciar).

---

## 5. Problemas en el extremo del puente (cap. 4)

### 5.1 Empuje sobre el muro del estribo
- **Puntos de partida:** K₀ = 1 − sen φ (Jaky). Ka (Rankine) se alcanza con desplazamientos de ~0,001·h, y Kp con ~0,01·h.
- **Ensayos de laboratorio** (England, Cosgrove-Lehane, Goh): con ciclos térmicos, el relleno se **recompacta** y el empuje en la fase pasiva **crece ciclo a ciclo**, de forma logarítmica (efecto *ratcheting*). En la fase activa el suelo plastifica enseguida y el empuje se mantiene estable.
- **Asiento detrás del muro:** con un movimiento activo mínimo se forma una cuña de Rankine y un **vacío** junto al muro, de longitud aproximada **0,45–0,60 · h_muro**. La losa de transición debe salvar ese vacío.

### 5.2 Asiento del pavimento al final de la losa de transición (aportación central)
- **Modelo:** elementos finitos 2D (GefDyn) con relleno de Hujeux, interfaz rugosa δ = 2/3 φ, aglomerado de 70 mm y losa estándar (L = 6 m, α = 10 %, h = 0,3 m, recubrimiento inicial e₀ = 0,1 m) [§ 4.3.1].
- **Mecanismo:** al tirar el tablero de la losa (dirección activa), el relleno situado encima se mueve con ella y el de detrás no. Toda la deformación se concentra en el **extremo de la losa** y aparece un **escalón** localizado entre x/L ≈ 0,8 y 1,3.
- **Criterio de servicio** (normas SN 640 520a / 521c): el **cambio de pendiente χ** entre dos rectas de 1 m [ec. 4.4] debe ser **≤ 20 ‰ en autopistas** y **≤ 28 ‰ en carreteras nacionales**.
- **Resultado con la geometría estándar:**
  - **Dirección activa:** u_imp,adm = **42 mm**, es decir, L_pf ≈ 53 m con ε = −0,8 ‰.
  - **Dirección pasiva:** el pavimento se levanta, con u_imp,adm = −52 mm. Es mucho menos crítico: solo actúa la temperatura y el mecanismo pasivo necesita más desplazamiento.
- **Mohr-Coulomb frente a Hujeux:** el modelo de Mohr-Coulomb **sobreestima la dilatancia**, predice un levantamiento general poco realista y subestima χ. Por eso se descartó.
- **Aglomerado:** su fisuración depende sobre todo de las **temperaturas extremas de invierno**, cuando el betún se vuelve elástico [ec. 4.5]. Debe comprobarse también al renovar el pavimento.

### 5.3 Esfuerzos en la losa de transición
- **Hipótesis clave:** la losa **no apoya en toda su longitud**, porque hay un vacío detrás del muro.
- **Modelo:** placa fisurada sobre muelles no lineales (Winkler, con ley hiperbólica de Duncan-Mokwa) en Ansys.
- **Datos:** módulo de balasto k ≈ 270 MPa/m (exigencia OFROU de M_E > 80 MPa), o 180 MPa/m como valor de cálculo. Carga: vehículo del modelo de carga 1 de la SIA.

### 5.4 Giro en la unión estribo–losa
- **Límite OFROU:** **4 ‰ en autopistas y carreteras nacionales**, y 8 ‰ en carreteras secundarias.
- **Por u_imp:** el giro es pequeño, ≈ 1 ‰ para 50 mm.
- **Al paso del camión:** con un vacío de 2 m puede llegar a 4,3 ‰. Es un giro transitorio, pero relevante para la fisuración del aglomerado.

---

## 6. Soluciones propuestas para el estribo (cap. 5)

### 6.1 Muro del estribo
- **Norma británica BA 42/96:** K = K₀ + (C · u_ref / h)^0,4 · Kp ≤ Kp, con C = 40 en estribos semi-integrales y C = 20 en integrales (este último hasta media altura) [ec. 5.1–5.2]. En la fase activa se propone usar Ka.
- **Muelles o elementos finitos para el empuje: desaconsejados.** El resultado depende de una historia de carga del relleno (K₀ → Ka por retracción → recompactación térmica) imposible de conocer con fiabilidad.
- **Geosintéticos y espuma EPS** (Horvath, Pötzl): reducen el empuje y el asiento, pero son caros y su comportamiento a 120 años es dudoso. Solo para casos extremos.
- **Dimensionamiento:** comprobar dos casos a largo plazo, el **activo** (u_imp máximo) y el **pasivo** (empuje alto y cortante grande en cabeza). Conviene buscar **capacidad de deformación** (ductilidad) en cabeza y pie del muro, más que resistencia.

### 6.2 Geometría de la losa de transición (resultado más importante)
- **Longitud mínima:** debe salvar el vacío L_vacío ≈ h_mec · cot(45° + φ/2) [ec. 5.3], con h_mec = canto del tablero en estribos semi-integrales y altura del muro en integrales.
- **Parámetro único de diseño:** la **profundidad del extremo de la losa, e_extr = e₀ + α·L** [fig. 5.7-5.9]. Cuanto más enterrado queda el extremo, menor es χ. Para u_imp = 50 mm hace falta **e_extr ≥ ~0,9 m**.
- **Ejemplo:** para 60 mm en autopista, e_extr ≈ 1,0 m, por ejemplo con L = 6 m y α = 15 %. Se recomienda **5 % ≤ α ≤ 20 %**.
- **Lo que casi no influye en χ:**
  - Adelgazar el extremo de la losa.
  - Cambiar el tipo de relleno.
  - Compactar más: el asiento baja un 25 %, pero χ solo un 10 %.
  - La rugosidad de la interfaz (aunque una interfaz lisa debe evitarse).

  **La solución es geométrica, no un mejor relleno.**
- **Límites recomendados** [§ 5.2.3]:
  - La geometría estándar funciona hasta 40 mm en autopista y 55 mm en carretera nacional.
  - Con margen por efectos no modelados (ciclos térmicos, tráfico pesado), se recomienda **u_imp ≤ 30 mm en autopistas y ≤ 40 mm en carreteras nacionales**, frente a los 20 mm actuales.
  - Para ir más allá, alargar e inclinar la losa. Cuesta poco.

### 6.3 Nueva unión estribo–losa: rótula de hormigón [fig. 5.15]
- **Concepto:** unión **monolítica** con poca armadura que forma una **rótula plástica**. El giro se reparte en una longitud (centrada a L_diag = 0,62 m del estribo) en lugar de abrir una sola grieta bajo el pavimento.
- **Ensayos en la EPFL (2009):** 4 bandas de losa de 4,52 × 0,30 × 0,30 m (8 ensayos), hormigón C30/37, cuantía **ρ = 0,3 %** (Ø12) o **0,7 %** (Ø18), con o sin cercos, cargas monótonas y cíclicas.
- **Resultados:**
  - **ρ = 0,3 %:** giros de rotura **> 40 ‰** sin necesidad de cercos, muy por encima del límite de 8 ‰.
  - **ρ = 0,7 %:** puede romper por cortante (sin cercos) o por desprendimiento del recubrimiento.
  - En servicio, las fisuras quedan por debajo de 0,7 mm. Además, la rótula queda bajo la impermeabilización.
- **Recomendación:** **armar poco (ρ = 0,3 %) y sin cercos**, porque se busca capacidad de giro y no resistencia. El tablero debe resistir el momento plástico de la rótula (≈ −55 kNm/m de cálculo).
- **Modelos:** la integración M-κ (Matlab) reproduce los ensayos con errores de < 5 % en carga y < 10 % en deformación. También se usaron campos de tensiones (EPSF, programa JCONC) y la teoría de la fisura crítica (CSCT) para el cortante.

### 6.4 Dimensionamiento a flexión de la losa de transición [§ 5.4.3]
- **Método simplificado** (Q₁,d = 405 kN es el eje de cálculo y B_vía = 3 m):
  - **Unión articulada:** m⁺_d = 1,5 · Q₁,d · L_vacío / (2·B_vía) [ec. 5.13].
  - **Rótula de hormigón:** m⁺_d = 1,5 · [Q₁,d (L_vacío − L_diag) + m⁻_pl,d · B_vía] / (2·B_vía) [ec. 5.14].
- **Mínimos:** **m⁺_pl,d ≥ 100 kNm/m** en ambas direcciones y un axil **n_d = 100 kN/m** por el rozamiento con el relleno (el caso extremo es L = 8 m, α = 15 %).
- Si m > 400 kNm/m, lo que ocurre con vacíos > 4 m, hay que **aumentar el espesor** de 0,30 m para garantizar la ductilidad.
- Los resultados apenas dependen del módulo del suelo o de la rigidez de la losa: basta una estimación aproximada.

---

## 7. Sistema pila–cimentación superficial (cap. 6)

- **Cimentación** [§ 6.1]:
  - Elementos finitos (GefDyn + Hujeux), con N = −3360 kN y tensión media de 140 kPa (zapatas de 24 m²).
  - Se aplican 10 ciclos térmicos con ΔM/M = 1/6, que representan los años 20 a 30 de servicio.
  - Hay un umbral de **inestabilidad cíclica**, a partir del cual el giro crece en cada ciclo: [M; ΔM] = [1,2; 0,2] MNm para la zapata de 2 × 12 m y [3,0; 0,5] MNm para la de 4 × 6 m.
  - Estabilidad global con el criterio de Butterfield-Gottardi [ec. 6.1].
- **Pila** [§ 6.2]:
  - Integración numérica M-κ con efectos de segundo orden, validada con ensayos de columnas de larga duración de la EPFL de los años 80.
  - Fisuración con el Tension Chord Model, o limitando σ_s ≈ **300 MPa** (SIA 262, separación de 200 mm).
- **Ejemplo** [§ 6.3.2]: pila de 0,5 × 2 × 5 m con ρ = 4 %. El desplazamiento admisible es de **26 mm a largo plazo**, y de **34 mm tras la recarga térmica** (un tercio adicional), lo que equivale a L_pf ≈ 43 m. La armadura más traccionada está **en la cabeza** de la pila.
- **Influencia de los parámetros:**
  - El **espesor de la pila L_P** es el más eficaz para aumentar u_adm, pero debe seguir cumpliéndose la estabilidad.
  - Aumentar la armadura o el ancho apenas ayuda.
  - Una **zapata más corta** (L_F menor) gira más y deja admitir más desplazamiento. Puede llegar a funcionar como **rótula plástica en el suelo**, una idea prometedora que aún no está validada.
- **Método incremental en 4 etapas** [tabla 6.4]:
  - **I:** empotramiento rígido. Muy conservador.
  - **II:** giro de la zapata con Mohr-Coulomb.
  - **III:** añade la fluencia y la recarga del hormigón.
  - **IV:** Hujeux cíclico.

  Cada etapa precisa más el resultado, a cambio de más cálculo.

---

## 8. Conclusiones y trabajo futuro (cap. 7)

**Estribos:**
1. La falta de planeidad al final de la losa se reduce sobre todo **enterrando más su extremo** (más longitud y pendiente). Ni retocar el extremo ni mejorar el relleno sirven.
2. El **vacío detrás del muro** debe considerarse al dimensionar la losa. Se estima con Rankine y depende de la altura del muro (integral) o del canto del tablero (semi-integral).
3. La fisuración del aglomerado en la unión se resuelve con la **rótula de hormigón poco armada (ρ = 0,3 %)**.
4. El empuje sobre el muro es muy incierto. Conviene diseñar el muro con **ductilidad**.
5. Al transformar puentes existentes, solo cuenta la temperatura. Suprimir la junta suele ser viable; suprimir los apoyos cambia mucho los esfuerzos en el muro.

**Pilas:**
1. La **temperatura** pesa más que la retracción y la fluencia, porque actúa rápido (medio año frente a ~20 años).
2. Considerar el giro de la cimentación **aumenta mucho** el desplazamiento admisible, sobre todo si la zapata se dimensiona para formar una rótula plástica en el suelo.

**Trabajo futuro:**
- Ensayos triaxiales de rellenos reales.
- Medidas a escala real del asiento al final de la losa, del vacío y de los esfuerzos.
- Seguimiento de la rótula de hormigón en una obra real.
- Efectos aún no estudiados: ciclos térmicos, paso repetido de camiones, agua y pérdida de finos, efectos 3D, rigidez del tablero, desplazamiento horizontal de la zapata, suelos cohesivos y pilotes.

---

## 9. Glosario francés–español útil para leer la tesis

| Francés | Español |
|---|---|
| culée | estribo |
| mur de culée | muro del estribo |
| dalle de transition (DT) | losa de transición |
| tablier | tablero |
| pile | pila |
| fondation superficielle | cimentación superficial (zapata) |
| remblai | terraplén / relleno |
| grave compactée | grava compactada |
| joint de dilatation | junta de dilatación |
| appui | apoyo |
| point fixe | punto fijo |
| déplacement imposé | desplazamiento impuesto |
| retrait / fluage | retracción / fluencia |
| tassement | asiento |
| soulèvement | levantamiento |
| vide | vacío (hueco) |
| enfouissement | profundidad de enterramiento |
| surface de roulement | superficie de rodadura |
| enrobé bitumineux | aglomerado / mezcla bituminosa |
| planéité | planeidad |
| changement de pente | cambio de pendiente |
| poussée des terres (active / passive / au repos) | empuje de tierras (activo / pasivo / en reposo) |
| rotule (plastique) | rótula (plástica) |
| armature / étrier | armadura / cerco |
| taux d'armature | cuantía |
| effort tranchant | esfuerzo cortante |
| effort normal | esfuerzo axil |
| état limite de service / ultime | estado límite de servicio / último |
| fissuration / ouverture de fissure | fisuración / abertura de fisura |
| chariot (modèle de charge 1) | vehículo / tándem del modelo de carga 1 |
| routes nationales / réseau autoroutier | carreteras nacionales / red de autopistas |
