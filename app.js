document.addEventListener('DOMContentLoaded', function () {
    const buttonsScreen = document.querySelectorAll('.buttonScreen');
    const buttonCirclePictures = document.querySelectorAll('.circleButtom');
    function changeScreenButton(index) {
        buttonCirclePictures.forEach((button) => {
            button.setAttribute('src', 'imagenes/boton inactivo.png');
            button.classList.remove('active');
        });
        let correspondingImage = buttonCirclePictures[index];
        if (correspondingImage) {
            correspondingImage.setAttribute('src', 'imagenes/Boton activo.png');
            correspondingImage.classList.add('active');
        }
    }
    buttonsScreen.forEach(function (button, index) {
        button.addEventListener('click', function () {
            changeScreenButton(index);
        });
    });
});

const textoPredeterminado = document.getElementById('optionScreen').innerHTML.trim();
document.addEventListener('DOMContentLoaded', function () {
    bButton.addEventListener('click', function restaurar() {
        optionScreen.innerHTML = textoPredeterminado; 
        });
});



document.addEventListener('DOMContentLoaded', function (){
const upButton = document.getElementById('scrollUp');
const downButton = document.getElementById('scrollDown');
const aButton = document.getElementById('aButtom');
const bButton = document.getElementById('bButtom');
const help = document.getElementById('helpDiv');
const styleDiv = window.getComputedStyle(help);
const displayType = styleDiv.getPropertyValue('display');
const buttonsScreen = document.querySelectorAll('.buttonScreen');


    aButton.addEventListener('click', ()=> {
        help.style.display = 'block'; 
        let returnMessage = "Mostrando menu de ayuda, Toque el Boton B para salir al Encriptador"
        optionScreen.textContent = returnMessage;
        });

    bButton.addEventListener('click', ()=> {
        help.style.display = 'none'; 
        optionScreen.innerHTML = textoPredeterminado

        });


    downButton.addEventListener('click', ()=> {
    help.scrollTop += 100; 
    });

    upButton.addEventListener('click', ()=> {
        help.scrollTop -= 100; 
        });
    
});

document.addEventListener('DOMContentLoaded', function () {
    const mensajeTextArea = document.getElementById('textInput');
    const encriptarBtn = document.getElementById('cipherButton');
    const desencriptarBtn = document.getElementById('descryptButton');
    const mensajeEncriptadoDiv = document.getElementById('encryptedResult');

    encriptarBtn.addEventListener('click', function () {
        
        const mensajeOriginal = mensajeTextArea.value.toLowerCase();
        if (mensajeOriginal.trim() === '') {
            alert('Por favor, ingrese un texto antes de encriptar.');
            return;
        }
        const mensajeEncriptado = encriptarMensaje(mensajeOriginal);
        mostrarResultadoEncriptado(mensajeEncriptado);

    });
    

    desencriptarBtn.addEventListener('click', function () {
        const mensajeEncriptado = mensajeTextArea.value.toLowerCase();
        if (mensajeEncriptado.trim() === '') {
            alert('Por favor, ingrese un texto antes de desencriptar.');
            return;
        }
        const mensajeOriginal = desencriptarMensaje(mensajeEncriptado);
        mostrarResultadoDesencriptado(mensajeOriginal);
    });

    function encriptarMensaje(mensaje) {
        let mensajeEncriptado = mensaje
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

        return mensajeEncriptado;
    }
    function verificarContenido() {
        let contenido = document.getElementById('textInput').value;
        let reject = /[A-Z123456789áéíóúÁÉÍÓÚüÜ¡¿!@#$%^&*()_+={}\[\]:;<>,.?~\\/-]/g;

        if (reject.test(contenido)) {
            alert('Error: Solo se permiten letras minúsculas y sin acentos');
            return mensajeEncriptadoDiv.innerHTML = 'Ingrese datos validos por favor...';
        }
    }

    document.getElementById('cipherButton').addEventListener('click', verificarContenido);
    function desencriptarMensaje(mensajeEncriptado) {
        let mensajeOriginal = mensajeEncriptado
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

        return mensajeOriginal;
    }

    function mostrarResultadoEncriptado(mensajeEncriptado) {
        mensajeEncriptadoDiv.innerHTML =
            `${mensajeEncriptado} 
        <img id="vaultBoy" src="imagenes/Vault Boy pulgar arriba.webp">`;
        

        const optionScreen = document.getElementById('optionScreen')
        const copiarBtn = document.getElementById('copyButton');
        copiarBtn.addEventListener('click', function () {
            const resultadoEncriptadoTextArea = document.getElementById('encryptedResult');
            const texto = resultadoEncriptadoTextArea.textContent;

            navigator.clipboard.writeText(texto)
                .then(() => {
                    optionScreen.textContent = "Texto copiado al portapapeles, toque B para cerrar este mensaje";
                })
                .catch((err) => {
                    optionScreen.textContent = ('Error al copiar el texto: ', err);
                });

        });
    }

    function mostrarResultadoDesencriptado(originalMessage) {
        const mensajeEncriptadoDiv = document.getElementById('encryptedResult');
        mensajeEncriptadoDiv.innerHTML = `${originalMessage} <img id="vaultBoy" src="imagenes/Vault Boy pulgar arriba.webp">`;

    }
    
        const copiarBtn = document.getElementById('copyButton');
        copiarBtn.addEventListener('click', function () {
            const resultadoEncriptadoTextArea = document.getElementById('encryptedResult');
            const texto = resultadoEncriptadoTextArea.textContent;
            navigator.clipboard.writeText(texto)
                .then(() => {
                    optionScreen.textContent = "Texto copiado al portapapeles, toque B para cerrar este mensaje";
                })
                .catch((err) => {
                    optionScreen.textContent = ('Error al copiar el texto: ', err);
                });
        });


});

