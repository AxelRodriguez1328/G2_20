"use strict";

var  PasajeroController = require("../controllers/pasajero-controller.js"),
     VueloController = require("../controllers/vuelo-controller.js"),
  express = require("express"),
  router = express.Router();

router
   //*****vuelo*******/
  .get("/vuelo/getall", VueloController.getAll)
  .post("/vuelo/getOne", VueloController.getOne)
  .post("/vuelo/insert", VueloController.post)
  .put("/vuelo/update", VueloController.put)
  .delete("/vuelo/delete", VueloController.delete)
 

   //*****pasajero******/
  .get("/pasajero/getall", PasajeroController.getAll)
  .post("/pasajero/getone/:codigo_pasajero", PasajeroController.getOne)
  .post("/pasajero/insert", PasajeroController.post)
  .put("/pasajero/update/:codigo_pasajero", PasajeroController.put)
  .delete("/pasajero/delete/:codigo_pasajero", PasajeroController.delete)
  .use(PasajeroController.error404).use(VueloController.error404);

module.exports = router;
