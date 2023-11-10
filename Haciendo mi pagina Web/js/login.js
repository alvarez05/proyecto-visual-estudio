const form = document.getElementById("login");

let listUsuarios = [];
if(JSON.parse(localStorage.getItem("listUsuarios"))){
   
    listUsuarios = JSON.parse(localStorage.getItem("listUsuarios"));
};

/* lo que hice nuevo, como lo habia hecho el profe */
const admin ={
    user: "admin@gmail.com",
    pass: "1234"
};

formularioLogin.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailValidar = document.getElementById("email").value;
    const passwordValidar = document.getElementById("pass").value;
    let usuarioObtenido;

    if (admin.user === emailValidar && admin.pass === passwordValidar) {
        window.location.href = "administracion.html";
    } else {
        listUsuarios.forEach(usuario => {

            if (usuario.correo === emailValidar) {
                usuarioObtenido = usuario;
            }
        });

        if (usuarioObtenido) {
            if (usuarioObtenido.password === passwordValidar) {
                let login = {
                    logeado: true,
                    nombre: usuarioObtenido.nombre
                };

                localStorage.setItem("login", JSON.stringify(login));
                window.location.href = "index.html";
            } else {
                alert("Contraseña Incorrecta");
            }
        } else {
            alert("Correo no encontrado");
        }
    }

});

function mostrarUsuarios() {
    console.log(listUsuarios);
}


/* esto es lo que yo habia echo  */
form.addEventListener("submit",  (event) => {
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