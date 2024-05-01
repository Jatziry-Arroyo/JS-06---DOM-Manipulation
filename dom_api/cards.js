/*
 * [x] crear tarjeta
 * [x] crear secciones para tarjeta
 * [] img
 * [x] nombre, descripcion, edad, lista
 * [x] insertar en la tarjeta
 * [x] mostrar dentro de div.container
 * [ ] funciones reutilizables
 * [ ] funciones para crear items
 * [ ] funciones para inyectar texto
 * [ ] funciones para renderizas
 * [ ] multiples usuarios
 */

const CARDS_CONTAINER = document.getElementById("card-container"); // se puede poner querySelector tambien con .para clase o # para id
//get element id -id, get by name - class
const USER = {
    id: 1,
    username: 'Jose_L2010',
    desc: 'Sobre mi',
    age: 26,
    fav_books: {
        books: ['Angeles y demosnios', 
                'El Principito', 
                'Brida', 
                'Ensayo sobre la ceguera'], 
    },

    id: 2,
    username: "booklover123",
    desc: "Avid reader and coffee enthusiast.",
    age: 29,
    fav_books: {
        books: ["To Kill a Mockingbird", 
                "1984", 
                "Pride and Prejudice"]
    },

    id: 3,
    username: "literature_junkie",
    desc: "Poetry lover and amateur writer.",
    age: 35,
    fav_books: {
        books: ["The Great Gatsby", 
                "Invisible Man", 
                "Beloved"]
    },

    id: 4,
    username: "Sonii899",
    desc: "Disfruto de la lectura, sobre todo las novelas románticas.",
    age: 48,
    fav_books: {
        books: ["El amor en los tiempos de Cólera", 
                "Orgullo y prejuicio", 
                "El Ruiseñor"]
    },

    id: 5,
    username: "Frankie2024",
    desc: "Un libro y un buen vino.",
    age: 53,
    fav_books: {
        books: ["Don Quijote de la Mancha", 
                "Las mil y una noches", 
                "Odisea"]
    }
}

//crear secciones
function createElements(){
    const cardObj = {
        name_section: document.createElement("h3"),
        desc_section: document.createElement ("p"),
        age_section: document.createElement("p"),
        book_section: document.createElement("div"),
    };
    return cardObj;
}


//lista
/*const bookList = USER.fav_books.books.map ((e) => {
    const item = document.createElement ("ul");
    item.textContent = e;
    return item;
});*/

//crear tarjeta
// inyectar datos

function injectData(obj, user){
    const bookList = user.fav_books.books.map ((e) => {
        const item = document.createElement ("ul");
        item.textContent = e;
        return item;
    });
    
    obj.name_section.textContent = user.username;
    obj.desc_section.textContent = user.desc;
    obj.age_section.textContent = user.age;
    obj.book_section.append(...bookList);
    renderCard(obj)
}

//funcion para renderizar
function renderCard(cardObj){
    const card = document.createElement("div");
    card.append(
        cardObj.name_section,
        cardObj.desc_section,
        cardObj.age_section,
        cardObj.book_section,
    );
    card.className = "div-creado";
    CARDS_CONTAINER.appendChild(card);
}

USERS.forEach((user) => {
    const cardData = createElements();
    injectData(cardData, user);
});
    


