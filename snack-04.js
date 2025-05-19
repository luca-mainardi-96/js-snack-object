const persone = [
    {
        nome: 'Marco',
        cognome: 'Rossi',
        eta: '15',
    },
    {
        nome: 'Elena',
        cognome: 'Bianchi',
        eta: '43',
    },
    {
        nome: 'Luca',
        cognome: 'Ferrari',
        eta: '27',
    },
    {
        nome: 'Giulia',
        cognome: 'Ricci',
        eta: '19',
    },
    {
        nome: 'Paolo',
        cognome: 'Conti',
        eta: '12',
    },
]
console.log(persone)

const messaggi = []

for ( let i=0; i<persone.length; i++){
    const persona = persone[i]
    console.log(i, persona)
    if (persona.eta>=18){
        messaggi.push(`${persona.nome} ${persona.cognome} può guidare.`)
    } else {
        messaggi.push(`${persona.nome} ${persona.cognome} non può guidare.`)
    }
}

console.log(messaggi)