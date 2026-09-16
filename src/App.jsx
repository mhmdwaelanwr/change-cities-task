import { useState } from 'react'

const cityData = [
  {
    id: 1,
    buttonName: 'Cairo',
    country: 'Egypt',
    image: 'https://flagcdn.com/w640/eg.png',
    description:
      'Cairo is the capital of Egypt and one of the largest cities in Africa. It is known for its history, culture and famous landmarks.'
  },
  {
    id: 2,
    buttonName: 'Palestine',
    country: 'Palestine',
    image: 'https://flagcdn.com/w640/ps.png',
    description:
      'Palestine is known for its historic cities, rich culture and important heritage across the region.'
  },
  {
    id: 3,
    buttonName: 'Emirates',
    country: 'United Arab Emirates',
    image: 'https://flagcdn.com/w640/ae.png',
    description:
      'The United Arab Emirates is known for modern cities, architecture, tourism and rapid development.'
  }
]

function App() {
  const [cities, setCities] = useState(cityData)
  const [activeCity, setActiveCity] = useState(cityData[0])

  function changeCity(city) {
    setActiveCity(city)
  }

  function removeCity() {
    if (!activeCity) return

    const newCities = cities.filter((city) => city.id !== activeCity.id)
    setCities(newCities)
    setActiveCity(newCities.length > 0 ? newCities[0] : null)
  }

  return (
    <main className="page">
      <section className="app">
        <div className="city-buttons">
          {cities.map((city) => (
            <button
              key={city.id}
              className={activeCity?.id === city.id ? 'city-btn active' : 'city-btn'}
              onClick={() => changeCity(city)}
            >
              {city.buttonName}
            </button>
          ))}

          <button
            className="remove-btn"
            onClick={removeCity}
            disabled={!activeCity}
          >
            Remove City
          </button>
        </div>

        {activeCity ? (
          <div className="city-card">
            <h1>{activeCity.country}</h1>
            <p>{activeCity.description}</p>

            <img
              src={activeCity.image}
              alt={`${activeCity.country} flag`}
              className="flag-image"
            />
          </div>
        ) : (
          <div className="empty-card">
            <h2>No cities left</h2>
            <p>All cities have been removed.</p>
          </div>
        )}

        <p className="footer">By Mohamed Anwar</p>
      </section>
    </main>
  )
}

export default App
