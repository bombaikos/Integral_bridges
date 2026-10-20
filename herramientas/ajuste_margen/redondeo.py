"""Efecto de redondear los coeficientes a 2 y 1 decimales (puntos = fig. 5.9 x 0.75)."""
import numpy as np, json
S={"autopista":[[0.30,32.5],[0.35,34.4],[0.50,34.6],[0.60,37.6],[0.70,41.2],[0.85,47.6],[1.00,58.6],[1.15,78.4]],
   "nacional":[[0.30,47.0],[0.50,49.5],[0.60,53.1],[0.70,56.8],[0.85,65.1],[1.00,79.4]]}
R=json.load(open("herramientas/ajuste_margen/resultados.json"))
K={"autopista":"autopista (chi=20)","nacional":"carretera nacional (chi=28)"}
f={"poly2":lambda c,x:np.polyval(c,x),"poly3":lambda c,x:np.polyval(c,x),
   "potencial":lambda c,x:c[0]*x**c[1],"potencial_c":lambda c,x:c[0]+c[1]*x**c[2]}
for n,p in S.items():
    x,y=np.array(p).T; y=y*.75
    for m,fn in f.items():
        c=np.array(R[K[n]][m]["coef"])  # ya a 3 decimales
        for d in (3,2,1):
            cr=np.round(c,d); yh=fn(cr,x)
            r2=1-((y-yh)**2).sum()/((y-y.mean())**2).sum()
            print(f"{n:9s} {m:12s} {d}dec  {cr.tolist()}  R2={r2:.4f}  emax={abs(y-yh).max():.2f} mm ({(abs(y-yh)/y).max()*100:.1f}%)")
