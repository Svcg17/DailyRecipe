import React from 'react';

import styles from '../WeeklySelection.module.scss';

const RenderRecipes = ({ history, recipes, setRecipes }) => {
    console.log('render recipes', recipes);
    return (
        <div className={styles.renderRecipes}>
            {
                recipes ? recipes.map((recipe, index) => (
                    <div>
                        <input type="checkbox" id={`${recipe} ${index}`} name={`${recipe} ${index}`} value={recipe.title} />
                        <label for={`${recipe} ${index}`}>{recipe.title}</label>
                    </div>
                )) : null
            }
        </div>
    );
};

export default RenderRecipes;
