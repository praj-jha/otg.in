import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { FinancialModels } from './pages/FinancialModels'
import Valuations from './pages/Valuations'
import PitchDecks from './pages/PitchDecks'
import RaiseStrategy from './pages/RaiseStrategy'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/financial-models" element={<FinancialModels />} />
          <Route path="/valuations" element={<Valuations />} />
          <Route path="/pitch-decks" element={<PitchDecks />} />
          <Route path="/raise-strategy" element={<RaiseStrategy />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
