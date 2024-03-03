let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let verCarrito = document.querySelector(".ver-carrito");
let contenedorCarrito = document.getElementById("contenedorCarrito");

let mostrarCarrito = () => {
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
        let productoEnCarrito = document.createElement("div");
        productoEnCarrito.className = "productoEnCarrito";
        productoEnCarrito.innerHTML = `
        <img src="${producto.img}" class="img-carrito">
        <p>${producto.nombre}</p>
        <p>$${producto.precio}</p>
        `;

        contenedorCarrito.append(productoEnCarrito);
        
        let eliminar = document.createElement("p");
        eliminar.innerText = "❌";
        eliminar.className = "btnEliminarProducto";
        productoEnCarrito.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
        saveLocal();
    });

    let total = carrito.reduce((i, p) => i + p.precio, 0);
    
    let totalCompra = document.createElement("div");
    totalCompra.innerHTML = `
    Total a pagar $${total}
    <button class = "boton-compra">Finalizar compra</button>
    `;

    contenedorCarrito.append(totalCompra);
};

verCarrito.addEventListener("click", mostrarCarrito);

let eliminarProducto = () => {
    let foundId = carrito.find((producto) => producto.id);

    carrito = carrito.filter((carritoFiltrado) => {
        return carritoFiltrado !== foundId;
    });

    mostrarCarrito();
};

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
    console.log(carrito)
};