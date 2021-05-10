
var express = require('express');
var router = express.Router();
var DataBaseHandler = require("../config/DataBaseHandler");
var dataBaseHandler = new DataBaseHandler();

var connection = dataBaseHandler.createConnection();

router.get('/', function (req, res, next) {
    connection.query('select *from Usuario;', function (error, result, fields) {
        if (error) throw error;

        if(result[0].length== 0){
            res.status(404).send({
                status : "ERROR",
                message: "No existe usuario en Base de Datos"
            });
        }else{
           /* res.status(202).send({
                status : "SUCCESS",
                message: "User was found",
                data : result
            });*/
            res.json(result);
        }
    });
});

router.post('/post', function (req, res, next) {

    const { IdUsuario,Nombre,Telefono,Correo,Contrasena } = req.body;

    var consulta="insert into Usuario(IdUsuario,Nombre,Telefono,Correo,Contrasena) values (? ,? ,? ,? ,? )";

    connection.query(consulta, [IdUsuario,Nombre,Telefono,Correo,Contrasena],function (error, result, fields) {
        //if (error) throw error;

        if(error){
            res.status(404).send({
                status : "ERROR",
                message: "No se puede Registrar un usuario en Base de Datos -->"+error
            });
        }else{
            res.status(200).json({
                Status:"ok",
                Message:"Se registro un nuevo Usuario."
  
            });
        }
    });
});


router.put('/put', function (req, res, next) {

    const { Telefono,IdUsuario} = req.body;

    var consulta="update Usuario set Telefono = ? where IdUsuario = ? ;";
    //update Usuario set Telefono=49203551 where IdUsuario=6;

    connection.query(consulta, [Telefono,IdUsuario],function (error, result, fields) {
        //if (error) throw error;

        if(error){
            res.status(404).send({
                status : "ERROR",
                message: "No se puede Actualizar un usuario en Base de Datos -->"+error
            });
        }else{
            res.status(200).json({
                Status:"ok",
                Message:"Se actualizo un Usuario."
  
            });
        }
    });
});

router.delete('/delete/:IdUsuario', function (req, res, next) {

    const Id = req.params.IdUsuario;

    var consulta="delete from Usuario where IdUsuario = ? ;";

    connection.query(consulta, Id,function (error, result, fields) {
        //if (error) throw error;

        if(error){
            res.status(404).send({
                status : "ERROR",
                message: "No se puede Eliminar un usuario en Base de Datos -->"+error
            });
        }else{
            res.status(200).json({
                Status:"ok",
                Message:"Se elimino un Usuario."
  
            });
        }
    });
});


module.exports = router;