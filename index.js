const { registrar, leer } = require('./operaciones');
const args = process.argv.slice(2);
const operacion = args[0];

if (operacion === "registrar") {
  if (args.length < 6) {
    console.log("Faltan datos para registrar la cita");
    process.exit(1);
  }

  const [nombre, edad, tipo, color, enfermedad] = args.slice(1);
  registrar(nombre, edad, tipo, color, enfermedad);
  console.log(`Cita de ${nombre} registrada con éxito.`);
} 

if (operacion === "leer") {
  leer();
} 