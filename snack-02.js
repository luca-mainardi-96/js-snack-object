const parole = ['matita', 'temperino', 'MODEM']
console.log(parole)

//creare un array con le parole tutte con la prima lettera maiuscola
// parole[2] = parole[2].toLowerCase()
// const parole2 = []

//  for (i=0; i<parole.length; i++){
//     const lettere = parole[i].split('')
//     lettere[0] = lettere[0].toUpperCase()
//     const parola2 = lettere.join('')
//     console.log(parola2)
//     parole2.push(parola2)

//  }


//  console.log(parole2)

const paroleFormattate = []

for (let i=0; i<parole.length; i++){
   const parola = parole[i]
   const firstChar = parola.charAt(0).toLocaleUpperCase()
   // firstChar = firstChar.toLocaleUpperCase()
   const restoParola = parola.slice(1).toLowerCase()
   // restoParola = restoParola.toLowerCase()
   paroleFormattate.push(firstChar+restoParola)
   console.log(paroleFormattate)
}