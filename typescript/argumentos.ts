(function () {
  //buenas practicas  es primero poner los argumentos obligatorios, luego los opcionales y por ultimo los argumentos por defecto
  function activar(
    quien: string,
    momento?: string,
    objeto: string = "Batiseñal" 
  ) {
    if (momento) {
      console.log(`${quien} activó la ${objeto} en la ${momento}`);
    } else {
      console.log(`${quien} activó la ${objeto}`);
    }
  }

  activar("Gordon", "carro", "tarde");
})();
