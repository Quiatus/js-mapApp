'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
//const mapDiv = document.querySelector('#map')

navigator.geolocation.getCurrentPosition((position) => {
    const {latitude} = position.coords
    const {longitude} = position.coords

    const coords = [latitude, longitude]

    const map = L.map('map').setView(coords, 15);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //L.marker(coords).addTo(map).bindPopup(`Location:<br>Lat: ${latitude}<br>Lon: ${longitude}`).openPopup();

    map.on('click', (mapEvent) => {
        const {lat, lng} = mapEvent.latlng
        L.marker([lat, lng]).addTo(map).bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup'
        })).setPopupContent('Hello').openPopup();
    })

},() => alert('Error while retrieving location! Check if location permission is set to Allow.'))