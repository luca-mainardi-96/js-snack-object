const animali = [
    {
        nome: 'Cane',
        famiglia: 'Canide',
        classe: 'Mammiferi'
    },
    {
        nome: 'Gatto',
        famiglia: 'Felidi',
        classe: 'Mammiferi'
    },
    {
        nome: 'Gallina',
        famiglia: 'Fasianidi',
        classe: 'Uccelli'
    }
]
console.log(animali)

const mammiferi = []

for(let i=0; i<animali.length; i++){
    const elemento = animali[i]
    console.log(i, elemento)
    if (elemento.classe === 'Mammiferi'){
        mammiferi.push(elemento)
    }
}

console.log(mammiferi)