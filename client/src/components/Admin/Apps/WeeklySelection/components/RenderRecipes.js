import React, { useEffect, useState } from "react";

import styles from '../WeeklySelection.module.scss';

const RenderRecipes = ({ 
    history, 
    startDate,
    endDate,
    recipes, 
    setRecipes,
    selectedPlan, 
    setSelectedPlan, 
    recipeStatus, 
    setRecipeStatus,
    weekly,
    setWeekly,
    handleChange
}) => {
    const [localRecipes, setLocalRecipes] = useState(null);
    const [localStatus, setLocalStatus] = useState(new Set());

    useEffect(() => {
        setLocalStatus(x => recipeStatus);
        setLocalRecipes(x => [...recipes]);
    }, []);

    useEffect(() => {
        setLocalRecipes(x => recipes);
    }, [recipes]);

    useEffect(() => {
        console.log(recipeStatus, localStatus);
        setLocalStatus(x => recipeStatus);
    }, [recipeStatus]);

    useEffect(() => console.log('set status', localStatus), [localStatus]);

    const handleClick = e => {
        if (localStatus) {
            let newSet = new Set(localStatus);
            if (localStatus.has(e.currentTarget.value)) {
                newSet.delete(e.currentTarget.value);
                // console.log('click', newSet);
            } else {
                newSet.add(e.currentTarget.value);
            }
            setLocalStatus(x => newSet);
            let newWeekly = weekly;
            let f=false;
            weekly.map(recpes => {
                if (recpes.plan === selectedPlan && recpes.startDate === startDate.toISOString() && recpes.endDate === endDate.toISOString()){
                    recpes.recipes = [...newSet];
                    f=true;
                }
            });
            if (!f) {
                console.log('add to arr');
                console.log(selectedPlan, startDate.toISOString(), endDate.toISOString());
                let newWeeklyPlan = {};
                newWeeklyPlan.recipes = [e.currentTarget.value];
                newWeeklyPlan.plan = selectedPlan;
                newWeeklyPlan.startDate = startDate.toISOString();
                newWeeklyPlan.endDate = endDate.toISOString();                
                newWeekly.push(newWeeklyPlan);
            }
            // weekly.find(x => x.plan === selectedPlan).then(recpes => {
            //     recpes.recipes = newSet;
            // });
            console.log('new weekly', newWeekly);
            setWeekly(x => [...newWeekly]);
            
        }
    }
    return (
        <div className={styles.renderRecipes}>
            {
                localRecipes && localStatus ? localRecipes.map((recipe, index) => (
                    <div key={`recipe ${recipe._id}`}>
                        <input onClick={handleClick} checked={localStatus && localStatus.has(recipe._id) ? true : false} type="checkbox" id={`${recipe} ${index}`} name={`${recipe} ${index}`} value={recipe._id} />
                        <label htmlFor={`${recipe} ${index}`}>{recipe.title}</label>
                    </div>
                )) : null
            }
        </div>
    );
};

export default RenderRecipes;
