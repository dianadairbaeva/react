function ProfileCard({ name, age, direction, city }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
      <p>Направление: {direction}</p>
      <p>Город: {city}</p>
    </div>
  )
}

export default ProfileCard