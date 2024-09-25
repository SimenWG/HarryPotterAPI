let url = "https://hp-api.onrender.com/api/characters";

function search() {
  let input = document.getElementById("input").value.toLowerCase();

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const container = document.querySelector(".results");
      container.innerHTML = ""; 
      const character = data.find(char => char.name.toLowerCase().includes(input));

      if (character) {
        container.innerHTML += `
          <div class="character">
            <img src="${character.image || 'https://via.placeholder.com/150'}" alt="${character.name}">
            <h2>${character.name}</h2>
            <p><strong>House:</strong> ${character.house || "Unknown"}</p>
            <p><strong>Gender:</strong> ${character.gender || "Unknown"}</p>
            <p><strong>Year of Birth:</strong> ${character.yearOfBirth || "Unknown"}</p>
            <p><strong>Eye Colour:</strong> ${character.eyeColour || "Unknown"}</p>
            <p><strong>Hair Colour:</strong> ${character.hairColour || "Unknown"}</p>
            <p><strong>Patronus:</strong> ${character.patronus || "N/A"}</p>
            <p><strong>Actor:</strong> ${character.actor || "Unknown"}</p>
          </div>`;
      } else {
        container.innerHTML = `<p>No character found</p>`;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      container.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
    });
}

// Lytt til "Enter"-tasten i input-feltet
document.getElementById("input").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    search();  
  }
});