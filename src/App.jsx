import LandingPage from './components/LandingPage/LandingPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Form from './components/Form/Form'
import { useDispatch } from 'react-redux'
import { getAllPokemons, getAllTypes } from './redux/actions/actions'
import { useEffect, useState } from 'react'

function App() {

  const location = useLocation()

  const dispatch = useDispatch()

  const [searchStatus, setSearchStatus] = useState(false)

  useEffect(() => {
      dispatch(getAllPokemons())
      dispatch(getAllTypes())
  }, [])

  return (
    <main>
      {location.pathname !== '/' && <Header />}
      {location.pathname !== '/' && <NavBar setSearchStatus={setSearchStatus} />}

      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home searchStatus={searchStatus} setSearchStatus={setSearchStatus} />} />
        <Route path='/about' element={<About />} />
        <Route path='/form' element={<Form />} />
      </Routes>
      {location.pathname !== '/' && <Footer/>}
    </main>
  )
}

export default App
