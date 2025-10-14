function buscadorfuncion(sza){
    const listaContenedor = document.getElementById("la-lista");
    if (!listaContenedor) return;

    if(sza.length >= 3){
        // Filtra por nombre de universidad 
        const filtrados = universidades.filter(uni => 
            uni.name.toLowerCase().includes(sza.toLowerCase())
        );
        listaContenedor.innerHTML = generarLista(filtrados);
    } else {
        listaContenedor.innerHTML = generarLista(universidades);
    }
}

function generarLista(arrayUniversidades) {
    if (!arrayUniversidades || arrayUniversidades.length === 0) {
        return "<p>No se encontraron universidades.</p>";
    }
    
    let listaHTML = "";
    for (let i = 0; i < arrayUniversidades.length; i++) {
       
        const nombreCodificado = encodeURIComponent(arrayUniversidades[i].name);
        
        listaHTML += `
        <div class="c-lista-universidad uni-${i}" onclick="Detalle('${nombreCodificado}')">
            <p>${arrayUniversidades[i].name}</p>
            <p class="c-pais">${arrayUniversidades[i].country}</p>
            <p class="c-dominio">${arrayUniversidades[i].domains ? arrayUniversidades[i].domains[0] : ''}</p>
        </div>`;
    }

    return listaHTML;
}

// Función Home 
function Home(){
    var root = document.getElementById("root");
    root.innerHTML = "";

    // Buscador
    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar Universidad...";
    buscador.addEventListener("input", () => {
        buscadorfuncion(buscador.value);
    });

    // Contenedor de Filtro 
    const contenedorFiltro = document.createElement("div");
    contenedorFiltro.classList.add("paises-container");
    
    
    for (let i = 0; i < paisesDisponibles.length; i++) {
        const btn = document.createElement("button");
        const pais = paisesDisponibles[i];
        btn.textContent = pais.charAt(0).toUpperCase() + pais.slice(1);
        
      
        btn.addEventListener("click", () => {
            FiltroConexion(pais);
        });

        contenedorFiltro.appendChild(btn);
    }

    // Contenedor Lista
    const listaHTML = generarLista(universidades);
    var contenedorLista = document.createElement("div");
    contenedorLista.classList.add("c-contenedor-lista");
    contenedorLista.id = "la-lista";
    contenedorLista.innerHTML = listaHTML;

    // Agregar contenedores 
    root.appendChild(buscador);
    root.appendChild(contenedorFiltro);
    root.appendChild(contenedorLista);
}