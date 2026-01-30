// Initialisation Leaflet
function initMap() {
  const mapElement = document.getElementById("map");

  if (!mapElement) return;

  // Coordonnées test
  const lat = 48.8566;
  const lng = 2.3522;

  // Carte
  const map = L.map("map").setView([lat, lng], 15);

  // Tuiles OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(map);

  // Marqueur
  const marker = L.marker([lat, lng]).addTo(map);
  marker
    .bindPopup("<b>Boulangerie LB</b><br>Votre boulangerie artisanale")
    .openPopup();
}
