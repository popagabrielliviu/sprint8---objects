function myFavoriteRecipe (title, portions, ingredients) {
    const recipe = {
        title : "pizza",
        portions : 3,
        ingredients : ["cheese","sausages","bacon"]
    } ;
    
    return recipe;

}

 let food = myFavoriteRecipe( "pizza", 3 , "cheese" , "sausages" , "bacon" );

console.log(food.title)
console.log(food.portions)
console.log(food.ingredients)