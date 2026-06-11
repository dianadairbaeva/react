function ProjectCard({ title, description, technology }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Технологии: {technology}</p>
    </div>
  )
}

export default ProjectCard