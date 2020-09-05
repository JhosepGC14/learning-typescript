(()=>{
  //funcion normal
  let miFuncion = function (a: string) {
    return a.toUpperCase();
  };

  //funcion flecha
  const miFuncionFlecha = (a: string) => a.toUpperCase();

  //funcion para sumar 2 numeros
  const Sumar = (a: number, b: number) => {
    return a + b;
  };

  //objeto hulk
  const hulk = {
    nombre: "hulk",
    smash() {
      setTimeout(() => {
        console.log(`${this.nombre} Smash!!`);
      }, 1000);
    },
  };

  console.log(miFuncion("funcion"));
  console.log(miFuncionFlecha("funcion flecha"));
  console.log(Sumar(22, 15));
  hulk.smash();
})();
