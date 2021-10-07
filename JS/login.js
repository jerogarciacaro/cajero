function login(form){
    if (form.usuario.value=="Pedro") {
        if (form.contra.value=="123") {
            location="principal.html";
        }   else {
            alert("error de password");
        }
    }   else {
        alert("error de usuario");
    }
}


function formula1() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    document.getElementById('C1').value=(Cantidad1+CantidadT);
}
function formula2() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    document.getElementById('C1').value=(Cantidad1-CantidadT);
}