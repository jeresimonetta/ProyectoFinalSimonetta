let contenedorRemeras = document.getElementById("contenedorRemeras");

const remeras = productos.filter((el) => el.categoria == "remeras")

remeras.forEach((producto) => {
    let content = document.createElement("div");
    content.className = "tarjeta-producto remeras";
    content.innerHTML = `
    <img src="${producto.img}" class="img-producto">
    <p>${producto.nombre}</p>
    <p>$${producto.precio}</p>
    <button class="boton-compra agregarAlCarrito">Agregar al carrito</button>
    `;
    contenedorRemeras.append(content);

    let agregarAlCarrito = content.querySelector(".agregarAlCarrito");
    agregarAlCarrito.addEventListener("click", () => {
        carrito.push({
            img: producto.img,
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
        });

        saveLocal();

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Agregaste ${producto.nombre} al carrito.`,
            showConfirmButton: false,
            timer: 2000
        });
    });
});