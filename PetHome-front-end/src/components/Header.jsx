import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>petHome</div>

      <nav className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/dogs'>Dogs</Link>
        <Link to='/cats'>Cats</Link>
        <Link to='/team'>Our Team</Link>
        <Link to='/donate' className='donate-btn'>Donate</Link>
      </nav>
    </header>
  )
}

export default Header
