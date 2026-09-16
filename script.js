var currentCity = "cairo";
var cairoExists = true;
var palestineExists = true;
var emiratesExists = true;

function changeCity(city) {
  currentCity = city;

  if (city == "cairo" && cairoExists == true) {
    document.getElementById("countryName").innerHTML = "Egypt";
    document.getElementById("cityText").innerHTML = "Cairo is the capital of Egypt and one of the largest cities in Africa.";
    document.getElementById("cityImage").src = "https://flagcdn.com/w640/eg.png";
  }

  if (city == "palestine" && palestineExists == true) {
    document.getElementById("countryName").innerHTML = "Palestine";
    document.getElementById("cityText").innerHTML = "Palestine is known for its old cities, culture and history.";
    document.getElementById("cityImage").src = "https://flagcdn.com/w640/ps.png";
  }

  if (city == "emirates" && emiratesExists == true) {
    document.getElementById("countryName").innerHTML = "United Arab Emirates";
    document.getElementById("cityText").innerHTML = "The United Arab Emirates is known for modern cities and tourism.";
    document.getElementById("cityImage").src = "https://flagcdn.com/w640/ae.png";
  }
}

function removeCity() {
  if (currentCity == "cairo") {
    cairoExists = false;
    document.getElementById("cairoButton").disabled = true;
  }

  if (currentCity == "palestine") {
    palestineExists = false;
    document.getElementById("palestineButton").disabled = true;
  }

  if (currentCity == "emirates") {
    emiratesExists = false;
    document.getElementById("emiratesButton").disabled = true;
  }

  if (cairoExists == true) {
    changeCity("cairo");
  } else if (palestineExists == true) {
    changeCity("palestine");
  } else if (emiratesExists == true) {
    changeCity("emirates");
  } else {
    document.getElementById("cityBox").style.display = "none";
    document.getElementById("emptyText").innerHTML = "No cities left";
  }
}
