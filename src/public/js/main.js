const map = L.map('map-template').setView([51.5050, -0.09],3)

const socket = io();

L.tileLayer('https://a.tile.openstreetmap.de/{z}/{x}/{y}.png ').addTo(map);



map.locate({enableHighAccuracy: true});
map.on('locationfound', e => {
    const coords = [e.latlng.lat, e.latlng.lng];
    const marker = L.marker(coords);
    marker.bindPopup('You are here !');
    map.addLayer(marker);
    socket.emit('coordinates', e.latlng);
    console.log(e);
    
});

socket.on('newUser', (coords) => {
    console.log('New user is connected');
    
    const marker = L.marker([coords.lat + 1, coords.lng + 1]);
    marker.bindPopup('Hello, you are here!');
    map.addLayer(marker);
});