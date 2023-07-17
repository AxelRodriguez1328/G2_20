'use strict'

var VueloModel = require('../models/vuelo-models'),
    VueloController = () => {}

    VueloController.getAll = (req, res, netx) => {
      
      VueloModel.getAll((err, rows) => {
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
            title : 'Lista de Vuelos',
            data : rows
          }

        }

        res.status(200).send(rows.rows)

      }) 

    } 


    VueloController.getOne = (req, res, netx) => {
      let codigovuelo= req.body.codigovuelo
      console.log(codigovuelo)

      VueloModel.getOne(codigovuelo, (err, rows) => {
        console.log(err, '---', rows)
        if(err){
          let locals = {
            title : `Error al buscar el registro con el id: ${vuelo.codigovuelo}`,
            description : "Error de Sintaxis SQL",
            error: err

          }

          res.render('error', locals)

        }
        else{
          let locals = {
            title : 'Editar Vuelo',
            data : rows
          }
          res.status(200).send(rows.rows)

        }

      }) 

    }
  
   VueloController.post = (req, res,next) => {
      let vuelo = {
        codigovuelo:req.body.codigovuelo,
        ciudadorigen: req.body.ciudadorigen,
        ciudaddestino: req.body.ciudaddestino,
        fechavuelo: req.body.fechavuelo,
        cantidadpasajeros: req.body.cantidadpasajeros,
        tipoavion: req.body.tipoavion,
        distanciakm: req.body.distanciakm
      }

      console.log(vuelo)

      VueloModel.post(vuelo, (err) => {
        if(err)
        {
          let locals = {
            title : `Error al salvar el registro con el id: ${vuelo.codigovuelo}`,
            description : "Error de Sintaxis SQL",
            error : err
          }

          request.status(520).json(err);

        }
        else
        {
          res.send('Vuelo Ingresado de Forma Correcta')
        }
      })

    }


    VueloController.put = (req, res,next) => {
      let vuelo = {
        codigovuelo:req.body.codigovuelo,
        ciudadorigen: req.body.ciudadorigen,
        ciudaddestino: req.body.ciudaddestino,
        fechavuelo: req.body.fechavuelo,
        cantidadpasajeros: req.body.cantidadpasajeros,
        tipoavion: req.body.tipoavion,
        distanciakm: req.body.distanciakm
      }

      console.log(vuelo)

      VueloModel.put(vuelo, (err) => {
        if(err)
        {
          let locals = {
            title : `Error al buscar el registro con el id: ${vuelo.codigovuelo}`,
            description : "Error de Sintaxis SQL",
            error : err
          }

          request.status(520).json(err);

        }
        else
        {
          res.send('Vuelo Actualizado de Forma Correcta')
        }
      })
      
    }



    VueloController.delete = (req, res, netx) => {
      let codigovuelo= req.body.codigovuelo
      console.log(codigovuelo)

      VueloModel.delete(codigovuelo, (err, rows) =>{
        console.log(err, '---', rows)
          if(err)
          {
            let locals = {
                title : `Error al Buscar el Registro con el id: ${vuelo.codigovuelo}`,
                description : "Error de Sisntaxis SQL",
                error : err
            }

            res.render('error', locals)

          }
          else
          {
            res.send('Vuelo Eliminado de Forma Correcta')
          }

        })
           
    }



VueloController.addForm = (req, res, netx) => 
    res.render('add-Vuelo', { title : 'Agregar Vuelo' })


VueloController.error404 = (req, res, netx) => {
    let error = new Error(),
    locals = { 
      title : 'Error 404',
      description : 'Recurso no encontrado...',
      error : error
    }
    error.status = 404
    res.render('error404', locals)

    next()

}

module.exports = VueloController;