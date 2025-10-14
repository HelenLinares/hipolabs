
let universidades = [];
let paisesDisponibles = ["chile", "argentina", "colombia", "mexico", "brazil", "canada"]; 

const JSON_FILES = {
    
    "chile": "./json/chile.json",
    "argentina": "./json/argentina.json",
    "colombia": "./json/colombia.json",
    "mexico": "./json/mexico.json",
    "brazil": "./json/brazil.json",
    "canada": "./json/canada.json", 
};

// Conexión para obtener la lista de Universidades del archivo local
async function conexionLista(pais) {
    const filePath = JSON_FILES[pais.toLowerCase()];

    if (!filePath) {
        console.error("No hay archivo JSON local para el país:", pais);
        return [];
    }
    
    try {
       
        const res = await fetch(filePath); 
        
        if (!res.ok) {
            throw new Error(`Error ${res.status}: Archivo no encontrado en ${filePath}. Revisa la ruta.`);
        }
        
        const data = await res.json();
        return data; 
        
    } catch (error) {
        console.error(`Error al cargar datos JSON para ${pais}:`, error);
        return [];
    }
}

// Función General 
async function General() {
    if (universidades.length === 0) {
        // Cargar Chile por defecto
        universidades = await conexionLista("chile");
    }
    Home(); 
}

// Función para filtrar por país
async function FiltroConexion(pais) {
    const listaContenedor = document.getElementById("la-lista");
    if (listaContenedor) {
        listaContenedor.innerHTML = "Cargando universidades...";
    }
    
    
    universidades = await conexionLista(pais);
   
    const listaHTML = generarLista(universidades);
    if (listaContenedor) {
        listaContenedor.innerHTML = listaHTML;
    }
}