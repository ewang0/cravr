

describe('Main page', () => {

  before(() => {
    // cy.intercept('GET', 'https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=dd5ac6591f404c4d9a7ea8475237d2d7&cuisine=italian&intolerances=egg&diet=vegetarian', {
    //   "results":[
    //     {
    //       "id": 648190,
    //       "title": "Italian Pasta Salad with organic Arugula",
    //       "image": "https://spoonacular.com/recipeImages/648190-312x231.jpg"
    //     },
    //     {
    //       "id": 649850,
    //       "title": "Lemon-Pepper Fettucine Alfredo",
    //       "image": "https://spoonacular.com/recipeImages/649850-312x231.jpg"
    //     }
    //   ]
    // })

      cy.visit('http://localhost:3000')
     
       

    
  })

  it('should display main page', () => {
     
    cy.get('nav').contains('Cravr')
  })

  it('should search for recipes by filtering', () => {
    cy.intercept('GET', 'https://api.spoonacular.com/recipes/complexSearch?cuisine=american&intolerances=seafood,sesame&diet=gluten_free&type=breakfast&apiKey=dd5ac6591f404c4d9a7ea8475237d2d7', {
      results:[
        {
          "id": 655239,
          "title": "Peanut Butter Banana French Toast",
          "image": "https://spoonacular.com/recipeImages/655239-312x231.jpg"
        },
        {
          "id": 639594,
          "title": "Classic Eggs Benedict",
          "image": "https://spoonacular.com/recipeImages/639594-312x231.jpg"
        },
        {
          "id": 1095748,
          "title": "Vegan French Toast",
          "image": "https://spoonacular.com/recipeImages/1095748-312x231.jpg"
        }
      ]
    })
    
    cy.get('.option-select').select('Breakfast')
    .get('#american').check()
    .get('#gluten_free').check()
    .get('#seafood').check()
    .get('#sesame').check()
    .get('.submit-button').click()
   
  })

  it('should check if search results are displayed correctly', () => {
    
    cy.get('.card-container').contains("Peanut Butter Banana French Toast")
    .get('.card-container').contains("Vegan French Toast")

  })

  it.skip('should click on a result', () => {

  })

  it.skip('should check if details are displayed for that dish', () => {

  })

})

