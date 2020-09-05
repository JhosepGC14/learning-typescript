"use strict";
(() => {
    console.log("Inicio");
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("Se termino el timeout resolve");
            reject("Se termino el timeout resolve");
        }, 2000);
    });
    promesa
        .then((mensaje) => console.log(mensaje))
        .catch((err) => console.warn(err));
    console.log("Fin");
})();
