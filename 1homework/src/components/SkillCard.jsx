function SkillCard({ title, level }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Уровень: {level}</p>
    </div>
  )
}

export default SkillCard