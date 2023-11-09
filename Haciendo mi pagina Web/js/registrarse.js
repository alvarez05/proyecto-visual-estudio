/*   <section class="container section_2">
        <h3 class="section_2-title">Sobre Nosotros</h3>
        <div class="us">
            <div class="us-text">
                <div class="us-paragraph">
                    <p class="paragraph-text">
                        Si deseas consultar mayor informacion sobre nuestro servicios o tiene alguna duda al respecto no dudes ponerte en contacto con nosotros, lo pueden hacer con la siguiente informacion <br>
                        Teléfono: <strong>0457-1023</strong><br>
                         Celular: <strong>300 5664211</strong><br>
                         Email: <strong><a href="mailto: yosnai741@gmail.com" class="email-contacto">yosnai741@gmail.com </a></strong> 
                    </p>
                </div>  
            </div>
            <div class="us-img">
                <div id="contenido-nosotros">
                    <div id="derecha">
                        <form action="#" method="post" class="formcontactos">
                            <input type1="text" name="Nombre" placeholder="Ingresa tu nombre" class="inputcontacto  nombre-mensaje">
                            <br>
                            <input type1="email" name="Correo" placeholder="Ingresa tu correo" class="inputcontacto  email-asunto">
                            <br>
                            <input type1="text" name="Asunto" placeholder="Ingresa el asunto" class="inputcontacto email-asunto">
                            <br>
                            <textarea name="mensaje" id="mensaje" placeholder="Ingrese su mensaje" cols="20" rows="5" class="nombre-mensaje"></textarea>
                            <br>
                            <input type="submit" name="enviar" value="Enviar consulta" class="submitcontacto" >
                        
                        </form>
                    </div> 
               </div> 
            </div>
        </div>
    </section>
*/

    /* 
    
    <div id="contenido-nosotros">
        <div id="izquierda">
            <p class=" descripcion-pagina texto-contacto ">Si deseas consultar mayor informacion sobre nuestro servicios o tiene alguna duda al respecto no dudes ponerte en contacto con nosotros, lo pueden hacer con la siguiente informacion <br>
               Teléfono: <strong>0457-1023</strong><br>
                Celular: <strong>300 5664211</strong><br>
                Email: <strong><a href="mailto: yosnai741@gmail.com" class="email-contacto">yosnai741@gmail.com </a></strong>
                
            </p>
        </div>

        <div id="derecha">
            <form action="#" method="post" class="formcontactos">
                <input type1="text" name="Nombre" placeholder="Ingresa tu nombre" class="inputcontacto  nombre-mensaje">
                <br>
                <input type1="email" name="Correo" placeholder="Ingresa tu correo" class="inputcontacto  email-asunto">
                <br>
                <input type1="text" name="Asunto" placeholder="Ingresa el asunto" class="inputcontacto email-asunto">
                <br>
                <textarea name="mensaje" id="mensaje" placeholder="Ingrese su mensaje" cols="20" rows="5" class="nombre-mensaje"></textarea>
                <br>
                <input type="submit" name="enviar" value="Enviar consulta" class="submitcontacto" >
            
            </form>
        </div> 
   </div> 
*/

/*Para guardar la informacion de registrarse en el localstorage*/
class Usuario{
    constructor(nombre, apellidos, email, password, genero){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
        this.genero = genero;   
    }
}

let listUsuarios = [];
if(JSON.parse(localStorage.getItem("listUsuarios"))){
   
    listUsuarios = JSON.parse(localStorage.getItem("listUsuarios"));
}

const formRegistro = document.getElementById("registro");

formRegistro.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombreNewUser = document.getElementById("name").value;
    const apellidoNewUser = document.getElementById("apellidos").value;
    const emailNewUser = document.getElementById("email").value;
    const passwordNewUser = document.getElementById("pass").value;
    const generoNewUser = document.getElementById("genero").value;

    let newUsuario = new Usuario(nombreNewUser, apellidoNewUser, emailNewUser, passwordNewUser, generoNewUser);

    listUsuarios.push(newUsuario);
    console.log(listUsuarios);

    localStorage.setItem("listUsuarios", JSON.stringify(listUsuarios));

    formRegistro.reset();
    window.location.href = "/login.html";
});

function mostrarUsuarios(){
    console.log(listUsuarios);
}

