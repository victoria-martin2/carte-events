// votre code JS
var mymap = L.map('mapid').setView([48.8534, 2.3488], 13);

var marker = L.marker([48.8412, 2.3003]).addTo(mymap);
var marker = L.marker([48.9, 2.4]).addTo(mymap);
var marker = L.marker([48.8462486267, 2.34460401535]).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

async function getData() {
    let url = "https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&facet=category&facet=tags&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type"
    let response = await fetch(url)
    let data = await response.json()
    data.records.forEach(function (event) {
        // le titre de l'événement
        let title = event.fields.title
        // la latitude
        let latitude = event.fields.lat_lon[0]
        // la longitude
        let longitude = event.fields.lat_lon[1]
        // on pourrait récupérer d'autres infos..
        // pour tester, on les affiche dans la console
        console.log(title + " " + latitude + " " + longitude)
        // .. mais ce serait mieux de les afficher sur la carte !
    })
}
getData()

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoianVsaWVua29tcCIsImEiOiJjanR1NGFuYjkxMmNvNDBucGI1aXZ4Y285In0.hiSplFD5CODUd9yxRO_qkg',
}).addTo(mymap);


