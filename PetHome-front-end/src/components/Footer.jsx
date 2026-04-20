import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      <h1>petHome</h1>
      <h4 className='footer-text'>CONTACT US</h4>

      <div className='social-icons'>
        <a
          href='https://www.instagram.com/pethome_ga?igsh=c2hlMzFydjVxb3d1&utm_source=qr'
          target='_blank'
          rel='noreferrer'
          className='social-link'
        >
          <FaInstagram />
        </a>

        <a
          href='https://wa.me/97366937709?text=مرحبا. لدي سؤال، هل من أحد للمساعدة؟'
          target='_blank'
          rel='noreferrer'
          className='social-link'
        >
          <FaWhatsapp />
        </a>

        <a
          href='https://www.tiktok.com/@pethome_ga?_r=1&_t=ZS-95hJ2m5tPTG'
          target='_blank'
          rel='noreferrer'
          className='social-link'
        >
          <FaTiktok />
        </a>
      </div>
    </footer>
  )
}

export default Footer
