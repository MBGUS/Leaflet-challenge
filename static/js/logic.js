// Create the base map
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });

// Add the light layer tile 
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
maxZoom: 18,
id: "mapbox.light",
accessToken: API_KEY
}).addTo(myMap);

// Fet the url for the earthquake data
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// Define a function to determine size of marker reflecting the magnitude of the earthquake.
function markerSize(mag) {
    return (magn + 1) * 2.5 ;
}

// Define a function to determine colors reflecting the magnitude of the earthquake.
function getColor(mag) {
    if (mag > 5) {
        return "Purple";
    }
    if (mag >  4) {
        return "FireBrick";
    }
    if (mag > 3) {
        return "OrangeRed"
    }
    if (mag > 2) {
        return "Salmon";
    }
    if (mag > 1) {
        return "Yellow";
    }
    return "LightGreen";
};

// Creates a function for markers
function createCircleMarker(feature,latlng) {

    var makerOptions = {
        radius: markerSize(feature.properties.mag),
        fillColor: getColor(feature.properties.mag),
        color: "black",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    }
    return.L.circleMaker(latlng,makerOptions);
};

// Use json request to fetch the data from the URL
d3.json(queryUrl,function(data){
    console.log(data)

    var earthquakes = data.features
    console.log(earthquakes)

    // Loop through the data to create Mrkers and Popup
    earthquakes.forEach(function(result){
        L.geoJson(result,{
            pointToLayer: createCircleMarker

            // Add the popups
        }).bindPopup("Date: " + new Date(resutl.properties.time) + "<br> Place: " + result.properties.plac + "<br> Magnitude: " + 
        resutl.properties.mag).addTo(myMap)
    });

        // Create Legends
        var legend: L.control({position: "bottomright"});
        legend.onAdd = function() {
            var div: L.DomUtil.create ("div", "info legend"),
            grades = [0,1,2,3,4,5]
            labels = [],

        // Loop and generate labels
        for (var i=0; i < grades.length; i++) {
            div.innerHTML += "<i style= "background:"+ getColors(grades[i]) + " "></i> " +
            grades[i] + (grades[i+1] ? "&ndash;" + grades[i+1] + "<br>" : "+");
        }
        return div;
    };
    legend.addTo(myMap);
});

