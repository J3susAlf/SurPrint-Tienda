const productos = [
  {
    nombre: "Playera Vinil Reflejante",
    categoria: "playera",
    precio: "$250",
    imagenes: [
      "assets/Playeras/playera1.jpg",
      "assets/Playeras/playera1.1.jpeg",
      "assets/Playeras/playera2.jpg",
      "assets/Playeras/playera2.1.jpeg",
      "assets/Playeras/playera3.jpg",
    ],
    material: "Algodón + DTF",
    colores: "Blanco, Rojo, Negro, Azul, Verde",
    descripción: "Playera personalizada de alta calidad.",
  },
  {
    nombre: "Llavero Resina",
    categoria: "llavero",
    precio: "$40",
    imagenes: [
      "assets/Llaveros/LlaveroResina1.jpeg",
      "assets/Llaveros/LlaveroResina2.jpeg",
    ],
    material: "Resina epóxica",
    colores: "Transparente, Rojo, Negro, Azul",
    descripción: "Llavero de resina personalizado.",
  },
  {
    nombre: "Llavero de Acrílico",
    categoria: "llavero",
    precio: "$35",
    imagenes: [
      "assets/Acrilico/Llavero1.jpeg",
      "assets/Acrilico/Llavero2.jpeg",
      "assets/Acrilico/Llavero3.jpeg",
    ],
    material: "Acrílico",
    disenos: "Cualquiera",
    descripción: "Llavero de acrílico personalizado.",
  },
  {
    nombre: "Calcomanías Personalizadas",
    categoria: "calcomania",
    precio: "$$$",
    imagenes: [
      "assets/Stickers/Sticker1.jpeg",
      "assets/Stickers/Sticker2.jpeg",
      "assets/Stickers/Sticker3.jpeg",
      "assets/Stickers/Sticker4.jpeg",
      "assets/Stickers/Sticker5.jpeg",
      "assets/Stickers/Sticker6.jpeg",
    ],
    material: "Vinil adhesivo",
    disenos: "Cualquiera",
    descripción: "Calcomanías personalizadas decorativas.",
  },
  {
    nombre: "Figuras 3D",
    categoria: "figura",
    precio: "$$$",
    imagenes: [
      "assets/3D/3d2.jpeg",
      "assets/3D/3d1.jpeg",
      "assets/3D/3d3.jpeg",
      "assets/3D/3d4.jpeg",
      "assets/3D/3d5.jpeg",
    ],
    material: "PLA, ABS, PETG",
    disenos: "Cualquiera",
    descripción: "Figuras 3D personalizadas de alta calidad.",
  },
  {
    nombre: "Gorra Personalizada",
    categoria: "gorra",
    precio: "$100",
    imagenes: ["assets/Gorra/Gorra1.jpeg"],
    material: "Poliéster, Algodón",
    disenos: "Cualquiera",
    descripción: "Gorra personalizada de alta calidad.",
  },
];

function renderProductos(lista) {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";

  lista.forEach((p, index) => {
    let carouselItems = "";

    p.imagenes.forEach((img, i) => {
      carouselItems += `
        <div class="carousel-item ${i === 0 ? "active" : ""}">
          <img src="${img}" class="d-block w-100">
        </div>
      `;
    });

    contenedor.innerHTML += `
      <div class="col-md-4">
        <div class="card p-2">

          <div id="carousel${index}" class="carousel slide">
            <div class="carousel-inner">
              ${carouselItems}
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carousel${index}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carousel${index}" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>

          <div class="card-body">
            <h5 class="card-title">${p.nombre}</h5>
            <p>${p.material}</p>
            <p><strong>${p.disenos ? "Diseños" : "Colores"}:</strong> ${p.disenos || p.colores}</p>
            <p class="precio">${p.precio}</p>
            ${p.descripción ? `<p>${p.descripción}</p>` : ""}
          </div>

        </div>
      </div>
    `;
  });
}

function filtrar(categoria) {
  document
    .querySelectorAll(".btn-filtro")
    .forEach((btn) => btn.classList.remove("activo"));
  event.target.classList.add("activo");
  if (categoria === "todos") {
    renderProductos(productos);
  } else {
    const filtrados = productos.filter((p) => p.categoria === categoria);
    renderProductos(filtrados);
  }
}

// Inicial
renderProductos(productos);
