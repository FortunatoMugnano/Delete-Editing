const updateFormFields = recipeId => {

    // Get reference to input fields in the form
    const hiddenRecipeId = document.querySelector("#recipeId")
    const recipeTitleInput = document.querySelector("#recipeTitle")
    const recipeInstructionsInput = document.querySelector("#recipeInstructions")

    fetch(`http://localhost:8088/recipes/${recipeId}`)
        .then(response => response.json())
        .then(recipe => {
            /*
                Now that you KNOW you have the data, render
                an editing form that represents the current
                state of the resource.
            */
            hiddenRecipeId.value = recipe.id // Hidden value. User no see. 🙈
            recipeTitleInput.value = recipe.title
            recipeInstructionsInput.value = recipe.instructions
        })
}



export default updateFormFields
