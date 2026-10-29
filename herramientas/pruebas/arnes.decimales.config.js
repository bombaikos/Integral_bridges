// Igual que arnes.config.js pero sin generador de casos: test_decimales.js asigna .value y no sabe marcar radios,
// así que varía solo los campos numéricos (±40 % de su valor por defecto).
const c = require('./arnes.config.js'); module.exports = { ...c };
