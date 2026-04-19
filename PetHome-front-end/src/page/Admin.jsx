const Admin = ({ donations }) => {
  return (
    <section className="page-section">
      <h1>Admin Donations</h1>

      <div className="admin-grid">
        {donations.map((item) => (
          <div key={item._id} className="admin-card">
            <h3>{item.fullName}</h3>
            <p>
              <strong>Email:</strong> {item.email}
            </p>
            <p>
              <strong>Amount:</strong> {item.amount} BHD
            </p>
            <p>
              <strong>Note:</strong> {item.note}
            </p>

            {item.transferImage && (
              <img
                src={`http://localhost:3000/uploads/${item.transferImage}`}
                alt="transfer"
                className="admin-proof"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Admin
