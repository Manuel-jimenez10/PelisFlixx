const app = require("./src/server");
const dbConnect = require("./src/config/dbCon");

const PORT = 3000;

dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log("servidor ejecutandose en el puerto " + PORT);
    });
}).catch((error => {
    console.error("Error en la conexión de la base de datos: ", error);
}));


