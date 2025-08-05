import { useState } from 'react'
import ServiceCards from './components/ServiceCards'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bass Pro Services</h1>
        <p>Your premier destination for marine and boating services</p>
      </header>
      <main>
        <ServiceCards />
      </main>
    </div>
  )
}

export default App
