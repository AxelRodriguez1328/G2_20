"use strict"

var conn = require("../config/db-connection"),
PasajeroModel = () => {};

PasajeroModel.getAll = (cb) => conn.query("SELECT * FROM Pasajero", cb);


PasajeroModel.getOne = (codigo_pasajero, cb) => conn.query(
    "SELECT * FROM Pasajero WHERE codigo_pasajero = $1", [codigo_pasajero], cb);

PasajeroModel.post = (data, cb) =>
    conn.query( "call public.sp_pasajero_insert ($1,$2,$3,$4,$5,$6,$7)",
      [
        data.codigo_pasajero,
        data.nombre,
        data.apellido,
        data.fecha_registro,
        data.nacionalidad,
        data.numero_telefonico,
        data.email
      ],
      cb);

PasajeroModel.put = (data, cb) =>
    conn.query( "call public.sp_pasajero_update ($1,$2,$3,$4,$5,$6,$7)",
        [
            data.codigo_pasajero,
            data.nombre,
            data.apellido,
            data.fecha_registro,
            data.nacionalidad,
            data.numero_telefonico,
            data.email
        ],
        cb);



PasajeroModel.delete = (codigo_pasajero, cb) => 
    conn.query( "call public.sp_pasajero_delete ($1)", [codigo_pasajero], cb);


module.exports = PasajeroModel;