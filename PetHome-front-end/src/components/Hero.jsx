import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-overlay'>
        <h1>Adopt, Rescue, Love</h1>
        <p>
          petHome helps cats and dogs find caring families and gives people a
          simple way to support rescue animals.
        </p>

        <div className='hero-buttons'>
          <Link to='/dogs' className='main-btn'>Meet Dogs</Link>
          <Link to='/cats' className='secondary-btn'>Meet Cats</Link>
          <Link to='/donate' className='main-btn'>Support Us</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
