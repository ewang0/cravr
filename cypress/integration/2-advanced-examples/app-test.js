

describe('Main page', () => {

  before(() => {
   
    cy.visit('http://localhost:3000')
  })

  it('should display main page', () => {
    cy.get('nav').contains('Cravr')
  })

  it('should search for recipes by filtering', () => {
    cy.intercept('GET', 'https://api.spoonacular.com/recipes/complexSearch?cuisine=american&intolerances=seafood,sesame&diet=gluten_free&type=breakfast&apiKey=dde7a1678dfc4f46b6d031e5944114cf', {
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
    .get('.card-container').contains("Classic Eggs Benedict")
  })

  it('should click on a result', () => {
    cy.intercept('GET', 'https://api.spoonacular.com/recipes/655239/information?&apiKey=dde7a1678dfc4f46b6d031e5944114cf', {
      "id": 655239,
      "title": "Peanut Butter Banana French Toast",
      "image": "https://spoonacular.com/recipeImages/655239-556x370.jpg",
      "dishTypes": ["morning meal", "brunch", "breakfast"],
      "diets": ["dairy free", "lacto ovo vegetarian"],
      "cuisines": ["American"],
      "summary": "The recipe Peanut Butter Banana French Toast could satisfy your American craving in around <b>around 45 minutes</b>. For <b>88 cents per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains about <b>21g of protein</b>, <b>23g of fat</b>, and a total of <b>534 calories</b>. This recipe serves 1. A mixture of bread, ground cinnamon, orange juice, and a handful of other ingredients are all it takes to make this recipe so yummy. 2 people have tried and liked this recipe. It is brought to you by Foodista. It is a good option if you're following a <b>dairy free and lacto ovo vegetarian</b> diet. It works well as a breakfast. All things considered, we decided this recipe <b>deserves a spoonacular score of 63%</b>. This score is good. "
    })
    .get('.see-details').first().click()
  })

  // it('should check if details are displayed for that dish', () => {
  //   cy.intercept('GET', 'https://api.spoonacular.com/recipes/655239/information?&apiKey=dde7a1678dfc4f46b6d031e5944114cf', {
  //     "id": 655239,
  //     "title": "Peanut Butter Banana French Toast",
  //     "image": "https://spoonacular.com/recipeImages/655239-556x370.jpg",
  //     "dishTypes": ["morning meal", "brunch", "breakfast"],
  //     "diets": ["dairy free", "lacto ovo vegetarian"],
  //     "cuisines": ["American"],
  //     "summary": "The recipe Peanut Butter Banana French Toast could satisfy your American craving in around <b>around 45 minutes</b>. For <b>88 cents per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains about <b>21g of protein</b>, <b>23g of fat</b>, and a total of <b>534 calories</b>. This recipe serves 1. A mixture of bread, ground cinnamon, orange juice, and a handful of other ingredients are all it takes to make this recipe so yummy. 2 people have tried and liked this recipe. It is brought to you by Foodista. It is a good option if you're following a <b>dairy free and lacto ovo vegetarian</b> diet. It works well as a breakfast. All things considered, we decided this recipe <b>deserves a spoonacular score of 63%</b>. This score is good. "
  //     })
  //  .get('h2').contains("Peanut Butter Banana French Toast")
  //  .get('p').contains("The recipe Peanut Butter Banana French Toast could satisfy your American craving in around around 45 minutes.")
  // })

  it.skip('should return ')

})

