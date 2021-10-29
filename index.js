const express = require("express");
const server = express();
const empleado={
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

server.listen(4000,()=>{
    console.log("Hola Mundo"+4000)
});