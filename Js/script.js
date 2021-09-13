// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

// Input - dati
const icons = [
    {
        name: '',
        family: 'fas',
        prefix: 'fa-',
        category: 'food'
    },
    {
        name: '',
        family: 'fas',
        prefix: 'fa-',
        category: 'food'
    },
    {
        name: '',
        family: 'fas',
        prefix: 'fa-',
        category: 'food'
    },
    {
        name: '',
        family: 'fas',
        prefix: 'fa-',
        category: 'food'
    },
    {
        name: '',
        family: 'fas',
        prefix: 'fa-',
        category: 'food'
    },
    {
        name: '',
        family: 'fas',
        prefix: 'fa-',
        category: 'food'
    },

    {
        name: '',
        family: 'fas',
        prefix: 'fa-',
        category: 'beverage'
    },
    {
        name: '',
        family: 'fas',
        prefix: 'fa-',
        category: 'beverage'
    },
    {
        name: '',
        family: 'fas',
        prefix: 'fa-',
        category: 'beverage'
    },
    {
        name: '',
        family: 'fas',
        prefix: 'fa-',
        category: 'beverage'
    },
    {
        name: '',
        family: 'fas',
        prefix: 'fa-',
        category: 'beverage'
    },
    {
        name: '',
        family: 'fas',
        prefix: 'fa-',
        category: 'beverage'
    },

    {
        name: '',
        family: 'fas',
        prefix: 'fa-',
        category: 'animal'
    },
    {
        name: '',
        family: 'fas',
        prefix: 'fa-',
        category: 'animal'
    },
    {
        name: '',
        family: 'fas',
        prefix: 'fa-',
        category: 'animal'
    },
    {
        name: '',
        family: 'fas',
        prefix: 'fa-',
        category: 'animal'
    },
    {
        name: '',
        family: 'fas',
        prefix: 'fa-',
        category: 'animal'
    },
    {
        name: '',
        family: 'fas',
        prefix: 'fa-',
        category: 'animal'
    },
];

const colors = [
    {
        food: 'blue',
        animal: 'yellow',
        beverage: 'red'
    }
];


/*
FUNZIONI
*/
const printIcons = (arr, box) => {

    arr.forEach(
        (item) => {
            box.innerHTML += `<div class="card"></div>`;
        }
    )
}




/*
PROGRAMMA
*/
// 1. forEach => stampare in html i riquadri con le icone usando il destructuring attraverso una funzione
// gli argomenti della funzione sono l'array da ciclare e il container in cui stampare

const boxIcons = document.getElementById('Box_Icons');

printIcons(colors,boxIcons );


// Milestone 2
// Coloriamo le icone per tipo
// 2. .Map => creare un nuovo array inserendo i colori



// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
// 3. .Filter => 
