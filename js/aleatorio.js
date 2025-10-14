
function obtenerMuestraAleatoria(arr, n) {
    
    if (n >= arr.length) return arr;
    
    // Desordena el array 
    const shuffled = arr.sort(() => 0.5 - Math.random());
    // Selecciona los primeros 'n' elementos
    return shuffled.slice(0, n);
}


async function Aleatorio() {
    const root = document.getElementById("root");
    root.innerHTML = "<h2>Cargando Sorpresas...</h2>"; 

    try {
        
        let todasLasUniversidades = [];
        // lista de países definida 
        for (const pais of paisesDisponibles) {
            
            const unisPorPais = await conexionLista(pais); 
            todasLasUniversidades.push(...unisPorPais);
        }

        // Muestra aleatoria
        const muestraAleatoria = obtenerMuestraAleatoria(todasLasUniversidades, 10);

        let contenidoHTML = "<h2>10 Universidades Aleatorias de Todo el Mundo</h2>";
        
        if (muestraAleatoria.length === 0) {
            contenidoHTML += "<p>No se pudieron cargar universidades. Revisa que tus archivos JSON estén llenos.</p>";
        } else {
            
            contenidoHTML += generarLista(muestraAleatoria);
        }

        root.innerHTML = contenidoHTML;

    } catch (error) {
        console.error("Error al cargar la lista de Aleatorio:", error);
        root.innerHTML = "<h2>Error</h2><p>Hubo un problema al cargar los datos de esta sección.</p>";
    }
}