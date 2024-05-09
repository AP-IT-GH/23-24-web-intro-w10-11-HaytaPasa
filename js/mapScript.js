/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

let map = L.map('apMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// bepaal de rechthoek rondom het gebouw van AP

// kleur de rechthoek in met de rode AP-kleur

// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let myIcon = L.icon({
    iconUrl: './assets/coffee-icon-shadow.png',
    iconSize: [68, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

L.marker([51.23009, 4.41616], {icon: myIcon}).addTo(map);