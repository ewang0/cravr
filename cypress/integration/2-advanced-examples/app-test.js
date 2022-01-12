

describe('Main page', () => {

  before(() => {
   
    cy.visit('http://localhost:3000')
  })

  it('should display main page', () => {
    cy.get('nav').contains('Cravr')
  })

  it('should search for recipes by filtering', () => {
    cy.intercept('GET', 'https://api.spoonacular.com/recipes/complexSearch?cuisine=american&intolerances=seafood,sesame&diet=gluten_free&type=&apiKey=b4cbcd2b1598415891d142caedb69ce6', {
      results:[
        {
          "id": 715594,
          "title": "Homemade Garlic and Basil French Fries",
          "image": "https://spoonacular.com/recipeImages/715594-312x231.jpg"
        },
        {
          "id": 715424,
          "title": "The Best Chili",
          "image": "https://spoonacular.com/recipeImages/715424-312x231.jpg"
        },
        {
          "id": 642540,
          "title": "Falafel Burgers",
          "image": "https://spoonacular.com/recipeImages/642540-312x231.jpg"
        }
      ]
    })
    
    cy.get('#american').check()
    .get('#gluten_free').check()
    .get('#seafood').check()
    .get('#sesame').check()
    .get('.submit-button').click()
  })

  it('should check if search results are displayed correctly', () => {
    cy.get('.card-container').contains("Homemade Garlic and Basil French Fries")
    .get('.card-container').contains("The Best Chili")
    .get('.card-container').contains("Falafel Burgers")
  })

  it('should click on a result', () => {
    cy.intercept('GET', 'https://api.spoonacular.com/recipes/715594/information?&apiKey=b4cbcd2b1598415891d142caedb69ce6', {
      "id": 715594,
      "cuisines": [],
      "title": "Homemade Garlic and Basil French Fries",
      "image": "https://spoonacular.com/recipeImages/715594-556x370.jpg",
      "dishTypes": ["lunch", "main course", "main dish", "dinner"],
      "diets": ["dairy free", "lacto ovo vegetarian", "vegan"],
      "summary": "The recipe Homemade Garlic and Basil French Fries is ready <b>in roughly 45 minutes</b> and is definitely a super <b>vegan</b> option for lovers of American food. One serving contains <b>596 calories</b>, <b>18g of protein</b>, and <b>15g of fat</b>. For <b>83 cents per serving</b>, you get a side dish that serves 2. Several people made this recipe, and 1669 would say it hit the spot. If you have garlic salt, flour, garlic powder, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is outstanding. "
    })
    .get('.arrow-img').first().click()
  })

  it('should check if details are displayed for that dish', () => {
    cy.get('h2').contains("Homemade Garlic and Basil French Fries")
    .get('p').contains("The recipe Homemade Garlic and Basil French Fries is ready in roughly 45 minutes and is definitely a super vegan option for lovers of American food.")
  })

  it('should return back to search results', () => {
    cy.get('.left-arrow-icon').click()
  })

})

