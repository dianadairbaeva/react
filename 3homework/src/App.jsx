import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes?limit=10")
      .then((response) => {
        setRecipes(response.data.recipes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Recipes App</h1>

      {recipes.map((recipe) => (
        // задание 4
        <div className="card" key={recipe.id}>

        {/* задание 1 */}
          <h2>{recipe.name}</h2>

          <img src={recipe.image} alt={recipe.name} />

          <p><b>Кухня:</b> {recipe.cuisine}</p>

          <p>
            <b>Сложность:</b> {recipe.difficulty}
          </p>

          <p>
            <b>Время готовки:</b> {recipe.cookTimeMinutes} минут
          </p>

          <p>
            <b>Калории:</b> {recipe.caloriesPerServing} ккал
          </p>


          {/* рейтинг и тип блюда */}
          <p>
            <b>Рейтинг:</b> ⭐ {recipe.rating}
          </p>

          <p>
            <b>Тип блюда:</b> {recipe.mealType.join(", ")}
          </p>


          {/* задание 2*/}
          <h3>Ингредиенты:</h3>

          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient}
              </li>
            ))}
          </ul>


          {/* задание 3 */}
          <h3>Инструкция:</h3>

          <ol>
            {recipe.instructions.map((step, index) => (
              <li key={index}>
                {step}
              </li>
            ))}
          </ol>

        </div>
      ))}
    </div>
  );
}

export default App;
