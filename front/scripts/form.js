const axios = require("axios");

const botonForm = () => {


    const form = document.querySelector("form");
    let genre = [];
    
    function handleCheckboxChange(e) {
      if (e.target.checked) {
        genre.push(e.target.value);
      } else {
        genre = genre.filter((item) => item !== e.target.value);
      }
    }
    
    const checkboxes = document.querySelectorAll('input[name="genre"]');
    
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", handleCheckboxChange);
    });
    
    function clearForm() {
      form.reset(); 
      genre = []; 
    }
    
    form.addEventListener("submit", async (event) => {
      console.log("se ejecutó");
      event.preventDefault();
    
      const formData = new FormData(form);
      const data = Object.fromEntries(formData); 
      console.log(data)
      data.genre = genre;
    
    
      try {
        const response = await axios.post("http://localhost:3000/movies", data);
        if (response.status === 201) {
          alert("Movie creada exitosamente");
        }
      } catch (error) {
        alert("Algo salio mal");
      }
    });
    
    const clearButton = document.getElementById("clear-button");
      if (clearButton) {
        clearButton.addEventListener("click", clearForm);
      } else {
        console.error("No se encontró el botón de limpiar.");
      }
   
};

module.exports = botonForm;
