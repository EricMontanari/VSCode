/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.*/
 /*
 let int1=2 ,
     int2=10;
 if(int1>int2){
  console.log(int1)
 }else{
  console.log(int2)
 }
*/






/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/*

    let x=7;
    if (x!==5){
      console.log('not equal');
    }else{
      console.log('equal');
    }
*/


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


/*
      let x=5;
      let division= (x%5);
      if(division===0){
        console.log('Divisible by 5');
      }else{
        console.log('not divisible by 5');
      }
*/


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
      let int1=4;
          int2=8;
      if(int1===8){
        console.log('first number selected = 8');
      }else if (int2===8){
        console.log('second number = 8')
      }else if((int1+int2)===8 || (int1-int2)===8 || (int2-int1)===8){
        console.log('the sum/subtraction of the selected numbers equals 8.')
      }else{
        console.log('the number 8 does not appear.');
      }
*/



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

 /*
let totalShoppingCart=51;
    if(totalShoppingCart>50){
      console.log('Free shipping. Order= '+ totalShoppingCart);
    }else{
      console.log('Order='+totalShoppingCart);
    }
   */ 




/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/


/*
    let totalShoppingCart=150,
        sconto=1-(20/100);
    totalShoppingCart*=sconto;
    totalShoppingCart=totalShoppingCart.toFixed(2);
    if(totalShoppingCart>50){
      console.log('Free shipping. Order= '+ totalShoppingCart);
    }else{
      console.log('Order='+totalShoppingCart);
    }
*/


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/


/*
    let n1=1,
        n2=2,
        n3=3;
    if(n1>n2 && n3<n2){
      console.log(n1,n2,n3);
    }else if((n1>n2) && (n2<n3)){
      console.log(n1,n3,n2);
    }else if((n3>n1) && (n1<n2)){
      console.log(n3,n2,n1);
    }else{
      console.log(n2,n3,n1);
    }
*/




/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


/*
    let n=5;
    if(Number.isInteger(n)===true){
      console.log('Il numero dato è intero');
    }else{
      console.log('il numero dato non è intero');
    }
*/


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* let n=5,
        r=n%2;
    if(r===0){
      console.log(n+'è pari.');
    }else{
      console.log(n+'è dispari');
    }
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/*
  let num=16;
  if(num<5){
    console.log('Tiny');
  }else if(num>5 && num<10){
    console.log('Small');
  }else if(num>10 && num<15){
    console.log('Medium');
  }else if(num>15 && num<20){
    console.log('Large');
  }else{
    console.log('Huge');
  }
*/



/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/


/*
   let gender ,
        isMale = false;
    gender= isMale ? 'male' : 'female';
    console.log(gender); 
*/

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/*

let i = 0;                          
while( i <= 5){
  console.log(i);
  i++;
}

*/

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/*
for(let i = 0; i <= 10; i++){
  console.log(i);
}
*/


/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/*
for(let i = 0; i <= 10; i++){
  if(i === 3 || i === 8){
    continue;
  }
  console.log(i);
}
*/



/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15.
  Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari,
  e mostrare il risultato in console.
*/

/*
for(let i = 0; i <= 15; i++){
  if(i%2 === 0){
    console.log(i + ' è pari');
  }else{
      console.log(i + ' è dispari');
  }
  
}
*/


/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/


/*
for(let i = 0; i <= 100; i++){
  if(i%3 === 0 && i%5 === 0){
    console.log('BuzzFizz');
  }else if(i%3 === 0){
    console.log('Fizz');
  }else if(i%5 === 0){
    console.log('Buzz');
  }else{
    console.log(i);
  }
 
}

*/


/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/*
let day = 4 ;
switch(day){
  case 1:
    console.log('Lunedì');
    break;
  case 2:
    console.log('Martedì');
    break;
  case 3:
    console.log('Mercoledì');
    break;
  case 4:
    console.log('Giovedì');
    break;
  case 5:
    console.log('Venerdì');
    break;
  case 6:
    console.log('Sabato');
    break;
  case 7:
    console.log('Domenica');
    break;
}
*/