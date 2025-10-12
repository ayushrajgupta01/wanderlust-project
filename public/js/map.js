const map = new maplibregl.Map({
    container: 'map', // container id
    style: `https://api.maptiler.com/maps/streets/style.json?key=${MAPTILER_KEY}`,
 //style url
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 9, // starting zoom
    projection: 'mercator'
});

const popup = new maplibregl.Popup({ closeOnClick: false })
  .setHTML(`<h4>${listing.location}</h4><p>Exact Location after booking</p>`);

new maplibregl.Marker({
    color: "red",
}).setLngLat(listing.geometry.coordinates)
   .setPopup(popup) // attach the popup object
    .addTo(map);


    


