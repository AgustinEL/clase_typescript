function getData() {
    var name =(<HTMLInputElement> document.getElementById("nombre")).value;
    var age = (<HTMLInputElement>document.getElementById("edad")).value;

    try {
        // código...
        if (document.body.children.namedItem("aviso") != null)
            document.body.removeChild(document.getElementById("aviso"));
    } catch (err) {

        // manipulación de error
        console.log("no hubo error anteriormente");
    }
    
    //document.body.removeChild(document.getElementById("aviso"));
    if (name == "") {
        document.getElementById("nombre").focus;
        let mensaje = document.createElement('h1');
        mensaje.textContent = "completa el nombre, por favor";
        mensaje.setAttribute("id", "aviso");

        document.body.appendChild(mensaje);
    }

    if (age == "") {
        document.getElementById("edad").focus;
        let mensaje = document.createElement('h1');
        mensaje.textContent = "completa la edad, por favor";
        mensaje.setAttribute("id", "aviso");
        document.body.appendChild(mensaje);
    }

    console.log(name + " " + age);
}