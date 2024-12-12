document.addEventListener("DOMContentLoaded", function () {
    const captchaText = document.getElementById("captcha-text");
    const refreshButton = document.getElementById("refresh-captcha");
    const captchaInput = document.getElementById("captcha-input");
    const form = document.getElementById("registration-form");
    const captchaError = document.getElementById("captcha-error");

    // Función para generar un captcha aleatorio
    function generateCaptcha() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let captcha = "";
        for (let i = 0; i < 6; i++) {
            captcha += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return captcha;
    }

    // Mostrar el captcha al cargar la página
    let currentCaptcha = generateCaptcha();
    captchaText.textContent = currentCaptcha;

    // Actualizar el captcha al hacer clic en el botón
    refreshButton.addEventListener("click", function () {
        currentCaptcha = generateCaptcha();
        captchaText.textContent = currentCaptcha;
        captchaError.textContent = ""; // Limpiar mensaje de error
        captchaInput.value = ""; // Limpiar campo de entrada
    });

    // Validar el captcha antes de enviar el formulario
    form.addEventListener("submit", function (e) {
        if (captchaInput.value !== currentCaptcha) {
            e.preventDefault(); // Evitar el envío del formulario
            captchaError.textContent = "El captcha no coincide. Intenta de nuevo.";
        }
    });
});
