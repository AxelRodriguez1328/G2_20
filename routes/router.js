"use strict";

var  PasajeroController = require("../controllers/pasajero-controller.js"),
     VueloController = require("../controllers/vuelo-controller.js"),
     AvionController = require("../controllers/avion-controller.js"),
  express = require("express"),
  router = express.Router();

router
   //*****vuelo*******/
  .get("/vuelo/getall", VueloController.getAll)
  .post("/vuelo/getOne", VueloController.getOne)
  .post("/vuelo/insert", VueloController.post)
  .put("/vuelo/update", VueloController.put)
  .delete("/vuelo/delete", VueloController.delete)
 

   //*****Pasajero******/
  .get("/pasajero/getall", pasajeroController.getAll)
  .post("/Pasajero/getone/:codigo_pasajero", pasajeroController.getOne)
  .post("/pasajero/insert", pasajeroController.post)
  .put("/pasajero/update/:codigo_pasajero", pasajeroController.put)
  .delete("/pasajero/delete/:codigo_pasajero", pasajeroController.delete)
  .use(pasajeroController.error404).use(vueloController.error404);

  router
//*****Avion******/
.get("/Avion/getall", AvionController.getAll)
.post("/Avion/getone/:numero_avion", AvionController.getOne)
.post("/Avion/insert", AvionController.post)
.put("/Avion/update/:numero_avion", AvionController.put)
.delete("/Avion/delete/:numero_avion", AvionController.delete)
.use(PasajeroController.error404).use(VueloController.error404).use(AvionController.error404);

module.exports = router;
