import { useState } from 'react'

const cities = [
  {
    name: 'Cairo',
    country: 'Egypt',
    icon: '☀️',
    text: 'A busy city full of history, culture and famous landmarks.',
    background: 'linear-gradient(135deg, #f59e0b, #f97316)'
  },
  {
    name: 'Alexandria',
    country: 'Egypt',
    icon: '🌊',
    text: 'A beautiful coastal city on the Mediterranean Sea.',
    background: 'linear-gradient(135deg, #0ea5e9, #2563eb)'
  },
  {
    name: 'Luxor',
    country: 'Egypt',
    icon: '🏛️',
    text: 'Known for ancient temples, monuments and the Nile.',
    background: 'linear-gradient(135deg, #eab308, #ca8a04)'
  },
  {
    name: 'Aswan',
    country: 'Egypt',
    icon: '⛵',
    text: 'A calm southern city famous for the Nile and Nubian culture.',
    background: 'linear-gradient(135deg, #14b8a6, #0f766e)'
  }
]

function App() {
  const [acitveCity, setActiveCity] = useState(0)

  function changeCity(index) {
    setActiveCity(index)
  }

  const city = cities[acitveCity]

  return (
    <main className="page">
      <section className="app">
        <div className="heading">
          <p className="small-title">Explore Egypt</p>
          <h1>Change Cities</h1>
          <p>Click a city to change the card.</p>
        </div>

        <div className="city-card" style={{ background: city.background }}>
          <div className="city-icon">{city.icon}</div>
          <h2>{city.name}</h2>
          <span>{city.country}</span>
          <p>{city.text}</p>
        </div>

        <div className="city-buttons">
          {cities.map((item, index) => (
            <button
              key={item.name}
              className={acitveCity === index ? 'active' : ''}
              onClick={() => changeCity(index)}
            >
              {item.name}
            </button>
          ))}
        </div>

        <p className="footer">By Mohamed Anwar</p>
      </section>
    </main>
  )
}

export default App
