const fs = require("fs");

function registrar(nombre, edad, tipo, color, enfermedad) {
  const data = JSON.parse(fs.readFileSync("citas.json", "utf-8"));

  const nuevaCita = {
    nombre: nombre,
    edad: edad,
    tipo: tipo,
    color: color,
    enfermedad: enfermedad,
  };
  data.citas.push(nuevaCita);

  fs.writeFileSync("citas.json", JSON.stringify(data, null, 2), "utf8");
}

function leer() {
  const data = JSON.parse(fs.readFileSync("citas.json", "utf8"));

  if (data.citas.length === 0) {
    console.log("No hay citas registradas.");
  } else {
    console.log("Citas registradas:");
    data.citas.forEach((cita, index) => {
      console.log(
        `${index + 1}. Nombre: ${cita.nombre}, Edad: ${cita.edad}, Tipo: ${
          cita.tipo
        }, Color: ${cita.color}, Enfermedad: ${cita.enfermedad}`
      );
    });
  }
}

module.exports = { registrar, leer };
