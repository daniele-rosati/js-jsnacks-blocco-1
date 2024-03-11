// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

const number = [];

for(let i=0; i<6; i++){
    const userNumber = prompt("inserisci un numero");
    
    if(number % 2 === 0){
        alert("è un numero pari"); 
    } else{
       number.push(userNumber);
    }
    console.log(userNumber);
}
