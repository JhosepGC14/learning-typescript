(() => {
  const avenguer = {
    nombre: "steve",
    nombre_clave: "Capitan America",
    poder: "Super fuerza",
  };

  //destructurar obj en una funcion - forma tradicional
  const extraer = (avenguer: any) => {
    const { nombre, nombre_clave, poder } = avenguer;
    console.log("Nombre: ", nombre);
    console.log("Nombre Clave: ", nombre_clave);
    console.log("Poder: ", poder);
  };

  //destructurar obj en una funcion - forma nueva ECM6
  const extraer2 = ({ nombre, nombre_clave, poder }: any) => {
    console.log("Nombre: ", nombre);
    console.log("Nombre Clave: ", nombre_clave);
    console.log("Poder: ", poder);
  };

  //destructuracion de arreglos
  const vengadores: string[] = ["Thor", "IronMan", "SpiderMan"];

  const [Thor, IronMan, SpiderMan] = vengadores;

  //destructurando en una funcion - forma tradicional
  const extraerArray = (vengadores: string[]) => {
    console.log(vengadores[0]);
    console.log(vengadores[1]);
    console.log(vengadores[2]);
  };

  //destructurando en una funcion - forma tradicional
  const extraerArray2 = ([thor, ironman, spiderman]: string[]) => {
    console.log(thor);
    console.log(ironman);
    console.log(spiderman);
  };

  extraer(avenguer);
  extraer2(avenguer);
  // console.log(Thor);
  // console.log(IronMan);
  // console.log(SpiderMan);
  // extraerArray(vengadores);
  extraerArray2(vengadores);
})();
