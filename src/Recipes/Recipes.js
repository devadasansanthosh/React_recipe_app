import React from 'react';
import './Recipes.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className="recipe">
            <h1>{title}</h1>
            <ol>
                {
                    ingredients.map((ingredient,index) => (
                        <li key={index}>
                        {ingredient.text}
                        </li>
                    ))
                }
            </ol>
            <p>calories: {calories}</p>
            <img className="image" src={image} alt=""/>
        </div>
    );
}

export default Recipe;