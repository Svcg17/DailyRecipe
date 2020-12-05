import Recipe from '../models/recipe.js';
import Image from '../models/image.js';

/**
 * Middleware function for POST /api/menu
 * Adds new recipe
 */
export async function postRecipe(req, res, next) {
  const newRecipe = new Recipe({ 
    title: req.body.title, 
    ingredients: req.body.ingredients, 
    instructions: req.body.instructions, 
    duration: req.body.duration, 
    diet: req.body.diet, 
    servings: req.body.servings,
    calPerServing: req.body.calPerServing,
    season: req.body.season,
    cuisine: req.body.cuisine,
    nutrition: req.body.nutrition,
    allergens: req.body.allergens,
  });
  await newRecipe.save(err => {
    if(err) return res.status(400).json({ error: err.message });
    return res.status(200).json({ message: 'success' });
  });
};

/**
 * Middleware function for PUT /api/menu/:id
 * Edits specified recipe
 */
export async function putRecipe(req, res) {
  try {
    const updateRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
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

export function deleteRecipe(req, res) {
  Recipe.deleteOne({ _id: req.params.id }, (err) => {
    if(err) return res.status(404).json({ error: 'Recipe not found' });
    res.status(200).json({ message: `successfully deleted recipe ${req.params.id}` });
  });
}

export async function uploadImages(req, res, err) {
  try {
    const newImage = new Image({ path: req.file.path });
    await newImage.save(err => {
      res.status(201).send(req.file.path);
    });
  } catch (err) {
    res.status(500).send({ error: err });
  }
}
