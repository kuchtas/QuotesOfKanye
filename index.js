function generate(){

    fetch("https://api.kanye.rest/")
    .then(response => response.json())
    .then(data => document.getElementById("text").textContent = '"' + data.quote + '"')
    .catch(() => alert("Error fetching quotes from the API"));

    const path = document.getElementById("imagePath").src;

    while(document.getElementById("imagePath").src === path){
        document.getElementById("imagePath").src = "./photos/ye" + getRandomInt(1,18) + ".png";
    }
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }