import React from 'react'

import Footer from './components/layout/Footer/Footer'
import NavBar from './components/layout/NavBar/NavBar'
import CitiesPage from './views/Cities/CitiesPage/CitiesPage'

function App() {
  return (
    <div className="bg-neutral min-h-screen">
      <NavBar />
      <CitiesPage />
      <Footer />
    </div>
  )
}

export default App
