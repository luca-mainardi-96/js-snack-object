const parole = ['matita', 'temperino', 'MODEM']
console.log(parole)

//creare un array con le parole tutte con la prima lettera maiuscola

const parola1 = parole[0]
const parola2 = parole[1]
const parola3 = parole[2]
console.log(parola1)
console.log(parola2)
console.log(parola3)

const parole2 = []

const lettere1 = parola1.split('')
lettere1[0] = lettere1[0].toUpperCase()
console.log(lettere1)
const parola1_2 = lettere1.join('')
console.log(parola1_2)



// for (i=0; i<parola1.length; i++){
//     const char = parola1.charAt(i)
//     console.log(char)
// }