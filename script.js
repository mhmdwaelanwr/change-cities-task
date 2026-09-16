var e = React.createElement;

var cityData = [
  {
    id: 1,
    name: "Cairo",
    country: "Egypt",
    image: "https://flagcdn.com/w640/eg.png",
    text: "Cairo is the capital of Egypt and one of the largest cities in Africa."
  },
  {
    id: 2,
    name: "Palestine",
    country: "Palestine",
    image: "https://flagcdn.com/w640/ps.png",
    text: "Palestine is known for its old cities, culture and history."
  },
  {
    id: 3,
    name: "Emirates",
    country: "United Arab Emirates",
    image: "https://flagcdn.com/w640/ae.png",
    text: "The United Arab Emirates is known for modern cities and tourism."
  }
];

function App() {
  var citiesState = React.useState(cityData);
  var cities = citiesState[0];
  var setCities = citiesState[1];

  var activeState = React.useState(cityData[0]);
  var activeCity = activeState[0];
  var setActiveCity = activeState[1];

  function changeCity(city) {
    setActiveCity(city);
  }

  function removeCity() {
    if (activeCity == null) {
      return;
    }

    var newCities = cities.filter(function (city) {
      return city.id !== activeCity.id;
    });

    setCities(newCities);

    if (newCities.length > 0) {
      setActiveCity(newCities[0]);
    } else {
      setActiveCity(null);
    }
  }

  var cityButtons = cities.map(function (city) {
    return e(
      "button",
      {
        key: city.id,
        onClick: function () {
          changeCity(city);
        }
      },
      city.name
    );
  });

  cityButtons.push(
    e(
      "button",
      {
        key: "remove",
        className: "removeButton",
        onClick: removeCity
      },
      "Remove City"
    )
  );

  var cityBox;

  if (activeCity != null) {
    cityBox = e(
      "div",
      { className: "card" },
      e("h1", null, activeCity.country),
      e("p", null, activeCity.text),
      e("img", {
        className: "flag",
        src: activeCity.image,
        alt: activeCity.country + " flag"
      })
    );
  } else {
    cityBox = e(
      "div",
      { className: "card" },
      e("h2", null, "No cities left")
    );
  }

  return e(
    "div",
    { className: "container" },
    e("h2", null, "Change Cities"),
    e("div", { className: "buttons" }, cityButtons),
    cityBox,
    e("p", { className: "footer" }, "By Mohamed Anwar")
  );
}

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e(App));
