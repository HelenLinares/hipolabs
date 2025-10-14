// informativa.js

function Informativa() {
    const root = document.getElementById("root");
    root.innerHTML = "";
    
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-proyecto');
    
    infoContainer.innerHTML = `
        <h2>Información del Proyecto</h2>

        <section>
            <h3>1. Objetivo y Alcance</h3>
            <p>Este proyecto es un **Explorador Global de Universidades** diseñado para facilitar la búsqueda y comparación de instituciones de educación superior en varios países.</p>
            <p>La aplicación simula el comportamiento de una API individual, utilizando archivos JSON estáticos para proporcionar datos rápidos y estables de las universidades.</p>
        </section>

        <section>
            <h3>2. Tecnologías y Desarrollo</h3>
            <ul>
                <li><strong>Front-end:</strong> Desarrollado CSS y JavaScript.</li>
                <li><strong>Datos:</strong> Se utiliza el patrón de **JSON estático local** para la carga de datos.</li>
                <li><strong>Persistencia:</strong> La gestión de universidades Favoritas se realiza mediante el almacenamiento local del navegador (<strong>LocalStorage</strong>).</li>
                <li><strong>Desarrollo:</strong> Diseñado para ser fácilmente empaquetado como una APK.</li>
            </ul>
        </section>

        <section>
            <h3>3. Funcionalidades Destacadas</h3>
            <ul>
                <li><strong>Inicio:</strong> Listado con filtro por país y barra de búsqueda dinámica.</li>
                <li><strong>Aleatorio:</strong> Muestra una selección al azar de 10 universidades de todos los países cargados.</li>
                <li><strong>Favoritas:</strong> Permite al usuario guardar y eliminar universidades de una lista persistente.</li>
                <li><strong>Detalle:</strong> Vista ampliada con dominios, páginas web y opción de guardado.</li>
            </ul>
        </section>
       
    `;

    root.appendChild(infoContainer);
}