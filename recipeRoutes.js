const express = require('express');
const router = express.Router();
const {createRecipe, getAllRecipes, getRecipeById, deleteRecipe, updateRecipe} = require('./recipeController');

//CRUD Routes 
router.post('/', createRecipe);
router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);
router.delete('/:id', deleteRecipe);
router.put('/:id', updateRecipe);

module.exports = router;