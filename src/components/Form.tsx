import React, { useState } from "react";
import "./Form.css"
import { SubmitSearchProps } from "./Types";



const Form: React.FC<SubmitSearchProps> = ({ submitSearch }) => {

  const [meal, setMeal] = useState('');
  const [cuisineTypes, setCuisineTypes] = useState<string[]>([]);
  const [dietRestrictions, setDietRestrictions] = useState<string[]>([]);
  const [intolerances, setIntolerances] = useState<string[]>([]);
  // const [sliderValue, setSliderValue] => useState<{}>({});

  const handleChange = (event: any) => {
    const sectionID = event.target.parentElement.parentElement.parentElement.id
    console.log(sectionID)
    if (sectionID === "cuisineType") {
      cuisineTypes.includes(event.target.id) ? setCuisineTypes(cuisineTypes.filter(selection => selection !== event.target.id)) : setCuisineTypes([...cuisineTypes, event.target.id]);
    }
    else if (sectionID === "dietRestrictions") {
      dietRestrictions.includes(event.target.id) ? setDietRestrictions(dietRestrictions.filter(selection => selection !== event.target.id)) : setDietRestrictions([...dietRestrictions, event.target.id]);
    }
    else if (sectionID === "intolerances") {
      intolerances.includes(event.target.id) ? setIntolerances(intolerances.filter(selection => selection !== event.target.id)) : setIntolerances([...intolerances, event.target.id]);
    }
  }

  return (
    <section className="form-section">
      <aside className="questionnaire-info">
        <img className="bulb-icon" src="lightbulb.jpg" alt="lightbulb-icon"></img>
        <div className="questionnaire-info-text">
          <h2>Questionnaire</h2>
          <p>First, answer some questions about what you're craving. Feel free to leave these blank to just generate some random foods.</p>
        </div>
      </aside>
      <form className="questions">
        <ul>
          <li className="meal-input">

            <div className="num-circle">
              <p>1</p>
            </div>
            <div className="question-content">
              <p>What kind of meal are you looking for?</p>
              <select className="option-select" value={meal} onChange={event => setMeal(event.target.value)}>
                <option value="--Meal--">--Meal--</option>
                <option value="breakfast">Breakfast</option>
                <option value="main course">Main Course</option>
                <option value="side dish">Side Dish</option>
                <option value="dessert">Dessert</option>
                <option value="appetizer">Appetizer</option>
                <option value="fingerfood">Fingerfood</option>
                <option value="snack">snack</option>
              </select>
            </div>
          </li>
          <li>
            <div className="num-circle">
              <p>2</p>
            </div>
            <div className="question-content">
              <p>What kind of flavors are you in the mood for?</p>
              <div className="slider-container">
                <div className="slider-wrapper">
                  <input className="sweet" type="range" min="0" max="20"/>
                  <p>Sweet</p>
                </div>
                <div className="slider-wrapper savory">
                  <input className="savory" type="range"/>
                  <p>Savory</p>
                </div>
                <div className="slider-wrapper sour">
                  <input className="sour" type="range"/>
                  <p>Sour</p>
                </div>
                <div className="slider-wrapper bitter">
                  <input className="bitter" type="range"/>
                  <p>Bitter</p>
                </div>
                <div className="slider-wrapper spicy">
                  <input className="spicy" type="range"/>
                  <p>Spicy</p>
                </div>
              </div>

            </div>
          </li>
          <li>
            <div className="num-circle">
              <p>3</p>
            </div>
            <div className="question-content">
              <p>Are you interested in a type of cuisine?</p>
              <div className="checkbox-container" id="cuisineType">
                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="african" onChange={(event) => handleChange(event)}/>
                    <label htmlFor="african">African</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="european" onChange={(event) => handleChange(event)}/>
                    <label htmlFor="european" >European</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="japanese" onChange={(event) => handleChange(event)}/>
                    <label htmlFor="japanese">Japanese</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="nordic" onChange={(event) => handleChange(event)}/>
                    <label htmlFor="nordic">Nordic</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="american" onChange={(event) => handleChange(event)}/>
                    <label htmlFor="american">American</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="french" onChange={(event) => handleChange(event)}/>
                    <label htmlFor="french">French</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="jewish" onChange={(event) => handleChange(event)}/>
                    <label htmlFor="jewish">Jewish</label>
                  </div>
                </div>

                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="southern" onChange={(event) => handleChange(event)}/>
                    <label htmlFor="southern">Southern</label>v
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="british" onChange={(event) => handleChange(event)}/>
                    <label htmlFor="british">British</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="german" onChange={(event) => handleChange(event)}/>
                    <label htmlFor="german">German</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="korean" onChange={(event) => handleChange(event)}/>
                    <label htmlFor="korean">Korean</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="spanish" onChange={(event) => handleChange(event)}/>
                    <label htmlFor="spanish">Spanish</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="cajun" onChange={(event) => handleChange(event)}/>
                    <label htmlFor="cajun">Cajun</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="greek" onChange={(event) => handleChange(event)}/>
                    <label>Greek</label>
                  </div>
                </div>

                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="latinAmerican" onChange={(event) => handleChange(event)}/>
                    <label>Latin American</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="thai" onChange={(event) => handleChange(event)}/>
                    <label>Thai</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="caribbean" onChange={(event) => handleChange(event)}/>
                    <label>Caribbean</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="indian" onChange={(event) => handleChange(event)}/>
                    <label>Indian</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="mediterranean" onChange={(event) => handleChange(event)}/>
                    <label>Mediterranean</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="vietnamese" onChange={(event) => handleChange(event)}/>
                    <label>Vietnamese</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="chinese" onChange={(event) => handleChange(event)}/>
                    <label>Chinese</label>
                  </div>
                </div>

                <div className="check-column">
                  <div className="check-wrapper">
                     <input type="checkbox" id="irish" onChange={(event) => handleChange(event)}/>
                     <label>Irish</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="mexican" onChange={(event) => handleChange(event)}/>
                    <label>Mexican</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="easternEuropean" onChange={(event) => handleChange(event)}/>
                    <label>Eastern European</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="italian" onChange={(event) => handleChange(event)}/>
                    <label>Italian</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="middleEastern" onChange={(event) => handleChange(event)}/>
                    <label>Middle Eastern</label>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="num-circle">
              <p>4</p>
            </div>
            <div className="question-content">
              <p>Any dietary restrictions?</p>
              <div className="checkbox-container" id="dietRestrictions">
                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="gluten_free" onChange={(event) => handleChange(event)}/>
                    <label>Gluten Free</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="ovo_vegetarian" onChange={(event) => handleChange(event)}/>
                    <label>Ovo-vegeterian</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="primal" onChange={(event) => handleChange(event)}/>
                    <label>Primal</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="ketogenic" onChange={(event) => handleChange(event)}/>
                    <label>Ketogenic</label>
                  </div>
                </div>
                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="vegan" onChange={(event) => handleChange(event)}/>
                    <label>Vegan</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="fodmap" onChange={(event) => handleChange(event)}/>
                    <label>Low-FODMAP</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="vegetarian" onChange={(event) => handleChange(event)}/>
                    <label>Vegeterian</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="pescetarian" onChange={(event) => handleChange(event)}/>
                    <label>Pascetarian</label>
                  </div>
                </div>
                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="whole_30" onChange={(event) => handleChange(event)}/>
                    <label>Whole30</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="lacto_vegetarian" onChange={(event) => handleChange(event)}/>
                    <label>Lacto-vegeterian</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="paleo" onChange={(event) => handleChange(event)}/>
                    <label>Paleo</label>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="num-circle">
              <p>5</p>
            </div>
            <div className="question-content">
              <p>Show me results without:</p>
              <div className="checkbox-container" id="intolerances">
                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="dairy" onChange={(event) => handleChange(event)}/>
                    <label>Dairy</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="peanut" onChange={(event) => handleChange(event)}/>
                    <label>Peanut</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="soy" onChange={(event) => handleChange(event)}/>
                    <label>Soy</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="egg" onChange={(event) => handleChange(event)}/>
                    <label>Egg</label>
                  </div>
                </div>
                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="seafood" onChange={(event) => handleChange(event)}/>
                    <label>Seafood</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="sulfite" onChange={(event) => handleChange(event)}/>
                    <label>Sulfite</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="gluten" onChange={(event) => handleChange(event)}/>
                    <label>Gluten</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="sesame" onChange={(event) => handleChange(event)}/>
                    <label>Sesame</label>
                  </div>
                </div>
                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="treeNut" onChange={(event) => handleChange(event)}/>
                    <label>Treenut</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="grain" onChange={(event) => handleChange(event)}/>
                    <label>Grain</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="shellfish" onChange={(event) => handleChange(event)}/>
                    <label>Shellfish</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="wheat" onChange={(event) => handleChange(event)}/>
                    <label>Wheat</label>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="form-button-container">
          <div className="form-button-wrapper">
            <button onClick={event => submitSearch(event, meal)}>Submit</button>
            <button>Random</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Form;