const form = document.getElementById("login");
let listUsuarios = JSON.parse(localStorage.getItem("listUsuarios"));


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValidar = document.getElementById("email").value;
    const passwordValidar = document.getElementById("password").value;
    let usuarioObtenido;

    listUsuarios.forEach(usuario => {

        if (usuario.email === emailValidar) {
            usuarioObtenido = usuario;
        }
    });

    if (usuarioObtenido) {
        if (usuarioObtenido.password === passwordValidar) {
            window.location.href = "/index.html";
        } else {
            alert("La constraseña es incorrecta");
        }
    }else{
        alert("El correo no fue encontrado");
    }

});

function redireccion() {
    window.location.href = "/registrarse.html";

}