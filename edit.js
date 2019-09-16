const editRecipe = id => {
    const updatedObject = {
        title: document.querySelector("#recipeTitle").value,
        instructions: document.querySelector("#recipeInstructions").value
    }

    // Logic for the PUT operation
    fetch(`http://localhost:8088/resource/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedObject)
    })
    .then(res => res.json())
    .then(() => {
        /*
            Since this is the point in the code where you KNOW
            the operation completed successfully, clear the
            value of the hidden input field to that your
            application is back to the state of creating instead
            of editing
        */
        document.querySelector("#recipeId").value = ""
    })

}

export default editRecipe