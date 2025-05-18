const auto = [
    {
        marca: 'Toyota',
        modello: 'Corolla',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Ford',
        modello: 'Focus',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Opel',
        modello: 'Astra',
        alimentazione: 'GPL'
    },
    {
        marca: 'Tesla',
        modello: 'Model 3',
        alimentazione: 'Elettrico'
    },
    {
        marca: 'Volkswagen',
        modello: 'Golf',
        alimentazione: 'Metano'
    },
    {
        marca: 'BMW',
        modello: 'Serie 3',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Peugeot',
        modello: '208',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Honda',
        modello: 'Civic',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Nissan',
        modello: 'Leaf',
        alimentazione: 'Elettrico'
    },
    {
        marca: 'Renault',
        modello: 'Clio',
        alimentazione: 'Benzina'
    }

]

// console.log(auto)

const autoBenzina = []
const autoDiesel = []
const restoAuto = []

for (let i=0; i<auto.length; i++){
    const elemento = auto[i]
    // console.log(i, auto[i].alimentazione)
    if (auto[i].alimentazione === 'Benzina'){
        autoBenzina.push(elemento)
    } else if (auto[i].alimentazione === 'Diesel'){
        autoDiesel.push(elemento)
    } else {
        restoAuto.push(elemento)
    }
}



console.log(autoBenzina)
console.log(autoDiesel)
console.log(restoAuto)