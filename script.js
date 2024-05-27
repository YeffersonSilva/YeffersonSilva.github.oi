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

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

window.addEventListener('scroll', function() {
    var skills = document.getElementById('skills');
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.querySelectorAll('.progreso');
        habilidades.forEach((habilidad) => {
            habilidad.style.width = habilidad.classList.contains('java-spring') ? '90%' :
                                    habilidad.classList.contains('nodejs') ? '85%' :
                                    habilidad.classList.contains('aws') ? '80%' :
                                    habilidad.classList.contains('docker') ? '75%' :
                                    habilidad.classList.contains('databases') ? '70%' : '0';
        });
    }
});
function copiarCorreo() {
    var correo = document.getElementById("correo");
    correo.select();
    correo.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");

    // Opcional: Mostrar una notificación temporal de que el correo fue copiado
    var tooltip = document.createElement("div");
    tooltip.innerHTML = "Correo copiado!";
    tooltip.style.position = "fixed";
    tooltip.style.bottom = "20px";
    tooltip.style.right = "20px";
    tooltip.style.padding = "10px";
    tooltip.style.backgroundColor = "#1CB698";
    tooltip.style.color = "#fff";
    tooltip.style.borderRadius = "5px";
    document.body.appendChild(tooltip);

    setTimeout(function() {
        document.body.removeChild(tooltip);
    }, 2000);
}