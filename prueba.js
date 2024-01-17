// printSecretNSnakeInstructions.js

// Explicación:
// La criptografía es el antiguo arte de almacenar mensajes secretos.
// Los reyes y las reinas lo utilizaban para enviar mensajes secretos en caso de que el mensajero fuera emboscado
// de camino a entregarlo. El mensaje seguiría siendo secreto.
// También es una de las aplicaciones más importantes de los ordenadores
// Si aún no la has visto, tus deberes para esta noche será ver The Imitation Game. Trata de
// Alan Turing, el padre de la informática, y cómo salvó al mundo con la criptografía.

// Toda la criptografía funciona introduciendo un mensaje secreto o una contraseña en una función que esencialmente lo codifica en
// un camino secreto.Luego tiene que haber una forma de descifrar las letras codificadas para volver al mensaje original.
// Se parece mucho al funcionamiento de los anillos decodificadores o a la técnica del cifrado de Ceaser.

// "Salt" (sal) es una palabra o número secreto que se añade a la función para dificultar aún más que los hackers
// // ideen una forma de descifrar el mensaje.Incluso si descubren cómo funciona la función, si hay
// un montón de letras extra del salt mezcladas con el mensaje secreto será más difícil de averiguar
// lo que era el mensaje.

// Mensaje secreto:
// Este revoltijo de caracteres contiene un mensaje secreto. ¿No es increíble? Si se depura el programa informático siguiente
// ¡El mensaje secreto será revelado!
'7e56194d5619514d4d494a0316165f564b544c55585c175b4b5c4e174a51165f564b544c555816574a5758525c1958575d1940564c194a51585555195f50575d194e51584d1940564c194a5c5c5217'

function printSecretMessage() {
  let salt = 2;
  let index = 2;
  while (index < 10) {
    salt = salt * index;

    index = index + 2;
    index = index - 1;
  }
  const myDecipher = decipher(`${salt}`);
  console.log(myDecipher('7e56194d5619514d4d494a0316165f564b544c55585c175b4b5c4e174a51165f564b544c555816574a5758525c1958575d1940564c194a51585555195f50575d194e51584d1940564c194a5c5c5217'))
}

printSecretMessage();

// Funciones elementales de cifrado (¡no deben utilizarse en producción!)
function cipher (salt) {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

    return text => text.split('')
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join('');
}

function decipher (salt) {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
        .map(hex => parseInt(hex, 16))
        .map(applySaltToChar)
        .map(charCode => String.fromCharCode(charCode))
        .join('');
}

// Si estás interesado en la encriptación y en cómo funcionaba esto, puedes leer más sobre el tema aquí:
// https://stackoverflow.com/questions/18279141/javascript-string-encryption-and-decryption

// Para crear un cifrado
// const myCipher = cipher('mySecretSalt')

// Luego cifrar cualquier texto:
// myCipher('the secret string')   // --> "7c606d287b6d6b7a6d7c287b7c7a61666f"

// Para descifrar, es necesario crear un descifrador y utilizarlo:
// const myDecipher = decipher('mySecretSalt')
// myDecipher("7c606d287b6d6b7a6d7c287b7c7a61666f")    // --> ёel string secreto'

