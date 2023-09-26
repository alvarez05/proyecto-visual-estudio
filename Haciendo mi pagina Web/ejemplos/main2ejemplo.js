comparacionNumeros(2 , 3)

//Leer dos numeros y comparar si son iguales 
function comparacionNumeros(num1, num2){
    if(num1 === num2){
        console.log(Los numeros ingresados son iguales )
    }

}

function diaSemana(valorDia){

    switch(valorDia){
        case 1:
            console.log("Lunes")
            break;
        case 2:
            console.log("Martes")
            break;
        case 3:
            console.log("Miercoles")
            break;
        
        default
            console.log("Otro dia de la semana")
            break; 
    }
}