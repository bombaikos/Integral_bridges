"""Ajuste de curvas a u_adm,diseño = 0.75 * envolvente del abaco (fig. 5.9 Dreier)."""
import numpy as np, json
import matplotlib; matplotlib.use("Agg")
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit
F=0.75
SETS={"autopista (chi=20)":[[0.30,32.5],[0.35,34.4],[0.50,34.6],[0.60,37.6],[0.70,41.2],[0.85,47.6],[1.00,58.6],[1.15,78.4]],
      "carretera nacional (chi=28)":[[0.30,47.0],[0.50,49.5],[0.60,53.1],[0.70,56.8],[0.85,65.1],[1.00,79.4]]}
pot=lambda x,a,b:a*x**b
potc=lambda x,c,a,b:c+a*x**b
out={}; fig,axs=plt.subplots(1,2,figsize=(12,4.8))
for ax,(nm,pts) in zip(axs,SETS.items()):
    x,y=np.array(pts).T; y=y*F; xs=np.linspace(x.min(),x.max(),200)
    ax.plot(x,y,"ko",label="margen 0.75 (puntos)")
    res={}
    for nmf,f in [("poly2",lambda d:np.polyfit(x,y,d)),("poly3",None)]:
        d=2 if nmf=="poly2" else 3; c=np.polyfit(x,y,d); yh=np.polyval(c,x)
        res[nmf]=(c.tolist(),yh,np.polyval(c,xs))
    p,_=curve_fit(pot,x,y,p0=[40,1]); res["potencial"]=(p.tolist(),pot(x,*p),pot(xs,*p))
    q,_=curve_fit(potc,x,y,p0=[20,30,2],maxfev=20000); res["potencial_c"]=(q.tolist(),potc(x,*q),potc(xs,*q))
    out[nm]={}
    for k,(c,yh,ys) in res.items():
        r2=1-((y-yh)**2).sum()/((y-y.mean())**2).sum()
        out[nm][k]=dict(coef=[round(v,3) for v in c],R2=round(r2,4),errmax_mm=round(float(abs(y-yh).max()),2),errmax_pct=round(float((abs(y-yh)/y).max()*100),1))
        ax.plot(xs,ys,label=f"{k}  R²={r2:.3f}")
    ax.set_title(nm); ax.set_xlabel("e_extr [m]"); ax.set_ylabel("u_adm,diseño [mm]"); ax.grid(alpha=.3); ax.legend()
plt.tight_layout(); plt.savefig("herramientas/ajuste_margen/ajuste_margen_075.png",dpi=130)
json.dump(out,open("herramientas/ajuste_margen/resultados.json","w"),indent=1)
print(json.dumps(out,indent=1))
