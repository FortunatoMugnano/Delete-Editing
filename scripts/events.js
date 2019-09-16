import apiActions from "./api.js"
import render from "./dom.js"
import updateFormFields from "./update.js"

const recipeList = document.querySelector("#recipeList")

/* DELETE BUTTON */

export default {
    registerDeleteListener() {
        recipeList.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteRecipe--")) {
                // Extract recipe id from the button's id attribute
                const recipeToDelete = event.target.id.split("--")[1]

                // Invoke the delete method, then get all recipes and render them
                apiActions.deleteRecipe(recipeToDelete)
                    .then(apiActions.getAllRecipes)
                    .then(render)
            }
        })
    },
    registerEditListener() {
        /* EDIT BUTTON */

        recipeList.addEventListener("click", event => {
            if (event.target.id.startsWith("editRecipe--")) {
                const recipeIdToEdit = event.target.id.split("--")[1]

                /*
                    This function will get the recipe from the API
                    and populate the form fields (see below)
                */
                updateFormFields(recipeIdToEdit)
            }
        })
    },
    
}
saveButton.addEventListener("click", event => {
    const hiddenRecipeId = document.querySelector("#recipeId")

    if (hiddenRecipeId.value = "") {
        editRecipe(recipeId)
    } else {
        // Save functionality goes here
    }
})



