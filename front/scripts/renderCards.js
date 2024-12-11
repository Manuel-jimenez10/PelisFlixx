function convert(movie) {
    const { title, year, director, duration, genre, rate, poster } = movie;
    const titulo = document.createElement("h3");
    titulo.classList.add("titulito");
    titulo.textContent = title;
    const año = document.createElement("p");
    año.classList.add("añito");
    año.textContent = year;
    const direct = document.createElement("p");
    direct.classList.add("directorsito");
    direct.textContent = director;
    const duracion = document.createElement("p");
    duracion.classList.add("duracion");
    duracion.textContent = duration;
    const genero = document.createElement("p");
    genero.classList.add("generito");
    genero.textContent = genre;
    const rate1 = document.createElement("p");
    rate1.classList.add("ratesito");
    rate1.textContent = rate;
    const poster1 = document.createElement("img");
    poster1.classList.add("postersito");
    poster1.src = poster
    
    const divAbu = document.createElement("div");
    divAbu.classList.add("flip-card");

    const divPadre = document.createElement("div");
    divPadre.classList.add("flip-card-inner");
    
    const imgCard = document.createElement("div");
    imgCard.classList.add("flip-card-front");
    imgCard?.appendChild(poster1);

    const divcard = document.createElement("div");
    divcard.classList.add("flip-card-back");

   divcard?.appendChild(titulo);
   divcard?.appendChild(año);
   divcard?.appendChild(direct);
   divcard?.appendChild(genero);
   divcard?.appendChild(rate1);
   divcard?.appendChild(duracion);

   divPadre?.appendChild(imgCard);
   divPadre?.appendChild(divcard);
   divAbu?.appendChild(divPadre);

   const section2 = document.getElementById("id-card");
    section2?.appendChild(divAbu);

   return divAbu
}

function peliadd (data) {
    const section1 = document.getElementById("id-card");
    data.forEach(movie => {
        section1?.appendChild(convert (movie));
    });
}


module.exports = {convert, peliadd};