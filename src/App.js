import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from './Recipes/Recipes';

const  App = () => {
  const APP_ID = "74d978b8";
  const APP_KEY = "40f356bad7ec4770d075d3c11c9f0877";
  //const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const[recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState('');
  const[query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data =  await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = event => {
    setSearch(event.target.value);
    }

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit" value ={search} onClick={updateSearch}>Search</button>
      </form>
      <div className="recipes">
      {
        recipes.map(recipe => (
          <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}/>
        ))
      }
      </div>
    </div>
  );
}

export default App;
