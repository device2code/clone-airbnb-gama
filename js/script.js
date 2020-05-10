const urlDataApi = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
const elementCard = document.querySelector("#acomodacao");
let places = [];

async function getData() {
   return await fetch(urlDataApi).then(async (data) => await data.json());
}

function renderCardsPlaces(places) {
   elementCard.innerHTML = "";
   places.map(renderAcomodacao);
}

function renderAcomodacao(place) {
   const section = document.createElement("article");
   section.className = "place__details";
   section.innerHTML = `
   <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 8px;"><div class="card" style="width: 21rem;"><img class="card-img-top" src="${place.photo}" alt="${place.name}" style="height: 14rem;">
   <div class="card-body"><h6 class="card-title" id="property_type">${place.property_type}</h6><p class="card-text" id="name"> ${place.name} </p>
   <h6 class="card-title" id="price">R$ ${(place.price)}</h6></div></div></div>`;
   elementCard.appendChild(section);
}

async function main() {
   places = await getData();   
   renderCardsPlaces(places);
}

main();