import { Link } from "react-router-dom"
import heroImg from "../assets/hero.jpg"

const Hero = ({ user }) => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="hero-overlay">
        <h1>Adopt, Rescue, Love</h1>
        <p>
          pet Home helps cats and dogs find caring families and gives people a
          simple way to support rescue animals.
        </p>

        {user ? (
          <div className="hero-buttons">
            <Link to="/dogs" className="main-btn">
              Meet Dogs
            </Link>
            <Link to="/cats" className="secondary-btn">
              Meet Cats
            </Link>
            <Link to="/donate" className="main-btn">
              Support Us
            </Link>
          </div>
        ) : (
          <div className="hero-signin-box">
            <p className="hero-signin-text">
              Sign in first to unlock the website options
            </p>

            <div className="hero-buttons">
              <Link to="/sign-in" className="main-btn">
                Sign In
              </Link>
              <Link to="/sign-up" className="secondary-btn">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
