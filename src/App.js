import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './Components/Banner/Banner'
import Contact from './Components/Contact/Contact'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import Spinner from './Components/Spinner/Spinner'

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className="App">
      {loading ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        <div>
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default App
