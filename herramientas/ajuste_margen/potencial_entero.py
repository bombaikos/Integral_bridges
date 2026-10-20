"""y = c + a*x^b con c, a enteros y b con 1 decimal: redondeo directo y mejor combinacion (busqueda en rejilla)."""
import numpy as np, itertools
S={"autopista":([[0.30,32.5],[0.35,34.4],[0.50,34.6],[0.60,37.6],[0.70,41.2],[0.85,47.6],[1.00,58.6],[1.15,78.4]],(24.92,19.837,3.758)),
   "nacional":([[0.30,47.0],[0.50,49.5],[0.60,53.1],[0.70,56.8],[0.85,65.1],[1.00,79.4]],(34.854,24.559,3.295))}
for n,(p,(c0,a0,b0)) in S.items():
    x,y=np.array(p).T; y=y*.75
    def ev(c,a,b):
        yh=c+a*x**b; return 1-((y-yh)**2).sum()/((y-y.mean())**2).sum(), abs(y-yh).max(), (abs(y-yh)/y).max()*100
    r=ev(round(c0),round(a0),round(b0,1)); print(n,"redondeo directo",round(c0),round(a0),round(b0,1),"R2=%.4f emax=%.2f mm (%.1f%%)"%r)
    best=min(((ev(c,a,b)[1],c,a,b) for c in range(int(c0)-6,int(c0)+7) for a in range(int(a0)-10,int(a0)+11) for b in np.arange(round(b0,1)-1,round(b0,1)+1.01,.1)))
    _,c,a,b=best; r=ev(c,a,b); print(n,"mejor (min error max)",c,a,round(b,1),"R2=%.4f emax=%.2f mm (%.1f%%)"%r)
