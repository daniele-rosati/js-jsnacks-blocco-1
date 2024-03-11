// Calcola la somma e la media dei primi 10 numeri.

// creo una arrey da 10 numeri
const numbers = [1,2,3,4,5,6,7,8,9,10];

// calcolo la somma
const sum = 0;
for(let i=0; i<numbers.length; i++){
    sum += numbers[i];
}

// calcolo media
const avarege = sum / numbers.length;

console.log("La somma dei primi 10 numeri è: ", sum);
console.log("La media dei primi 10 numeri è: ", avarege);