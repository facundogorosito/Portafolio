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
<<<<<<< HEAD

=======
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
>>>>>>> 8651486a5f95b326d2139e4036d69c91b404b295
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
<<<<<<< HEAD
        habilidades[1].classList.add("htmlcss");
=======
        habilidades[1].classList.add("htmlycss");
>>>>>>> 8651486a5f95b326d2139e4036d69c91b404b295
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("comunica");
        habilidades[4].classList.add("teamwork");
        habilidades[5].classList.add("crea");
        habilidades[6].classList.add("dedicacion");
<<<<<<< HEAD
        habilidades[7].classList.add("proyect");
    }
}


function seleccionar(){
// OCULTO EL MENU UNA VEZ QUE SELECCIONO UNA OPCION
document.getElementById("nav").classList = "";
menuVisible = false;
};
=======
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("proyect");
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
>>>>>>> 8651486a5f95b326d2139e4036d69c91b404b295
