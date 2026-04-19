import { useEffect, useState } from "react"
import axios from "axios"
import PetCard from "../components/PetCard"

const Cats = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cats")
        setCats(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCats()
  }, [])

  return (
    <section className="page-section">
      <h1>Our Rescue Cats</h1>

      <div className="pets-grid">
        {cats.map((cat) => (
          <PetCard key={cat._id} pet={cat} />
        ))}
      </div>
    </section>
  )
}

export default Cats
