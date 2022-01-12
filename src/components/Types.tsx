
export interface Recipe {
  id: number
  title: string
  image: string
}

export interface SampleDataProps {
    recipes: Recipe[]
}

export interface DetailsProps {
  aggregateLikes: number
  analyzedInstructions: string[]
  cheap: boolean
  creditsText: string
  cuisines: string[]
  dairyFree: boolean
  diets: string[]
  dishTypes: string[]
  extendedIngredients: {}[]
  gaps: string
  glutenFree: boolean
  healthScore: number
  id: number
  image: string
  imageType: string
  instructions: null
  lowFodmap: boolean
  occasions: string[]
  originalId: null
  pricePerServing: number
  readyInMinutes: number
  servings: number
  sourceName: string
  sourceUrl: string
  spoonacularScore: number
  spoonacularSourceUrl: string
  summary: string
  sustainable: boolean
  title: string
  vegan: boolean
  vegetarian: boolean
  veryHealthy: boolean
  veryPopular: boolean
  weightWatcherSmartPoints: number
  winePairing: {
    pairedWines: string[], 
    pairingText: string, 
    productMatches: string[]
  }
}

export interface FormProps {
  submitSearch: (event: any, type?: string, cuisineTypes?: string[], dietRestrictions?: string[], intolerances?: string[]) => void
  randomSearch: (event: any) => void
}