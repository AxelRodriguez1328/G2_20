'use strict'

var AvionModel = require('../models/avion-models'),
    AvionController = () => {}

    AvionController.getAll = (req, res, netx) => {
      
      AvionModel.getAll((err, rows) => {
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
            title : 'Lista de aviones',
            data : rows
          }

        }

        res.status(200).send(rows.rows)

      }) 

    } 


    AvionController.getOne = (req, res, netx) => {
      let numero_avion = req.body.numero_avion
      console.log(numero_avion)

      AvionModel.getOne(numero_avion, (err, rows) => {
        console.log(err, '---', rows)
        if(err){
          let locals = {
            title : `Error al buscar el registro con el id: ${Avion.numero_avion}`,
            description : "Error de Sintaxis SQL",
            error: err

          }

          res.render('error', locals)

        }
        else{
          let locals = {
            title : 'Editar Avion',
            data : rows
          }
          res.status(200).send(rows.rows)

        }

      }) 

    }
  
   AvionController.post = (req, res,next) => {
      let Avion = {
        numero_avion:req.body.numero_avion,
        tipo_avion: req.body.tipo_avion,
        horas_vuelo: req.body.horas_vuelo,
        capacidad_pasajeros: req.body.capacidad_pasajeros,
        fecha_primer_vuelo: req.body.fecha_primer_vuelo,
        pais_construccion: req.body.pais_construccion,
        cantidad_vuelos: req.body.cantidad_vuelos
      }

      console.log(Avion)

      AvionModel.post(avion, (err) => {
        if(err)
        {
          let locals = {
            title : `Error al salvar el registro con el id: ${Avion.numero_avion}`,
            description : "Error de Sintaxis SQL",
            error : err
          }

          request.status(520).json(err);

        }
        else
        {
          res.send('Avion Ingresado de Forma Correcta')
        }
      })

    }


    AvionController.put = (req, res,next) => {
      let Avion = {
        numero_avion:req.body.numero_avion,
        tipo_avion: req.body.tipo_avion,
        horas_vuelo: req.body.horas_vuelo,
        capacidad_pasajeros: req.body.capacidad_pasajeros,
        fecha_primer_vuelo: req.body.fecha_primer_vuelo,
        pais_construccion: req.body.pais_construccion,
        cantidad_vuelos: req.body.cantidad_vuelos
      }

      console.log(Avion)

      AvionModel.put(Avion, (err) => {
        if(err)
        {
          let locals = {
            title : `Error al buscar el registro con el id: ${Avion.numero_avion}`,
            description : "Error de Sintaxis SQL",
            error : err
          }

          request.status(520).json(err);

        }
        else
        {
          res.send('Avion Actualizado de Forma Correcta')
        }
      })
      
    }



    PasajeroController.delete = (req, res, netx) => {
      let numero_avion= req.body.numero_avion
      console.log(numero_avion)

      AvionModel.delete(numero_avion, (err, rows) =>{
        console.log(err, '---', rows)
          if(err)
          {
            let locals = {
                title : `Error al Buscar el Registro con el id: ${Avion.numero_avion}`,
                description : "Error de Sisntaxis SQL",
                error : err
            }

            res.render('error', locals)

          }
          else
          {
            res.send('Avion  cancelado de Forma Correcta')
          }

        })
           
    }



AvionController.addForm = (req, res, netx) => 
    res.render('add-Avion', { title : 'Agregar Avion' })


AvionController.error404 = (req, res, netx) => {
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

module.exports = AvionController;