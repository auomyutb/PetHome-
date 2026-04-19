import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DonationForm = ({ addDonation }) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    amount: '',
    note: '',
    transferImage: null
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    if (e.target.name === 'transferImage') {
      setForm({ ...form, transferImage: e.target.files[0] })
    } else {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append('fullName', form.fullName)
    formData.append('email', form.email)
    formData.append('amount', form.amount)
    formData.append('note', form.note)
    formData.append('transferImage', form.transferImage)

    const success = await addDonation(formData)

    if (success) {
      navigate('/thank-you')
    } else {
      alert('There was a problem sending your donation form.')
    }

    setLoading(false)
  }

  return (
    <div className='donation-box'>
      <h2>Support Our Rescue Work</h2>
      <p className='iban-box'>
        Benefit IBAN: <strong>BH00 ABCD 0000 0000 0000 0000</strong>
      </p>

      <form onSubmit={handleSubmit} className='donation-form'>
        <input
          type='text'
          name='fullName'
          placeholder='Full Name'
          value={form.fullName}
          onChange={handleChange}
          required
        />

        <input
          type='email'
          name='email'
          placeholder='Email'
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type='number'
          name='amount'
          placeholder='Donation Amount'
          value={form.amount}
          onChange={handleChange}
          required
        />

        <textarea
          name='note'
          placeholder='Optional note'
          value={form.note}
          onChange={handleChange}
        ></textarea>

        <label className='upload-label'>Upload transfer image</label>
        <input
          type='file'
          name='transferImage'
          accept='image/*'
          onChange={handleChange}
          required
        />

        <button type='submit' className='main-btn'>
          {loading ? 'Sending...' : 'Send Donation'}
        </button>
      </form>
    </div>
  )
}

export default DonationForm
