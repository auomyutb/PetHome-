import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import logo from '../assets/pethome-logo.png'

const Home = ({ user }) => {
  return (
    <>
      <Hero user={user} />

      

      {user ? (
        <section className='home-section'>
          <h2>Find Your New Best Friend</h2>
          <p>
            Browse our rescue animals and help us give them a better future.
          </p>

          <div className='home-cards'>
            <div className='info-card'>
              <h3>Adopt a Dog</h3>
              <p>Meet our lovely rescue dogs looking for a forever home.</p>
              <Link to='/dogs' className='secondary-btn'>View Dogs</Link>
            </div>

            <div className='info-card'>
              <h3>Adopt a Cat</h3>
              <p>See our rescue cats and help them find a safe family.</p>
              <Link to='/cats' className='secondary-btn'>View Cats</Link>
            </div>

            <div className='info-card'>
              <h3>Make a Donation</h3>
              <p>Your support helps with food, treatment, and shelter care.</p>
              <Link to='/donate' className='secondary-btn'>Donate Now</Link>
            </div>
          </div>
        </section>
      ) : (
        <section className='home-section'>
          <div className='guest-box'>
            <h2>Welcome to petHome</h2>
            <p>
              Please sign in first to open adoption and donation options.
            </p>

            <div className='guest-buttons'>
              <Link to='/sign-in' className='main-btn'>Sign In</Link>
              <Link to='/sign-up' className='secondary-btn'>Sign Up</Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Home
