import { Router } from 'express';
import { postRecipe, getAllRecipes, getRecipe, putRecipe, deleteRecipe } from '../controllers/MenuController';
import { postPlan, getPlans, putPlan, getRecipesFromDietAndServings, deletePlan, getPlanMenu, storeMenu } from '../controllers/PricingController';
import { postDiet, getAllDiet, putDiet, deleteDiet } from '../controllers/DietController';
import {
  registerUser, login,
  logout, verifyToken, registerAdmin, adminLogin,
} from '../controllers/AuthController';
import {
  getProfile, getUserPlan,
  choosePlan, getPlanInstance, setDeliveryInfo,
  getSelectedRecipes, selectRecipe,
} from '../controllers/UserController';

const router = Router();

// home route
// router.get('/', (req, res) => res.json({ message: 'This is Daily Recipe!!!' }));

// auth routes
router.post('/api/auth/adminRegister', registerAdmin);
router.post('/api/auth/register', registerUser);
router.post('/api/auth/adminLogin', adminLogin);
router.post('/api/auth/login', login);
router.get('/api/auth/logout', logout);

// menu routes
router.put('/api/menu/:id', putRecipe);
router.get('/api/menu/:id', getRecipe);
router.delete('/api/menu/:id', deleteRecipe);
router.post('/api/menu', postRecipe);
router.get('/api/menu', getAllRecipes);

// plans route
router.get('/api/plan/:diet/:servings', getRecipesFromDietAndServings);
router.put('/api/plan/menu', storeMenu);
router.put('/api/plan/:id', putPlan);
router.delete('/api/plan/:id', deletePlan);
router.post('/api/plans', postPlan);
router.get('/api/plans', getPlans);

// diet route
router.put('/api/diet/:id', putDiet);
router.delete('/api/diet/:id', deleteDiet);
router.post('/api/diet', postDiet);
router.get('/api/diet', getAllDiet);

// user routes
router.use('/users', verifyToken);
router.get('/users/profile', getProfile);
router.get('/users/plan', getUserPlan);
router.get('/users/planInstance', getPlanInstance);
router.get('/users/recipes', getSelectedRecipes);
router.put('/users/recipes', selectRecipe);
router.post('/users/delivery', setDeliveryInfo);
router.post('/users/plan', choosePlan);

export default router;
