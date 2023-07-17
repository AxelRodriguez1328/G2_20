"use strict"

var conn = require("../config/db-connection"),
VueloModel = () => {};

VueloModel.getAll = (cb) => conn.query("SELECT * FROM vuelo", cb);


VueloModel.getOne = (codigovuelo, cb) => conn.query(
    "SELECT * FROM vuelo WHERE codigovuelo = $1", [codigovuelo], cb);

VueloModel.post = (data, cb) =>
    conn.query( "call public.sp_vuelo_insert ($1,$2,$3,$4,$5,$6,$7)",
      [
        data.codigovuelo,
        data.ciudadorigen,
        data.ciudaddestino,
        data.fechavuelo,
        data.cantidadpasajeros,
        data.tipoavion,
        data.distanciakm
      ],
      cb);

VueloModel.put = (data, cb) =>
    conn.query( "call public.sp_vuelo_update ($1,$2,$3,$4,$5,$6,$7)",
        [
            data.codigovuelo,
            data.ciudadorigen,
            data.ciudaddestino,
            data.fechavuelo,
            data.cantidadpasajeros,
            data.tipoavion,
            data.distanciakm
        ],
        cb);



VueloModel.delete = (codigovuelo, cb) => 
    conn.query( "call public.sp_vuelo_delete ($1)", [codigovuelo], cb);


module.exports = VueloModel;