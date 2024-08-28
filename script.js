// Initialize the map
const map = L.map('map').setView([37.7749, -122.4194], 13); // Default view is San Francisco

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Function to add friends' locations
const addFriendLocation = (name, lat, lng) => {
    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(`<b>${name}</b>`)
        .openPopup();
};

// Example friends' locations
addFriendLocation('Harnek Singh, Sahab, Maheep, Baani Kaur, Jaya Kaur, Harswaroop Kaur, Manshaant Singh, Kabir Singh', 42.6064, -83.1499); // Troy, Michigan
addFriendLocation('Padampat Bhatia', 42.4612, -83.4750); // Novi, Michigan
addFriendLocation('Charan Singh, Amandeep Singh Jhajj', 42.3078, -83.4596); // Canton, Michigan
addFriendLocation('Kabeer Singh', 42.3314, -83.0458); // Detroit, Michigan
addFriendLocation('Neal Singh', 27.9506, -82.4572); // Tampa, Florida
addFriendLocation('Jeevin Singh, Juskaran Singh', 34.0522, -118.2437);   // Los Angeles, California
addFriendLocation('Yashpreet Singh, Manjot Matharu, Harveen Kaur, Harshleen Kaur, Manveer Singh, Mehr Kaur', 41.8781, -87.6298);   // Chicago, Illinois
addFriendLocation('Rasna Kaur', 40.4406, -79.9959);   // Pittsburgh, Pennsylvania
addFriendLocation('Harroop Singh', 29.4241, -98.4936);   // San Antonio, Texas
addFriendLocation('Ravjot Kaur', 39.9242, -83.8084);   // Springfield, Ohio
addFriendLocation('Manpreet Singh, Sargun Kaur, Harleen Kaur', 39.7400, -84.0708);   // Beavercreek, Ohio
addFriendLocation('Sukhmani Kaur', 39.7580, -84.1915);   // Dayton, Ohio
addFriendLocation('Harpreet Kalsi', 39.1031, -84.5120);   // Cincinnati, Ohio
addFriendLocation('Amitoj Kaur', 39.9612, -82.9988);   // Columbus, Ohio
addFriendLocation('Simran Sidhu', 34.2257, -77.9447);   // Wilmington, North Carolina
addFriendLocation('Yuvi Sidhu, Atiyasha Kaur', 35.9940, -78.8986);   // Durham, North Carolina
addFriendLocation('Sukhman Kaur', 42.4895, -83.1446);   // Royal Oak, Michigan
addFriendLocation('Savleen Kaur, Preetsimran Kaur, Serene Kaur', 39.7392, -104.9903);   // Denver, Colorado
addFriendLocation('Mohkm Singh', 37.7799, -121.9780);   // San Ramon, California
addFriendLocation('Japteg Singh', 45.5017, -73.5673);   // Montreal, Canada
addFriendLocation('Goonmeet kaur, Mayher Kaur', 42.3601, -71.0589);   // Boston, Massachusetts
addFriendLocation('Bikram Singh', 32.7767, -96.7970);   // Dallas, Texas
addFriendLocation('Shawn Singh', 29.7604, -95.3698);   // Houston, Texas
addFriendLocation('Agam Singh, Ramneet Singh', 40.7178, -74.0431);   // Jersey City, New Jersey
addFriendLocation('Herman Kaur', 36.1627, -86.7816);   // Nashville, Tennessee
addFriendLocation('Tavleen Kaur, Siffat Kaur, Mallika Kaur', 40.7128, -74.0060);   // New York City, New York
addFriendLocation('Paramveer Singh', 43.0389, -87.9065);   // Milwaukee, Wisconsin
addFriendLocation('Sanpreet Singh', 38.7838, -77.1758);   // Springfield, Virginia
addFriendLocation('Teja Singh, Jujaar Singh', 47.6062, -122.3321);   // Seattle, Washington
addFriendLocation('Keerat Singh', 38.8951, -77.0369);   // Washington, D.C.



// Optionally, add a geocoder for searching locations
L.Control.geocoder().addTo(map);
