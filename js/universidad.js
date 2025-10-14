
var esFavorito = false; 

function toggleFavorito(paramNombreCodificado, paramUrl) {
    const paramname = decodeURIComponent(paramNombreCodificado);
    
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    let existe = favoritos.some(uni => uni.name === paramname);

    if (existe) {
        favoritos = favoritos.filter(uni => uni.name !== paramname);
        esFavorito = false;
    } else {
        favoritos.push({
            name: paramname,
            url: paramUrl
        });
        esFavorito = true;
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    // Actualizar el corazón
    const botonId = paramNombreCodificado.replace(/[^a-zA-Z0-9]/g, ''); 
    const boton = document.querySelector(`#corazon-${botonId}`);
    if (boton) boton.textContent = esFavorito ? "❤️" : "🤍";
}

function Detalle(paramNombreCodificado) {
    const root = document.getElementById("root");
    root.innerHTML = "";

    const nombreUniversidad = decodeURIComponent(paramNombreCodificado);

    // Buscar la universidad 
    const data = universidades.find(uni => uni.name === nombreUniversidad);
    
    if (!data) {
        root.innerHTML = `<p>No se encontró el detalle de ${nombreUniversidad}.</p>`;
        return;
    }

    const botonId = paramNombreCodificado.replace(/[^a-zA-Z0-9]/g, ''); 

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    esFavorito = favoritos.some(uni => uni.name === data.name);
    
    // Preparar listas de dominios y webs
    let dominiosHTML = (data.domains || []).map(d => `<li>${d}</li>`).join('');
    let websHTML = (data.web_pages || []).map(w => `<li><a href="${w}" target="_blank">${w}</a></li>`).join('');
    const webPrincipal = data.web_pages && data.web_pages.length > 0 ? data.web_pages[0] : "No disponible";

    
    const detalle = `
    <section class="c-detalle-uni">
        <h2>${data.name}</h2>
        <p><strong>País:</strong> ${data.country} (${data.alpha_two_code})</p>
        ${data['state-province'] ? `<p><strong>Estado/Provincia:</strong> ${data['state-province']}</p>` : ''}
        
        <h3>Dominios:</h3>
        <ul>${dominiosHTML}</ul>
        
        <h3>Páginas Web:</h3>
        <ul>${websHTML}</ul>
        
        <button onClick="toggleFavorito('${paramNombreCodificado}', '${webPrincipal}')">
            <span id="corazon-${botonId}">${esFavorito ? '❤️' : '🤍'}</span> Guardar en Favoritas
        </button>
        <button onclick="Home()">Volver al Inicio</button>
    </section>
    `;

    root.innerHTML = detalle;
}