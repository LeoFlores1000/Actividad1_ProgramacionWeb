// Contenido de los servicios de tu compañero (Corregido)
let serviciosBase = [
    { nombre: "Páginas web", precio: 1000, descripcion: "Creación de paginas web", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRo79zgx0A2n-p3m0oUlkIFe6V6Ug030Law&s" },
    { nombre: "Soporte técnico", precio: 300, descripcion: "Reparación de equipos", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn9b35QwFFOZVWuplzWTXJuJXiUFWdXCRC_A&s" },
    { nombre: "Auditorías", precio: 4000, descripcion: "Revisión y mantenimiento a tus servicios", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKY9W-d0ya3rE295CrXd7Y0FpZQPSLEqqIQ&s" },
    { nombre: "Servicios de bases de datos", precio: 3000, descripcion: "Diseño de bases de datos", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxGl5NYw1IBYCFkJWw1w-GYOIxc-rgtOdaKw&s" },
    { nombre: "Marketing", precio: 500, descripcion: "Creación, gestión y potenciación de redes sociales", imagen: "https://ariapsa.com/wp-content/uploads/2022/11/Paquetes-de-Redes-Sociales-y-marketing-digital-ariapsa-mexico.png" },
    { nombre: "Aplicaciones móviles", precio: 6000, descripcion: "Desarrollo de aplicaciones móviles", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRm6cHTHeBvdkSidnwGL_A1Og1Q8z69sYUig&s" },
    { nombre: "Aministración de bases de datos", precio: 2000, descripcion: "Administración y respaldo de datos", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMN3-iu-YB7HFVK5A29Dxk5rCgGALVRV1prA&s" },
    { nombre: "Seguridad", precio: 10000, descripcion: "implementación de firewall y controles de acceso", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMN3-iu-YB7HFVK5A29Dxk5rCgGALVRV1prA&s" },
    { nombre: "Software", precio: 5000, descripcion: "Sistemas de software para empresas (ventas, incentarios, entre otros", imagen: "https://s3.amazonaws.com/www-itopvpn-com/blog/20250411/1744351579624391.png" },
    { nombre: "Redes", precio: 5000, descripcion: "instalación de routers y switches, seguridad en redes", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlnkXchjyDCsLx4jK3JzOmCILVVX6-5YPKA&s" }
];
let serviciosLocal= JSON.parse(localStorage.getItem('misServicios')) || [];
let todosLosServicios = [...serviciosBase, ...serviciosLocal];
// DATOS
const equipo = [
    {nombre: "Diana Laura Campos Rosas", rol: "Backend developer", bio: "Enfocada en el desarrollo backend y la gestión de bases de datos relacionales.", foto: "foto de perfil - Diana.jpeg"},
    {nombre: "Leonardo Flores Vitela", rol: "Web developer", bio: "Enfocado en el desarrollo de interfaces web atractivas y funcionales.", foto: "foto de perfil - Leo.jpeg"}
]

// Sonido de éxito (puedes usar esta URL de un "pop" limpio)
const sonidoPop = new Audio('https://notificationsounds.com/storage/sounds/file-sounds-1150-pristine.mp3');

function configurarFormulario() {
    const formulario = document.getElementById('formulario-alta');
    if (!formulario) return;

    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Creamos el nuevo objeto
        const nuevoServicio = {
            nombre: document.getElementById('nombre').value.trim(),
            precio: parseFloat(document.getElementById('precio').value.trim()),
            descripcion: document.getElementById('descripcion').value.trim(),
            imagen: document.getElementById('imagen').value.trim()
        };

        // Guardar en el array local y subir a localStorage
        serviciosLocal.push(nuevoServicio);
        localStorage.setItem('misServicios', JSON.stringify(serviciosLocal));

        mostrarNotificacion("¡Servicio registrado correctamente!");
    });
}

function generarServicios(){
    // Referenciar con base de html
    const contenedor = document.getElementById('contenedor-servicios');
    if (!contenedor) return;
    // Nuestro bucle dinámico
    todosLosServicios.forEach(servicio => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta-servicio';

    // Condicional para marcar los servicios mayores a $1000
    if (servicio.precio > 1000) {
        tarjeta.classList.add('servicio-premium');
    }

    // Creación de elementos
    const img = document.createElement('img');
    img.src = servicio.imagen;
    img.alt = servicio.nombre;
    
    const titulo = document.createElement('h3');
    titulo.innerText = servicio.nombre;
    
    const desc = document.createElement('p');
    desc.className = 'desc-corta';
    desc.innerText = servicio.descripcion;
    
    const precio = document.createElement('p');
    precio.className = 'precio-servicio';
    precio.innerText = `$${servicio.precio}`;

    // Armar la tarjeta
    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(desc);
    tarjeta.appendChild(precio);

    // Mandar la tarjeta al HTML
    contenedor.appendChild(tarjeta);
});
}

function generarNav() {
    const navContainer = document.getElementById('main-nav');
    if (!navContainer) return;

    // Detectar página actual para la clase 'active'
    const paginaActual = window.location.pathname.split("/").pop() || "index.html";

    navContainer.innerHTML = `
        <div class="nav-container">
            <a href="index.html" class="nav-logo">Flocam</a>
            <div class="nav-links">
                <a href="index.html" class="${paginaActual === 'index.html' ? 'active' : ''}">Inicio</a>
                <a href="servicios.html" class="${paginaActual === 'servicios.html' ? 'active' : ''}">Servicios</a>
                <a href="alta.html" class="${paginaActual === 'alta.html' ? 'active' : ''}">Alta</a>
            </div>
        </div>
    `;
}

function generarHeader() {
    const header = document.getElementById('main-header');
    if (!header) return;
    const pagina = window.location.pathname.split("/").pop() || "index.html";

    if (pagina === "index.html" || pagina === "") {
        header.className = "hero-index";
        header.innerHTML = `
            <div class="hero-content">
                <h1>A tu servicio</h1>
                <p>¡Conócenos!</p>
                <a href="servicios.html" class="btn-primary">Explorar servicios</a>
            </div>`;
    } else {
        header.innerHTML = `
            <h1>Servicios de Ingenieros en Sistemas Computacionales</h1>
            <p>Soluciones para tu negocio</p>`;
    }
}

function generarFooter() {
    const footerContainer = document.getElementById('main-footer');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
        <div class="container">
            <p>Flocam 2026</p>
            <p>Instituto Tecnológico de Morelia - Ingeniería en Sistemas Computacionales</p>
        </div>
    `;
}
function generarSeccionEquipo() {
    const seccion = document.getElementById('seccion-equipo-completa');
    if (!seccion) return;

    seccion.className = "seccion-equipo";
    seccion.innerHTML = `
        <h2 class="titulo-seccion">Nuestra experiencia</h2>
        <p class="subtitulo-seccion">Estudiantes de 6º Semestre - ISC</p>
        <div id="contenedor-equipo" class="grid-equipo"></div>`;

    const contenedorCards = document.getElementById('contenedor-equipo');
    equipo.forEach(miembro => {
        const art = document.createElement('article');
        art.className = "tarjeta-miembro";
        art.innerHTML = `
            <img src="${miembro.foto}" alt="${miembro.nombre}" class="foto-perfil">
            <div class="info-miembro">
                <h3>${miembro.nombre}</h3>
                <p class="rol">${miembro.rol}</p>
                <p class="bio">${miembro.bio}</p>
            </div>`;
        contenedorCards.appendChild(art);
    });
}

function mostrarNotificacion(mensaje) {
    const container = document.getElementById('notification-container');
    if (!container) return;

    sonidoPop.currentTime = 0; // Reinicia el sonido por si acaso
    sonidoPop.play().catch(error => console.log("El navegador bloqueó el audio inicial:", error));

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <span>✅</span>
        <span>${mensaje}</span>
    `;

    container.appendChild(toast);

    // Quitamos la alerta después de 3 segundos
    setTimeout(() => {
        toast.classList.add('fade-out');
        toast.addEventListener('animationend', () => {
            toast.remove();
            // Redireccionamos DESPUÉS de que se vea la animación
            window.location.href = "servicios.html";
        });
    }, 2500);
}

document.addEventListener('DOMContentLoaded', () => {
    generarNav();
    generarHeader();
    generarSeccionEquipo();
    generarServicios();
    generarFooter();
    configurarFormulario();
});