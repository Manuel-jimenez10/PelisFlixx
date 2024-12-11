const mongoose = require("mongoose");

const dbURL = "mongodb+srv://Manuel2804:Manuelito-10@pm-2.c3vdhbw.mongodb.net/movies";

const dbConnect = async () => {
    try {
   await  mongoose.connect(dbURL);
    console.log("Conexion de la base de datos exitosa");
}
         catch (error) {
        throw new Error("Error en la conexion de la base de datos " + error);
}
}

module.exports = dbConnect;