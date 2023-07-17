"use strict";

var  PasajeroController = require("../controllers/pasajero-controller.js"),
  express = require("express"),
  router = express.Router();

router

  .get("/pasajero/getall", PasajeroController.getAll)
  .post("/pasajero/getone/:codigo_pasajero", PasajeroController.getOne)
  .post("/pasajero/insert", PasajeroController.post)
  .put("/pasajero/update/:codigo_pasajero", PasajeroController.put)
  .delete("/pasajero/delete/:codigo_pasajero", PasajeroController.delete)
  .use(PasajeroController.error404);

module.exports = router;
