import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Dogs from './pages/Dogs'
import Cats from './pages/Cats'
import Team from './pages/Team'
import Donate from './pages/Donate'
import ThankYou from './pages/ThankYou'
import Admin from './pages/Admin'

const App = () => {
  const [dogs, setDogs] = useState([])
  const [cats, setCats] = useState([])
  const [donations, setDonations] = useState([])

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/dogs')
        setDogs(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    const fetchCats = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cats')
        setCats(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    const fetchDonations = async () => {
      try {
        const response = await axios.get('http://localhost:3000/donations')
        setDonations(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchDogs()
    fetchCats()
    fetchDonations()
  }, [])

  const addDonation = async (formData) => {
    try {
      await axios.post('http://localhost:3000/donations', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      const response = await axios.get('http://localhost:3000/donations')
      setDonations(response.data)
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  return (
    <div className='app'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dogs' element={<Dogs dogs={dogs} />} />
        <Route path='/cats' element={<Cats cats={cats} />} />
        <Route path='/team' element={<Team />} />
        <Route path='/donate' element={<Donate addDonation={addDonation} />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/admin' element={<Admin donations={donations} />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
