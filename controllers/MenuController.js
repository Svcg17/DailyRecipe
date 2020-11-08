import Recipe from '../models/recipe';

/**
 * Middleware function for POST /api/menu
 * Adds new recipe
 */
export async function postRecipe(req, res) {
  const newRecipe = new Recipe({ title: req.body.title, ingredients: req.body.ingredients, instructions: req.body.instructions, duration: req.body.duration, diet: req.body.diet, servings: req.body.servings });
  await newRecipe.save(err => {
    if(err) return res.status(400).json({ error: err.message });
    return res.status(200).json({ message: 'success' });
  });
}

/**
 * Middleware function for PUT /api/menu/:id
 * Edits specified recipe
 */
export async function putRecipe(req, res) {
  try {
    const updateRecipe = await Recipe.findOneAndUpdate(req.params.id, req.body, { new: true });
    await updateRecipe.save();
    res.status(200).send({ updatedRecipe: updateRecipe });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
  
}

/**
 * Middleware function for GET /api/menu
 * Retrieves all recipes in database
 */
export function getAllRecipes(req, res) {
  Recipe.find({}, (err, recipes) => {
    if (err) return res.status(404).json({ error: 'Menu not found' });
    res.status(200).json(recipes);
  });
}

/**
 * Middleware function for GET /api/menu/:id
 * Retrieves the recipe that has its id equal to the one given in
 * the request.
 */
export function getRecipe(req, res) {
  let recipeId = req.params.id;
  if (recipeId[0] === ':') recipeId = recipeId.slice(1);

  Recipe.findById(recipeId, (err, recipe) => {
    if (err || !recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.status(200).json(recipe);
  });
}
