// favoritos.js

function Favoritos() {
    const root = document.getElementById("root");
    root.innerHTML = "";
    
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    
    let contenidoHTML = "<h2>Mis Universidades Favoritas</h2>";
    
    if (favoritos.length === 0) {
        contenidoHTML += "<p>Aún no has marcado ninguna universidad como favorita.</p>";
    } else {
        favoritos.forEach(uni => {

            const nombreCodificado = encodeURIComponent(uni.name);
            
            contenidoHTML += `
            <div class="c-lista-universidad">
                <p onclick="Detalle('${nombreCodificado}')" style="cursor:pointer;">${uni.name}</p>
                <a href="${uni.url}" target="_blank">${uni.url}</a>
                <button onclick="toggleFavorito('${nombreCodificado}', '${uni.url}')">
                    🗑️ Eliminar
                </button>
            </div>`;
        });
    }
    
    root.innerHTML = contenidoHTML;
}