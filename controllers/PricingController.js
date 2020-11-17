import Plan from '../models/plan';
import Recipes from '../models/recipe';

/**
 * Middleware function for POST /api/plans
 * Posts plan
 */
export async function postPlan(req, res) {
  const newPlan = new Plan({ 
    name: req.body.name, 
    diet: req.body.diet, 
    recipesPerWeek: req.body.recipesPerWeek, 
    servings: req.body.servings, 
    pricePerServing: req.body.pricePerServing, 
    description: req.body.description, 
    menu: req.body.menu, 
    isCooked: req.body.isCooked 
  })
  newPlan.save(err => {
    if (err) return res.status(400).json({ error: err.message });
    return res.status(200).json({ message: 'successfully added plan' });
  });
};

export async function putPlan(req, res) {
  try {
    const updatedPlan = await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    await updatedPlan.save();
    res.status(200).send({ updatedPlan: updatedPlan });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

/**
 * Middleware function for GET /api/plans
 * Retrieves all available pricing plans
 */
export function getPlans(req, res) {
  Plan.find({}, (err, plans) => {
    if (err) return res.status(404).json({ error: 'Plans not found' });
    res.status(200).json(plans);
  });
}

/**
 * Middleware function for GET /api/plan/:diet/:servings
 * Retrieves a plan's recipes
 * params:
 *  - diet: id of the diet
 *  - servings: number of servings
 */
export function getRecipesFromDietAndServings(req, res) {
  Recipes.find({ diet: req.params.diet, servings: req.params.servings }, (err, recipes) => {
    if(err) return res.status(404).json({ error: err });
    res.status(200).json(recipes);
  });
}

export function deletePlan(req, res) {
  Plan.deleteOne({ _id: req.params.id  }, err => {
    if(err) return res.status(404).json({ error: 'Plan not found' });
    res.status(200).json({ message: `successfully deleted plan ${req.params.id}` });
  })
}

/**
 * Middleware function for GET /api/plan/menu/:planId
 * Retrieves a plan's menu
 * params:
 *  - planId: id of the plan to get the menu from
 */
export function getPlanMenu(req, res) {
  Plan.findById(req.params.planId).populate('menu').exec((err, plan) => {
    if (err) return res.status(404).json({ error: 'Plans not found' });
    return res.status(200).json(plan.menu);
  });
}

/**
 * Middleware function for PUt /api/plan/menu
 * Updates the menu of all plans
 */
export function storeMenu(req, res) {
  Plan.find({}, (err, plans) => {
    if (err) return res.status(404).json({ error: 'Plans not found' });
    plans.forEach(async (plan) => {
      const recipes = await Recipes.find({ servings: plan.servings, diet: plan.diet });
      if (!recipes) return res.status(404).json({ error: 'Couldn\'t find any recipes for this plan' });
      plan.menu = recipes;
      await plan.save();
    });
    res.status(200).json('Plans now have a menu');
  });
}
