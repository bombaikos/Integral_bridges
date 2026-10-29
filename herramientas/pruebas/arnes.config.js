// Configuración del arnés (guia-de-diseno/herramientas) para la calculadora de la losa de transición (Dreier).
// Sirve para la original instrumentada (window.__R, window.__RE; ver original/) y para la v2 (window.__probe, window.__recalc).
// Las funciones se escriben normales y se pasan a la página como cuerpo de función (el arnés las ejecuta con new Function).
const enPagina = f => 'return (' + f.toString() + ')();';
const NUM = (r, a, b, d = 2) => +(a + (b - a) * r()).toFixed(d);

// v2 recalcula con un pequeño retardo (guía 1.7): window.__recalc fuerza el cálculo inmediato; la original recalcula al instante con el evento.
const recalcular = () => { if (window.__recalc) window.__recalc(); else { window.__RE = null; document.getElementById('f').dispatchEvent(new Event('input', { bubbles: true })); } };   // la original deja __RE del caso anterior si el empuje no se calcula

// Resultado completo del motor. Los mensajes se comparan sin cifras y con la notación de la original.
const calcular = () => {
  const r = window.__probe ? window.__probe() : { R: window.__R, E: window.__RE };
  const R = JSON.parse(JSON.stringify(r));
  if (R.R && R.R.msgs) R.R.msgs = R.R.msgs.map(m => [m[0], String(m[1]).split('kN·m').join('kNm').replace(/[−-]?\d+(?:\.\d+)?/g, '#').replace(/\s+/g, ' ')]);
  return R;
};

// Veredictos: etiquetas «cumple / no cumple», tarjetas de desplazamiento y avisos, siempre en el mismo orden (el de la original).
const veredictos = () => {
  const n = t => t.replace(/[−-]?\d+(?:[.,]\d+)?/g, '#').split('kN·m').join('kNm').replace(/\s+/g, ' ').trim();
  const lista = (sel, f) => [...document.querySelectorAll(sel)].map(f);
  return [...lista('#kpis .kpi', e => e.className.replace(/\s+/g, ' ').trim()),
          ...['#tU', '#tV', '#tA', '#tC'].flatMap(s => lista(s + ' .tag', e => e.className + '|' + n(e.textContent))),
          ...lista('#msgs li', e => e.className + '|' + n(e.textContent))];
};

// Memoria: tablas y notas de resultados, sin las filas de origen (solo v2) y con la notación de la original.
const memoria = () => {
  const n = t => t.replace(/(\d)[\u2009\u202f\u00a0](?=\d{3}(?!\d))/g, '$1').split('kN·m/m').join('kNm/m').split('[-]').join('[–]').split(' ').join(' ').split(' ').join(' ').split('−').join('-');   // agrupación de miles de la v2
  return ['kpis', 'tU', 'tV', 'tF', 'tA', 'tC', 'kEmp', 'tEmp', 'tZq', 'empNote', 'msgs', 'planNote', 'hingeNote'].map(i => {
    const e = document.getElementById(i); if (!e) return '';
    const c = e.cloneNode(true); c.querySelectorAll('.traza-d,.err').forEach(x => x.remove()); c.querySelectorAll('tr').forEach(x => x.removeAttribute('class'));
    return n(c.innerHTML).split('Ø [mm]').join('Diámetro').split('s [mm]').join('s [m]').split('K en cabeza [–]').join('K en cabeza').split('no cumple · ').join('').split('cumple · ').join('');   // la v2 añade el estado en texto a la tarjeta
  }).join(' | ');
};

const cfg = {
  pestanas: '[role=tablist] [role=tab]',
  apartados: 'main > section.card, #paneles .apartado',
  veredicto: '#kpis',
  recalcular: enPagina(recalcular), calcular: enPagina(calcular), veredictos: enPagina(veredictos), memoria: enPagina(memoria),
  memoriaCambia: false,
  formato: ['F'],
  // (caso se añade abajo como propiedad no enumerable: auditoria.js pasa la configuración a la página y no admite funciones)
  __caso: r => {
    const o = {
      road_auto: r() < .5, road_nat: false, umode_calc: r() < .8, umode_dir: false, abut_int: r() < .5, abut_semi: false,
      dpf: NUM(r, 5, 60, 1), k: NUM(r, .5, 1.5), esh: NUM(r, 0, .6), ecr: NUM(r, 0, .6), eT: NUM(r, 0, .5), uimp: NUM(r, 0, 90, 1),
      L: NUM(r, 3, 10, 2), alpha: NUM(r, 3, 22, 1), e0: r() < .7 ? .1 : NUM(r, .05, .3), h: r() < .7 ? .3 : NUM(r, .2, .5),
      hmec: NUM(r, 0, 9, 1), phik: NUM(r, 22, 45, 1), gs: NUM(r, 17, 21, 1), qadm: NUM(r, 100, 500, 0),
      Q1k: NUM(r, 150, 400, 0), aQ: NUM(r, .7, 1), gQ: NUM(r, 1.2, 1.6), fck: NUM(r, 20, 50, 0), gc: NUM(r, 1.3, 1.6), fsk: NUM(r, 400, 600, 0), gsS: NUM(r, 1.05, 1.25),
      gphi: NUM(r, 1, 1.4), kpo: r() < .8 ? '' : NUM(r, 3, 10), uq: r() < .6 ? 0 : NUM(r, 0, 10, 1), marg: NUM(r, .4, 1),
      nMode: r() < .5 ? 'max' : 'thesis', dr: ['0', '0.5', '0.6667', '1'][Math.floor(r() * 4)],
    };
    // Solo se marca el radio elegido (marcarlo desmarca el otro del grupo; desmarcar uno suelto deja el grupo vacío).
    for (const [a, b] of [['road_auto', 'road_nat'], ['umode_calc', 'umode_dir'], ['abut_int', 'abut_semi']]) { if (o[a]) delete o[b]; else { delete o[a]; o[b] = true; } }
    return o;
  },
};
Object.defineProperty(cfg, 'caso', { value: cfg.__caso, enumerable: false }); delete cfg.__caso;
module.exports = cfg;
