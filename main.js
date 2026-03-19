// Contenido de los servicios de tu compañero (Corregido)
const servicios = [
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

// Referenciar con base de html
const contenedor = document.getElementById('contenedor-servicios');

// Nuestro bucle dinámico
function generarServicios(){
    servicios.forEach(servicio => {
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
            </div>
        </div>
    `;
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

document.addEventListener('DOMContentLoaded', () => {
    generarNav();
    generarFooter();
    generarServicios();
});