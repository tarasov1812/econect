document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([20, 0], 2);  // Set initial view

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Fetch the emissions data from JSON file
    fetch('/data/emissionsData.json')
        .then(response => response.json())
        .then(emissionsData => {
            emissionsData.forEach(function (data) {
                L.marker([data.lat, data.lng]).addTo(map)
                    .bindPopup(`${data.city}: ${data.emissions} tons CO₂`)
                    .openPopup();
            });
        })
        .catch(error => console.error('Error loading data:', error));
});