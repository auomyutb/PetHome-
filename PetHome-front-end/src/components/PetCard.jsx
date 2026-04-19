const PetCard = ({ pet }) => {
  return (
    <div className='pet-card'>
      <img src={pet.image} alt={pet.name} className='pet-img' />
      <div className='pet-info'>
        <h3>{pet.name}</h3>
        <p><strong>Age:</strong> {pet.age}</p>
        <p><strong>Breed:</strong> {pet.breed}</p>
        <p>{pet.description}</p>
      </div>
    </div>
  )
}

export default PetCard
