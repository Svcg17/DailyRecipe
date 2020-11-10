import React from 'react';

const Ingredient = ({ index, history, ingredientName, image, inBox, meal, setMeal }) => {
    const handleIngredient = e => {
        if(e.currentTarget.value != '') {
            const param = e.currentTarget.id.split(' ')[0];
            let newState = meal;
            console.log(index, meal.ingredients.length);
            if(index < meal.ingredients.length) {
                // update
                newState.ingredients[index][param] = e.currentTarget.value;
                setMeal({...newState});
            } else {
                // insert
                let newObj = {};
                newObj[param] = e.currentTarget.value; 
                newState.ingredients.push(newObj);
                setMeal({...newState});
            }
        }
    };

    return (
        <div className="border">
            <div className="col-md-6">
                <div className="form-group row">
                    <label htmlFor="ingredient" className="col-lg-5 col-form-label">Ingredient</label>
                    <div className="col-lg-7">
                        <input onChange={handleIngredient} name="ingredientName" id={`name ${index}`} className="form-control" type="text" defaultValue={ingredientName} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="image" className="col-lg-5 col-form-label">Image</label>
                    <div className="col-lg-7">
                        <input onChange={handleIngredient} name="image" id={`image ${index}`} className="form-control" type="text" defaultValue={image} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inBox" className="col-lg-5 col-form-label">Is in Box?</label>
                    <div className="col-lg-7">
                        <input onChange={handleIngredient} name="inBox" id={`inBox ${index}`} type="checkbox" className="form-control" checked={inBox} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Ingredient;
