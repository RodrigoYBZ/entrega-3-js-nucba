// DECLARACION DE CONSTANTES

const pizzaForm = document.getElementById("pizzaForm");
const pizzaInput = document.getElementById("pizzaId");
const errorText = document.querySelector("small");
const pizzaName = document.getElementById("nombre");
const pizzaPrice = document.getElementById("precio");
const searchPizza = document.getElementById("buscarPizza");
const pizzaIngredientes = document.getElementById("ingredientes") 
const pizzaImg = document.getElementById("imageChange")

const pizzas = [
    {
        id: 1,
        nombre: "Napolitana",
        ingredientes: ["Albahaca", " Cherry", " Mozarella"],
        precio: "$570",
        img: "/assets/pizza-napo.jpg",
    },
    {
        id: 2,
        nombre: "Especial",
        ingredientes: ["Muzzarela", " Aceitunas", " Morron", " Huevo"],
        precio: "$900",
        img: "/assets/pizza-especial.jpg",
    },
    {
        id: 3,
        nombre: "Cantimpalo",
        ingredientes: ["Cantimpalo", " Salsa", " Muzarella"],
        precio: "$800",
        img: "/assets/pizza-cantimpalo.jpg",
    },
    {
        id: 4,
        nombre: "Cuatro Quesos",
        ingredientes: ["Muzzarela", " Roquefort", " Cheddar", " Queso"],
        precio: "$1000",
        img: "/assets/pizza-cuatro-quesos.jpg",
    },
    {
        id: 5,
        nombre: "Descontrolada",
        ingredientes: ["Morrones", " Cheddar", " Muzarela", " Bacon", " Huevo"],
        precio: "$1200",
        img: "/assets/pizza-descontrolada.jpg",
    },
    {
        id: 6,
        nombre: "Americana",
        ingredientes: ["Queso", " Salsa", " Huevo", " Cheddar", " Bacon", " Doritos"],
        precio: "$1800",
        img: "/assets/pizza-americana.jpg",
    },
    {
        id: 7,
        nombre: "Veggie",
        ingredientes: ["Masa Madre", " Brocoli", " Humus"],
        precio: "$2000",
        img: "/assets/pizza-veggie.jpg",
    },
];


// EVENTOS Y FUNCIONES

pizzaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getPizza(pizzaInput.value);
});

const getPizza = (idInput) => {
    if (idInput > 0 && idInput <= pizzas.length) {
        errorText.classList.remove("error");
        errorText.classList.add("succes");
        renderPizza(idInput);
    } else {
        errorText.classList.remove("succes");
        errorText.classList.add("error");
    }
};

const renderPizza = (idInput) => {
    const { nombre, precio, img, ingredientes  } = pizzas[idInput - 1];
    pizzaName.textContent = nombre;
    pizzaPrice.textContent = precio;
    pizzaIngredientes.textContent = ingredientes;
    pizzaImg.src = img;
}; 

localStorage. setItem("Pizza", JSON.stringify(pizzas));
let misPizzas = localStorage.getItem("Pizza");
