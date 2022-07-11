import "./App.css";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthlabel, sethealthlabel] = useState("vegetarian");

  const APP_ID = "8a99bf63";
  const APP_KEY = "48c446195f8931988191fdb35b80d712";

  var url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&diet=balanced&health=${healthlabel}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };
  return (
    <div className="app">
      <h1 className="title">FOODIFY</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="app__input"
          placeholder="enter ingredient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
        <select className="app__healthlabels">
          <option onClick={() => sethealthlabel("vegan")}>Vegan</option>
          <option onClick={() => sethealthlabel("vegetarian")}>
            Vegetarian
          </option>
          <option onClick={() => sethealthlabel("dairy-free")}>
            Dairy Free
          </option>
          <option onClick={() => sethealthlabel("egg-free")}>Egg Free</option>
          <option onClick={() => sethealthlabel("pork-free")}>Pork Free</option>
        </select>
      </form>
      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
