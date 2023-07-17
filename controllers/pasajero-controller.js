'use strict'

var PasajeroModel = require('../models/pasajero-models'),
    PasajeroController = () => {}

    PasajeroController.getAll = (req, res, netx) => {
      
      PasajeroModel.getAll((err, rows) => {
        if (err) 
        {
          let locals ={
            title : 'Error al consultar la base de datos',
            description : 'Error de Sintaxis SQL',
            error : err
          }

          res.render('error', locals)
        }
        else 
        {
          let locals = {
            title : 'Lista de Pasajeros',
            data : rows
          }

        }

        res.status(200).send(rows.rows)

      }) 

    } 


    PasajeroController.getOne = (req, res, netx) => {
      let codigo_pasajero = req.body.codigo_pasajero 
      console.log(codigo_pasajero)

      PasajeroModel.getOne(codigo_pasajero, (err, rows) => {
        console.log(err, '---', rows)
        if(err){
          let locals = {
            title : `Error al buscar el registro con el id: ${pasajero.codigo_pasajero}`,
            description : "Error de Sintaxis SQL",
            error: err

          }

          res.render('error', locals)

        }
        else{
          let locals = {
            title : 'Editar Pasajero',
            data : rows
          }
          res.status(200).send(rows.rows)

        }

      }) 

    }
  
   PasajeroController.post = (req, res,next) => {
      let pasajero = {
        codigo_pasajero :req.body.codigo_pasajero,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fecha_registro: req.body.fecha_registro,
        nacionalidad: req.body.nacionalidad,
        numero_telefonico: req.body.numero_telefonico,
        email: req.body.email
      }

      console.log(pasajero)

      PasajeroModel.post(pasajero, (err) => {
        if(err)
        {
          let locals = {
            title : `Error al salvar el registro con el id: ${pasajero.codigo_pasajero}`,
            description : "Error de Sintaxis SQL",
            error : err
          }

          request.status(520).json(err);

        }
        else
        {
          res.send('Pasajero Ingresado de Forma Correcta')
        }
      })

    }


    PasajeroController.put = (req, res,next) => {
      let pasajero = {
        codigo_pasajero:req.body.codigo_pasajero,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fecha_registro: req.body.fecha_registro,
        nacionalidad: req.body.nacionalidad,
        numero_telefonico: req.body.numero_telefonico,
        email: req.body.email
      }

      console.log(pasajero)

      PasajeroModel.put(pasajero, (err) => {
        if(err)
        {
          let locals = {
            title : `Error al buscar el registro con el id: ${pasajero.codigo_pasajero}`,
            description : "Error de Sintaxis SQL",
            error : err
          }

          request.status(520).json(err);

        }
        else
        {
          res.send('Cliente Actualizado de Forma Correcta')
        }
      })
      
    }



    PasajeroController.delete = (req, res, netx) => {
      let codigo_pasajero= req.body.codigo_pasajero
      console.log(codigo_pasajero)

      PasajeroModel.delete(codigo_pasajero, (err, rows) =>{
        console.log(err, '---', rows)
          if(err)
          {
            let locals = {
                title : `Error al Buscar el Registro con el id: ${pasajero.codigo_pasajero}`,
                description : "Error de Sisntaxis SQL",
                error : err
            }

            res.render('error', locals)

          }
          else
          {
            res.send('Pasajero Eliminado de Forma Correcta')
          }

        })
           
    }



PasajeroController.addForm = (req, res, netx) => 
    res.render('add-pasajero', { title : 'Agregar Pasajero' })


PasajeroController.error404 = (req, res, netx) => {
    let error = new Error(),
    locals = { 
      title : 'Error 404',
      description : 'Recurso no encontrado...',
      error : error
    }
    error.status = 404
    res.render('error404', locals)

    netx()

}

module.exports = PasajeroController;