document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContacto");

    form.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById("txtNombre").value.trim();
        const email = document.getElementById("txtEmail").value.trim();
        const destino = document.getElementById("cbDestino").value;
        const mensaje = document.getElementById("txtMensaje").value.trim();
        const terminos = document.getElementById("chkTerminos").checked;

        let formularioValido = true;

        if (nombre.length < 3) {
            document.getElementById("errorNombre").classList.remove("d-none");
            formularioValido = false;
        } else {
            document.getElementById("errorNombre").classList.add("d-none");
        }

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            document.getElementById("errorEmail").classList.remove("d-none");
            formularioValido = false;
        } else {
            document.getElementById("errorEmail").classList.add("d-none");
        }

        if (destino === "") {
            document.getElementById("errorDestino").classList.remove("d-none");
            formularioValido = false;
        } else {
            document.getElementById("errorDestino").classList.add("d-none");
        }

        if (mensaje.length < 20) {
            document.getElementById("errorMensaje").classList.remove("d-none");
            formularioValido = false;
        } else {
            document.getElementById("errorMensaje").classList.add("d-none");
        }

        if (!terminos) {
            document.getElementById("errorTerminos").classList.remove("d-none");
            formularioValido = false;
        } else {
            document.getElementById("errorTerminos").classList.add("d-none");
        }

        if (formularioValido) {
            const mensajeExito = document.getElementById("mensajeExito");
            mensajeExito.classList.remove("d-none");
            form.reset();
            setTimeout(() => {
                mensajeExito.classList.add("d-none");
            }, 5000);
        }
    });
});