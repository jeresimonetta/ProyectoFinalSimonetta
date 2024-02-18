let contenedorRemeras = document.getElementById("contenedorRemeras");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let verCarrito = document.getElementById("verCarrito");
let contenedorCarrito = document.getElementById("contenedorCarrito");
let productos = [
    {
        id: 1,
        nombre: "Remera Asuka",
        precio: 10000,
        img: "./img/remeraAsuka.png",
        categoria: "remeras",
    },
    {
        id: 2,
        nombre: "Remera Crisis",
        precio: 10000,
        img: "./img/remeraCrisisBlanca.png",
        categoria: "remeras",
    },
    {
        id: 3,
        nombre: "Remera Miau",
        precio: 12000,
        img: "./img/remeraMiau.png",
        categoria: "remeras",
    },
    {
        id: 4,
        nombre: "Remera Michu",
        precio: 13000,
        img: "./img/remeraMichu.png",
        categoria: "remeras",
    },
    {
        id: 5,
        nombre: "Remera Moonstick",
        precio: 9000,
        img: "./img/remeraMoonstick.png",
        categoria: "remeras",
    },
    {
        id: 6,
        nombre: "Remera Roll",
        precio: 11000,
        img: "./img/remeraRoll.png",
        categoria: "remeras",
    },
];

const remeras = productos.filter((el) => el.categoria == "remeras")

remeras.forEach((remera) => {
    let content = document.createElement("div");
    content.className = "tarjeta-producto remeras";
    content.innerHTML = `
    <img src="${remera.img}" class="img-producto">
    <p>${remera.nombre}</p>
    <p>$${remera.precio}</p>
    <button class="boton-compra agregarAlCarrito">Agregar al carrito</button>
    `;
    contenedorRemeras.append(content);

    let agregarAlCarrito = content.querySelector(".agregarAlCarrito");
    agregarAlCarrito.addEventListener("click", () => {
        carrito.push({
            img: remera.img,
            id: remera.id,
            nombre: remera.nombre,
            precio: remera.precio,
        });
        saveLocal();
    });
});

verCarrito.addEventListener("click", () => {
    contenedorCarrito.innerHTML = "";
    contenedorCarrito.style.display = "flex";
    let headerCarrito = document.createElement("div");
    headerCarrito.className = "headerCarrito";
    headerCarrito.innerHTML = `
    <h1>Mi carrito</h1>
    `;
    contenedorCarrito.append(headerCarrito);

    let botonCerrar = document.createElement("button");
    botonCerrar.className = "botonCerrar boton-compra";
    botonCerrar.innerText = "X";
    headerCarrito.append(botonCerrar);
    botonCerrar.addEventListener("click", () => {
        contenedorCarrito.style.display = "none";
    })

    carrito.forEach((producto) => {
        let carritoUsuario = document.createElement("div");
        carritoUsuario.innerHTML = `
        <img src="${producto.img}" class="img-producto">
        <p>${producto.nombre}</p>
        <p>$${producto.precio}</p>
        `;

        contenedorCarrito.append(carritoUsuario)
    });

    let total = carrito.reduce((i, p) => i + p.precio, 0);
    
    let totalCompra = document.createElement("div");
    totalCompra.innerHTML = `
    Total a pagar $${total}
    <button class = "boton-compra">Finalizar compra</button>
    `;
    contenedorCarrito.append(totalCompra);
});

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
    console.log(carrito)
};

