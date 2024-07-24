let menuVisible = false;

// Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // Oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.querySelectorAll(".progreso");
        habilidades.forEach((habilidad) => {
            let skillClass = habilidad.classList[1]; // Obtén la segunda clase
            switch(skillClass) {
                case 'java-spring':
                    habilidad.style.width = '90%';
                    break;
                case 'nodejs':
                    habilidad.style.width = '85%';
                    break;
                case 'aws':
                    habilidad.style.width = '80%';
                    break;
                case 'docker':
                    habilidad.style.width = '75%';
                    break;
                case 'databases':
                    habilidad.style.width = '70%';
                    break;
                case 'html5':
                    habilidad.style.width = '90%';
                    break;
                case 'css3':
                    habilidad.style.width = '85%';
                    break;
                case 'javascript':
                    habilidad.style.width = '80%';
                    break;
                case 'react':
                    habilidad.style.width = '75%';
                    break;
                case 'angular':
                    habilidad.style.width = '70%';
                    break;
                case 'communication':
                    habilidad.style.width = '85%';
                    break;
                case 'teamwork':
                    habilidad.style.width = '80%';
                    break;
                case 'creativity':
                    habilidad.style.width = '75%';
                    break;
                case 'dedication':
                    habilidad.style.width = '90%';
                    break;
                case 'project-management':
                    habilidad.style.width = '70%';
                    break;
                default:
                    habilidad.style.width = '0';
                    break;
            }
        });
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
};

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

function setLanguage(language) {
    document.querySelectorAll('.translatable').forEach(element => {
        const translation = element.getAttribute(`data-${language}`);
        if (translation) {
            element.textContent = translation;
        }
    });

    // Actualiza los enlaces de navegación
    const navLinks = {
        'en': ['HOME', 'ABOUT ME', 'SKILLS', 'RESUME', 'PORTFOLIO'],
        'es': ['INICIO', 'SOBRE MI', 'HABILIDADES', 'CURRÍCULUM', 'PORTAFOLIO'],
        'pt': ['INÍCIO', 'SOBRE MIM', 'HABILIDADES', 'CURRÍCULO', 'PORTFÓLIO']
    };

    const navItems = document.querySelectorAll('#nav ul li a');
    navItems.forEach((item, index) => {
        item.textContent = navLinks[language][index];
    });
}

var phrases = [
    "Full Stack Developer",
    "AWS Solutions Architect",
    "Custom Solutions Developer"
];

var currentPhraseIndex = 0;
var currentCharacterIndex = 0;
var isDeleting = false;
var rotatingTextElement = document.getElementById("rotating-text");

function typePhrase() {
    var currentPhrase = phrases[currentPhraseIndex];
    if (isDeleting) {
        currentCharacterIndex--;
        rotatingTextElement.textContent = currentPhrase.substring(0, currentCharacterIndex);
        if (currentCharacterIndex == 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }
    } else {
        currentCharacterIndex++;
        rotatingTextElement.textContent = currentPhrase.substring(0, currentCharacterIndex);
        if (currentCharacterIndex == currentPhrase.length) {
            isDeleting = true;
        }
    }
    var speed = isDeleting ? 100 : 200; // Aumenta el tiempo para hacerlo más lento
    setTimeout(typePhrase, speed);
}

typePhrase(); // Inicializa la animación de escritura