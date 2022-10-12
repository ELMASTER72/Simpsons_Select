const URL = "https://thesimpsonsquoteapi.glitch.me/quotes";
const Api = document.getElementById("btn-card");
const img = document.getElementById("image");
const names = document.getElementById("name");
const phrase = document.getElementById("phrase");

Api.addEventListener("click",getApi);

function getApi() {
    fetch(URL)
    .then(Response => Response.json())
    .then(data => {
        img.setAttribute('src',data[0].image)
        names.textContent = (data[0].character)
        phrase.textContent = (data[0].quote)
    })

    
}

