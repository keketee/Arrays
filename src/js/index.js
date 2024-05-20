// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//- Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.

const getRamdomNumber = numbers => {
  const randomPosition = Math.floor(Math.random() * numbers.length);
  console.log(numbers[randomPosition]);
};
getRamdomNumber([32, 41, 59, 120, 12]);

//- Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

//- "La suma de todos los números es:[suma]"
//- "La media de todos los números es:[media]"
//- "El mayor es [mayor] y el menor es [menor]"

const ramdomNumbers = threnumber => {
  let max;
  let min;

  const suma = threnumber[0] + threnumber[1] + threnumber[2];
  console.log(` el total de la suma es ${suma}`);

  const media = suma / threnumber.length;
  console.log(`la media total es ${media}`);

  if (threnumber[0] >= threnumber[1] && threnumber[0] >= threnumber[2]) {
    max = threnumber[0];
  } else if (threnumber[1] >= threnumber[0] && threnumber[1] >= threnumber[2]) {
    max = threnumber[1];
  } else {
    max = threnumber[2];
  }

  if (threnumber[0] < threnumber[1] && threnumber[0] < threnumber[2]) {
    min = threnumber[0];
  } else if (threnumber[1] < threnumber[0] && threnumber[1] < threnumber[2]) {
    min = threnumber[1];
  } else {
    min = threnumber[2];
  }
  console.log(`el mayo numero es ${max} y el menor numero es ${min}`);
};

ramdomNumbers([40, 30, 12]);

//- Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.

const getArrayTenNumbers = fivenumber => {
  const randomNumber = Math.floor(Math.random() * 11);

  const position = fivenumber.indexOf(randomNumber);

  if (fivenumber.includes(randomNumber))
    console.log(`El número ${randomNumber} está en el array en la posición ${position}.`);
  else {
    console.log(`El numero ${randomNumber} no esta en el array`);
  }
};

getArrayTenNumbers([2, 5, 7, 8, 3]);

//- Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

const getArrayVacio = nothing => {
  nothing.push(Math.floor(Math.random() * 101));
  nothing.push(Math.floor(Math.random() * 101));
  nothing.push(Math.floor(Math.random() * 101));

  console.log(`los numeros son ${nothing}`);
};

getArrayVacio([]);

//- Crea una función que reciba un array de 5 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

const evenAndOdd = fiveNumber => {
  const even = [];
  const odd = [];

  const randomNumber = Math.floor(Math.random() * 11);

  if ((fiveNumber[0] * randomNumber) % 2 === 0) {
    even.push(fiveNumber[0] * randomNumber);
  } else {
    odd.push(fiveNumber[0] * randomNumber);
  }

  if ((fiveNumber[1] * randomNumber) % 2 === 0) {
    even.push(fiveNumber[1] * randomNumber);
  } else {
    odd.push(fiveNumber[1] * randomNumber);
  }

  if ((fiveNumber[2] * randomNumber) % 2 === 0) {
    even.push(fiveNumber[2] * randomNumber);
  } else {
    odd.push(fiveNumber[2] * randomNumber);
  }

  if ((fiveNumber[3] * randomNumber) % 2 === 0) {
    even.push(fiveNumber[3] * randomNumber);
  } else {
    odd.push(fiveNumber[3] * randomNumber);
  }

  if ((fiveNumber[4] * randomNumber) % 2 === 0) {
    even.push(fiveNumber[4] * randomNumber);
  } else {
    odd.push(fiveNumber[4] * randomNumber);
  }

  console.log(`los numeros ${even} son pares`);
  console.log(`los numeros ${odd} son impares`);
  console.log(`los numero originales son ${fiveNumber}`);
};

evenAndOdd([2, 4, 3, 7, 9]);

//Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.

const dniLetter = numeroDNI => {
  const letrasDNI = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E'
  ];

  const posicionLetra = numeroDNI % 23;

  const letra = letrasDNI[posicionLetra];

  console.log(`El DNI completo es: ${numeroDNI}${letra}`);
};

dniLetter([53542553]);

//Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']

const threeWords = words => {};

const words = 25;

console.log(words);
threeWords(['coche', 'perro', 'mesa']);
