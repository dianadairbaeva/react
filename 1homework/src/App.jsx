import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"
import SkillCard from "./components/SkillCard"
import ProjectCard from "./components/ProjectCard"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <>
      <Header />

      <ProfileCard
        name="Диана"
        age="18"
        direction="Frontend разработка"
        city="Алматы"
      />

      <h2>Навыки</h2>

      <SkillCard title="HTML и CSS" level="Продвинутый" />
      <SkillCard title="JavaScript" level="Средний" />
      <SkillCard title="React" level="Начальный" />


      <h2>Проекты</h2>

      <ProjectCard
        title="Сайт-портфолио"
        description="Персональный сайт с информацией обо мне"
        technology="React, CSS"
      />

      <ProjectCard
        title="Интернет-магазин"
        description="Проект магазина с карточками товаров"
        technology="React, JavaScript"
      />

      <ProjectCard
        title="To-do приложение"
        description="Приложение для управления задачами"
        technology="React"
      />

      <Footer />
    </>
  )
}

export default App
