let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("comunica");
        habilidades[4].classList.add("teamwork");
        habilidades[5].classList.add("crea");
        habilidades[6].classList.add("dedicacion");
        habilidades[7].classList.add("proyect");
    }
}


function seleccionar(){
// OCULTO EL MENU UNA VEZ QUE SELECCIONO UNA OPCION
document.getElementById("nav").classList = "";
menuVisible = false;
};
