import React from 'react'

const Card = ({ recipe }) => {
    return recipe.map((recipe,i) => (
        <div className="recipe-card" key={i}>
            <img src={recipe.recipe.image} loading="lazy" alt="food-img" />
            <h3>{recipe.recipe.label}</h3>
            <div className="btn">
                <button>ingredient</button>
                <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">more details</a>
            </div>
        </div>
    ))
}

export default Card