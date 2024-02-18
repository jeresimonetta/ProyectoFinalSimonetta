let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let verCarrito = document.querySelector(".ver-carrito");
let contenedorCarrito = document.getElementById("contenedorCarrito");

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

