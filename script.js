function procesarDatos() {
    var txtNombre = document.getElementById("txtNombre").value;
    var txtEmail = document.getElementById("txtEmail").value;

    var nombreValido = txtNombre.trim() !== "";
    var emailValido = /\S+@\S+\.\S+/.test(txtEmail);

    if (nombreValido && emailValido) {
        alert("Los datos son válidos.");
    } else {
        alert("Los datos no son válidos. Por favor, revisa tu información.")
    }
}
