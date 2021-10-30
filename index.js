const express = require("express");
const bodyParser = require("body-parser");
const server = express();
server.use(bodyParser.json());

// No permite modificar, solo consulta
const empleado={
    "NameE": "Juan",
    "ApeE": "Salazar",
    "ID": "5432"
}

// Let permite modificar variable
let empleado={
    "NameE": "Juan",
    "ApeE": "Salazar",
    "ID": "5432"
}


server.get("/",function(request, response) {
    response.send("Servicio GET Raiz");
})

server.get("/empleado",function(request, response) {
    response.send(empleado);
})

server.get("/empleado/:id",function(request, response) {
    const objNomb1 = request.body.Nomb1;
    const objApe1 = request.body.Ape1;
    const objIdEmp = request.body.IdEmp;
    this.empleado={
        "NameE": objNomb1,
        "ApeE": objApe1,
        "ID": objIdEmp
    }
    const respuesta={
        "status": 200,
        "empleado": this.empleado
    };

    console.log(empleado);
    response.send(empleado);

        //console.log(objId);
    if(request.params.id!==undefined && request.params.id!==null){
        if(empleado.ID===objId){
            response.send(empleado);
        }else{
            response.send("No es el empleado");
        }
    }else{
        response.send("Documento Inválido");
    }
    
})


// Se asigna una petición tipo POST para crear información
server.post("/empleado/",function(request, response) {
    // Asigna el contenido del Body del request y lo asigna a objetos
    const objNomb1 = request.body.Nomb1;
    const objApe1 = request.body.Ape1;
    const objIdEmp = request.body.IdEmp;

    empleado={
        "NameE": objNomb1,
        "ApeE": objApe1,
        "ID": objIdEmp
    }

    // Variable de respuesta
    let respuesta={
        "status": 200,
        "empleado": empleado
    };

    console.log(empleado);
    response.send(empleado);
  
})

// Se asigna una petición tipo PUT para actualizar información
server.put("/empleado/",function(request, response) {
    // Asigna el contenido del Body del request y lo asigna a objetos
    const objNomb1 = request.body.Nomb1;
    const objApe1 = request.body.Ape1;
    const objIdEmp = request.body.IdEmp;
    let respTemp= '';
    if(empleado.IdEmp===objIdEmp){
        empleado={
            "NameE": objNomb1,
            "ApeE": objApe1,
            "ID": objIdEmp
        };
        respTemp="Actualizado";
    }else{
        respTemp="No existe":
    }
    
    // Variable de respuesta
    let respuesta={
        "status": 200,
        "empleado": respTemp
    };

    console.log(empleado);
    response.send(empleado);
  
})

// Se asigna una petición tipo DELETE para ELIMINAR información
server.delete("/empleado/",function(request, response) {
    // Asigna el contenido del Body del request y lo asigna a objetos
    const objIdEmp = request.body.IdEmp;
    let respTemp= '';
    if(empleado.IdEmp===objIdEmp){
        empleado={
            "NameE": '',
            "ApeE": '',
            "ID": ''
        };
        respTemp="Eliminado";
    }else{
        respTemp="No existe":
    }
    
    // Variable de respuesta
    let respuesta={
        "status": 200,
        "empleado": respTemp
    };

    console.log(empleado);
    response.send(empleado);
  
})


server.listen(4000,()=>{
    console.log("Hola Mundo"+4000)
});