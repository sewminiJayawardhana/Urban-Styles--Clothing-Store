import React from 'react'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="collection">
          <Collection />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  )
}

export default App
