import { createHashTable , encript , desencript} from './modules/index.js';

//pasos
 
// -> crear hash de 7 simbolos aleatorio

// -> guardar en un objecto un hash diferente por cada letra o simbolo
createHashTable();

// -> encriptar la contraseña 

const password = "Davidson2727*";

const hasRamdon = encript(password);

console.log(hasRamdon);


// -> desencriptar la contraseña

const clave = desencript(hasRamdon);

console.log(clave);