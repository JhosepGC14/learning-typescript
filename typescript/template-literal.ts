(function () {
  const nombre: string = "Jhosep";
  const apellido: string = "Guadalupe";
  const edad: number = 22;
  const salida = `${nombre} ${apellido} y tiene ${edad}`;
  const salida2 = `${getAge()}`;

  function getAge() {
    return 1 + 1 + 1 + 1;
  }
  console.log("Datos: ", salida);
  console.log("Datos 2: ", salida2);
})();
