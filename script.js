// console.log('js ok');

// console.log(icon);





// funzioni ------------------------------------------------------------------
/**
 * Create a div element with a class of boxIcon. 
 * 
 * Inside the div, create a span element with a class of the icon family and the icon name. 
 * 
 * Then, create a paragraph element with the icon name. 
 * 
 * Return the box element
 * @param icon - The icon object that we created earlier.
 * @returns A div element with a span element and a paragraph element.
 */
function createBox(icon) {

    const box = document.createElement('div');
    box.className = 'boxIcon';

    box.innerHTML = `
        <span class="${icon.color} ${icon.family} ${icon.prefix + icon.name}"></span>
        <p>${icon.name}</p>
    `;

    return box;

}


/**
 * Create a box for each icon in the icon array
 * @param icon - an array of objects that contain the following properties:
 */
function createTemplate(icon, container) {

    icon.forEach((element, index, array) => {
        const box = createBox(icon[index]);
        container.appendChild(box);
    });

}

/**
 * Given a type, return a list of icons that match that type
 * @param type - The type of animal you want to filter by.
 * @returns An array of objects.
 */
const filterBy = (typeOf) => {
    return icon.filter(element => element.type === typeOf);

}

// fine funzioni ----------------------------------------------


const container = document.getElementById('container');
// const select = document.getElementById('select');
const animal = document.getElementById('animal');
const vegetable = document.querySelector('.vegetable');
const user = document.querySelector('.user');

// createTemplate(icon, container);



animal.addEventListener('click', function () {
    container.innerText = '';
    const animalArrey = filterBy('animal')
    createTemplate(animalArrey, container);
    // console.log('ho cliccato')
})

vegetable.addEventListener('click', function () {
    container.innerText = '';
    const vegetableArrey = filterBy('vegetable');
    createTemplate(vegetableArrey, container);
})

user.addEventListener('click', function () {
    container.innerText = '';
    const userArrey = filterBy('user');
    createTemplate(userArrey, container);
})





