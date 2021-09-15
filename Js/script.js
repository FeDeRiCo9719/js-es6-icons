// Input - dati
const icons = [
    {
        name: 'apple-alt',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food'
    },
    {
        name: 'ice-cream',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food'
    },
    {
        name: 'fish',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food'
    },
    {
        name: 'lemon',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food'
    },
    {
        name: 'hamburger',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food'
    },
    {
        name: 'pizza-slice',
        family: 'fas',
        prefix: 'fa-',
        category: 'Food'
    },

    {
        name: 'beer',
        family: 'fas',
        prefix: 'fa-',
        category: 'Beverage'
    },
    {
        name: 'glass-whiskey',
        family: 'fas',
        prefix: 'fa-',
        category: 'Beverage'
    },
    {
        name: 'wine-bottle',
        family: 'fas',
        prefix: 'fa-',
        category: 'Beverage'
    },
    {
        name: 'cocktail',
        family: 'fas',
        prefix: 'fa-',
        category: 'Beverage'
    },
    {
        name: 'coffee',
        family: 'fas',
        prefix: 'fa-',
        category: 'Beverage'
    },
    {
        name: 'glass-martini',
        family: 'fas',
        prefix: 'fa-',
        category: 'Beverage'
    },

    {
        name: 'dragon',
        family: 'fas',
        prefix: 'fa-',
        category: 'Animal'
    },
    {
        name: 'kiwi-bird',
        family: 'fas',
        prefix: 'fa-',
        category: 'Animal'
    },
    {
        name: 'frog',
        family: 'fas',
        prefix: 'fa-',
        category: 'Animal'
    },
    {
        name: 'hippo',
        family: 'fas',
        prefix: 'fa-',
        category: 'Animal'
    },
    {
        name: 'otter',
        family: 'fas',
        prefix: 'fa-',
        category: 'Animal'
    },
    {
        name: 'horse',
        family: 'fas',
        prefix: 'fa-',
        category: 'Animal'
    },
];

const colors = {
    Food: 'rgb(255, 115, 0)',
    Animal: 'rgb(0, 118, 197)',
    Beverage: 'rgb(17, 177, 57)'
}


/*
FUNZIONI
*/

// gli argomenti della funzione sono l'array da ciclare e il container in cui stampare
const printIcons = (arr, box) => {

    box.innerHTML = "";

    arr.forEach(
        (item) => {

            // destructuring - salvo le proprietà all'interno di viariabili
            const {name, family, prefix, color} = item;

            box.innerHTML += `
            <div class="card">
                <i class="${family} ${prefix}${name}" style="color:${color};"></i>
                <div>${name}</div>
            </div>
            `;
        }
    )
} 



/*
PROGRAMMA
*/

// Milestone 1
// salvo il valore del contenitore in cui inserire le icone
const boxIcons = document.getElementById('Box_Icons');



// Milestone 2
// Coloriamo le icone per tipo
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
const arrayCategory = [];
icons.forEach(
    (item) => {
        console.log(item.category);
        if ( arrayCategory.includes(item.category) == false ) {
            arrayCategory.push(item.category)
        }
    }
);

// aggiungere le option della select in html in maniera dinamica, non dipendono dall'html ma da i dati in Js
const selectCategory = document.getElementById('category');
arrayCategory.forEach(
    (item) => {
        selectCategory.innerHTML += `
        <option value="${item}">${item}</option>
        `
    }
);

console.log(selectCategory.value);

// creare evento change per filtrare le icone in base alla option della select
selectCategory.addEventListener('change',
    function() {

        const iconsFiltered = colorIcons.filter(
            (item) => {
                if ( item.category == selectCategory.value || selectCategory.value == "" ) {
                    return true;
                } 
                return false;
            }
        );

        printIcons( iconsFiltered, boxIcons )
    }
);

