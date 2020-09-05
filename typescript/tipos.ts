
  let mensaje: string = "Hola";
  let numero: number = 123;
  let booleano: boolean = false;
  let hoy: Date = new Date();

  let cualquierTipoDato: string | number | Date | boolean;
  cualquierTipoDato = mensaje;
  cualquierTipoDato = numero;
  cualquierTipoDato = hoy;
  cualquierTipoDato = booleano;

  let spiderMan = {
    nombre: "Jhosep",
    edad: 30,
  };

  spiderMan = {
    nombre: "Juan ",
    edad: 50,
  };

  console.log("SpiderMan: ", spiderMan);
  console.log("cualquier Tipo de Dato: ", cualquierTipoDato);
