
export interface Recipe {
  id:number
  title:string
  image:string
}


export interface SampleDataProps {
    recipes: Array<Recipe>
}

export interface SubmitSearchProps {
  submitSearch: (event: any, type?: string) => void
}