const botonForm = require("./form");
const { peliadd } = require("./renderCards");
const axios = require("axios");
const form = document.querySelector("form");
const contenedor = document.getElementById("id-card");

const getAxios = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    peliadd(response.data);
    console.log(response.data);
  } catch (error) {
    alert("No se lograron renderizar las peliculas " + error);
  }
};


function indexFn () {
  if (form) {
    botonForm();
  } else if (contenedor) {
    getAxios();
  }
};
indexFn();