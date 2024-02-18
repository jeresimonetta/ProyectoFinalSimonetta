let contenedorPrints = document.getElementById("contenedorPrints");

const prints = productos.filter((el) => el.categoria == "prints");

prints.forEach((producto) => {
    let content = document.createElement("div");
    content.className = "tarjeta-producto prints";
    content.innerHTML = `
    <img src="${producto.img}" class="img-producto">
    <p>${producto.nombre}</p>
    <p>$${producto.precio}</p>
    <button class="boton-compra agregarAlCarrito">Agregar al carrito</button>
    `;
    contenedorPrints.append(content);

    let agregarAlCarrito = content.querySelector(".agregarAlCarrito");
    agregarAlCarrito.addEventListener("click", () => {
        carrito.push({
            img: producto.img,
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
        });
        saveLocal();
    });
});