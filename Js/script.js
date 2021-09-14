// Input - dati
const icons = [
    {
        name: 'apple-alt',
        family: 'fas',
        prefix: 'fa-',
        category: 'food'
    },
    {
        name: 'ice-cream',
        family: 'fas',
        prefix: 'fa-',
        category: 'food'
    },
    {
        name: 'fish',
        family: 'fas',
        prefix: 'fa-',
        category: 'food'
    },
    {
        name: 'lemon',
        family: 'fas',
        prefix: 'fa-',
        category: 'food'
    },
    {
        name: 'hamburger',
        family: 'fas',
        prefix: 'fa-',
        category: 'food'
    },
    {
        name: 'pizza-slice',
        family: 'fas',
        prefix: 'fa-',
        category: 'food'
    },

    {
        name: 'beer',
        family: 'fas',
        prefix: 'fa-',
        category: 'beverage'
    },
    {
        name: 'glass-whiskey',
        family: 'fas',
        prefix: 'fa-',
        category: 'beverage'
    },
    {
        name: 'wine-bottle',
        family: 'fas',
        prefix: 'fa-',
        category: 'beverage'
    },
    {
        name: 'cocktail',
        family: 'fas',
        prefix: 'fa-',
        category: 'beverage'
    },
    {
        name: 'coffee',
        family: 'fas',
        prefix: 'fa-',
        category: 'beverage'
    },
    {
        name: 'glass-martini',
        family: 'fas',
        prefix: 'fa-',
        category: 'beverage'
    },

    {
        name: 'dragon',
        family: 'fas',
        prefix: 'fa-',
        category: 'animal'
    },
    {
        name: 'kiwi-bird',
        family: 'fas',
        prefix: 'fa-',
        category: 'animal'
    },
    {
        name: 'frog',
        family: 'fas',
        prefix: 'fa-',
        category: 'animal'
    },
    {
        name: 'hippo',
        family: 'fas',
        prefix: 'fa-',
        category: 'animal'
    },
    {
        name: 'otter',
        family: 'fas',
        prefix: 'fa-',
        category: 'animal'
    },
    {
        name: 'horse',
        family: 'fas',
        prefix: 'fa-',
        category: 'animal'
    },
];

const colors = {
    food: 'orange',
    animal: 'blue',
    beverage: '#FF0000'
}

console.log(colors);

/*
FUNZIONI
*/
// gli argomenti della funzione sono l'array da ciclare e il container in cui stampare
const printIcons = (arr, box) => {

    arr.forEach(
        (item) => {

            // destructuring - salvo le proprietà
            // const {name, family, prefix, category} = item;

            box.innerHTML += `
            <div class="card">
                <i class="${item.family} ${item.prefix}${item.name}"></i>
                <div class='icon_name'>${item.name}</div>
            </div>
            `;
        }
    )
}



/*
PROGRAMMA
*/
// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// 1. forEach => stampare in html i riquadri con le icone usando il destructuring attraverso una funzione

// salvo il valore del contenitore in cui inserire le icone
const boxIcons = document.getElementById('Box_Icons');
// richiamo la funzione per stampare
// printIcons(icons, boxIcons);



// Milestone 2
// Coloriamo le icone per tipo
// 2. .Map => creare un nuovo array inserendo i colori
const colorIcons = icons.map (
    (item) => {
        return {

            // inserisco tutte le proprietà dell'array icons
            name: item.name,
            family: item.family,
            prefix: item.prefix,
            category: item.category,

            // aggiungo una nuova proprità, il colore
            color: colors [item.category]
        };
    }
);
console.log(colorIcons);
// richiamo la funzione per stampare
printIcons(colorIcons, boxIcons);



// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
// 3. .Filter => 
