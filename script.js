// console.log('js ok');

// console.log(icon);

const container = document.getElementById('container');
const select = document.getElementById('select');

createTemplate(icon, container);






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

    for (let i = 0; i < icon.length; i++) {

        const box = createBox(icon[i]);
        container.appendChild(box);

    }
}

