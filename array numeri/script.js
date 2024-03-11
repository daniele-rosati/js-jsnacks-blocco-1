// Chiedere all'utente 5 numeri. 
//Inserire i numeri nell'array
// ma senza creare duplicati 
//(inserire il numero nell'array solo se non è già presente).

// creo una arrey vuoto
 const numbers = [];

 // chiedo all'untente di inserire 5 numeri

 for (let i=0; i<5; i++){
   const newN = prompt("Dimmi un numero");


    if(!numbers.includes (newN)){
        numbers.push(newN);
    } else {
        alert ("ATTENZIONE, questo numero è già stato inserito")
    }
 }

 // stampo l'arrey

 console.log("I numeri inseriti sono: ", numbers)


