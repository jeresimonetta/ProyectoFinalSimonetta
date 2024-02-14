let contenedorRemeras = document.getElementById("contenedorRemeras");
let carrito = [];
let verCarrito = document.getElementById("verCarrito");
let contenedorCarrito = document.getElementById("contenedorCarrito");
let remeras = [
    {
        id: 1,
        nombre: "Remera Asuka",
        precio: 10000,
        img: "./img/remeraAsuka.png",
    },
    {
        id: 2,
        nombre: "Remera Crisis",
        precio: 10000,
        img: "./img/remeraCrisisBlanca.png",
    },
    {
        id: 3,
        nombre: "Remera Miau",
        precio: 12000,
        img: "./img/remeraMiau.png",
    },
    {
        id: 4,
        nombre: "Remera Michu",
        precio: 13000,
        img: "./img/remeraMichu.png",
    },
    {
        id: 5,
        nombre: "Remera Moonstick",
        precio: 9000,
        img: "./img/remeraMoonstick.png",
    },
    {
        id: 6,
        nombre: "Remera Roll",
        precio: 11000,
        img: "./img/remeraRoll.png",
    },
];

remeras.forEach((remera) => {
    let content = document.createElement("div");
    content.className = "tarjeta-producto remeras";
    content.innerHTML = `
    <img src="${remera.img}" class="img-producto">
    <p>${remera.nombre}</p>
    <p>$${remera.precio}</p>
    `;
    contenedorRemeras.append(content);

    let agregarAlCarrito = document.createElement("button");
    agregarAlCarrito.innerText = "Agregar al carrito";
    content.append(agregarAlCarrito);
    agregarAlCarrito.className = "boton-compra";

    agregarAlCarrito.addEventListener("click", () => {
        carrito.push({
            img: remera.img,
            id: remera.id,
            nombre: remera.nombre,
            precio: remera.precio,
        });
        console.log(carrito);
    })
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

    carrito.forEach((remera) => {
        let carritoUsuario = document.createElement("div");
        carritoUsuario.innerHTML = `
        <img src="${remera.img}" class="img-producto">
        <p>${remera.nombre}</p>
        <p>$${remera.precio}</p>
        `;

        contenedorCarrito.append(carritoUsuario)
    });

    let total = carrito.reduce((i, p) => p.precio, 0);
    
    let totalCompra = document.createElement("div");
    totalCompra.innerHTML = `
    Total a pagar $${total}
    <button class = "boton-compra">Finalizar compra</button>
    `;
    contenedorCarrito.append(totalCompra);
});
