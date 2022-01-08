import React, { useState } from "react";
import "./Form.css"

const Form: React.FC = () => {

  const [meal, setMeal] = useState('');
  const [isChecked, setCheckedState] = useState<string[]>([]);

  const handleChange = (event: any) => {
    isChecked.includes(event.target.id) ? setCheckedState(isChecked.filter(selection => selection !== event.target.id)) : setCheckedState([...isChecked, event.target.id]);
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
            <p>1</p>
            <p>What kind of meal are you looking for?</p>
            <select className="option-select" value={meal} onChange={event => setMeal(event.target.value)}>
              <option value="--Meal--">--Meal--</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
            </select>
          </li>
          <li>
            <p>2</p>
            <p>What kind of flavors are you in the mood for?</p>
            <input type="range"/>
            <input type="range"/>
            <input type="range"/>
            <input type="range"/>
            <input type="range"/>
          </li>
          <li>
            <p>3</p>
            <p>Are you interested in a type of cuisine?</p>
            <input type="checkbox" id="african" onChange={(event) => handleChange(event)}/>
            <label htmlFor="african">African</label>
            <input type="checkbox" id="european" onChange={(event) => handleChange(event)}/>
            <label htmlFor="european" >European</label>
            <input type="checkbox" id="japanese" onChange={(event) => handleChange(event)}/>
            <label htmlFor="japanese">Japanese</label>
            <input type="checkbox" id="nordic" onChange={(event) => handleChange(event)}/>
            <label htmlFor="nordic">Nordic</label>
            <input type="checkbox" id="american" onChange={(event) => handleChange(event)}/>
            <label htmlFor="american">American</label>
            <input type="checkbox" id="french" onChange={(event) => handleChange(event)}/>
            <label htmlFor="french">French</label>
            <input type="checkbox" id="jewish" onChange={(event) => handleChange(event)}/>
            <label htmlFor="jewish">Jewish</label>
            <input type="checkbox" id="southern" onChange={(event) => handleChange(event)}/>
            <label htmlFor="southern">Southern</label>
            <input type="checkbox" id="british" onChange={(event) => handleChange(event)}/>
            <label htmlFor="british">British</label>
            <input type="checkbox" id="german" onChange={(event) => handleChange(event)}/>
            <label htmlFor="german">German</label>
            <input type="checkbox" id="korean" onChange={(event) => handleChange(event)}/>
            <label htmlFor="korean">Korean</label>
            <input type="checkbox" id="spanish" onChange={(event) => handleChange(event)}/>
            <label htmlFor="spanish">Spanish</label>
            <input type="checkbox" id="cajun" onChange={(event) => handleChange(event)}/>
            <label htmlFor="cajun">Cajun</label>
            <input type="checkbox" id="greek" onChange={(event) => handleChange(event)}/>
            <label>Greek</label>
            <input type="checkbox" id="latinAmerican" onChange={(event) => handleChange(event)}/>
            <label>Latin American</label>
            <input type="checkbox" id="thai" onChange={(event) => handleChange(event)}/>
            <label>Thai</label>
            <input type="checkbox" id="caribbean" onChange={(event) => handleChange(event)}/>
            <label>Caribbean</label>
            <input type="checkbox" id="indian" onChange={(event) => handleChange(event)}/>
            <label>Indian</label>
            <input type="checkbox" id="mediterranean" onChange={(event) => handleChange(event)}/>
            <label>Mediterranean</label>
            <input type="checkbox" id="vietnamese" onChange={(event) => handleChange(event)}/>
            <label>Vietnamese</label>
            <input type="checkbox" id="chinese" onChange={(event) => handleChange(event)}/>
            <label>Chinese</label>
            <input type="checkbox" id="irish" onChange={(event) => handleChange(event)}/>
            <label>Irish</label>
            <input type="checkbox" id="mexican" onChange={(event) => handleChange(event)}/>
            <label>Mexican</label>
            <input type="checkbox" id="easternEuropean" onChange={(event) => handleChange(event)}/>
            <label>Eastern European</label>
            <input type="checkbox" id="italian" onChange={(event) => handleChange(event)}/>
            <label>Italian</label>
            <input type="checkbox" id="middleEastern" onChange={(event) => handleChange(event)}/>
            <label>Middle Eastern</label>
          </li>
          <li>
            <p>4</p>
            <p>Any dietary restrictions?</p>
            <input type="checkbox" id="glutenFree" onChange={(event) => handleChange(event)}/>
            <label>Gluten Free</label>
            <input type="checkbox" id="ovoVegeterian" onChange={(event) => handleChange(event)}/>
            <label>Ovo-vegeterian</label>
            <input type="checkbox" id="primal" onChange={(event) => handleChange(event)}/>
            <label>Primal</label>
            <input type="checkbox" id="ketogenic" onChange={(event) => handleChange(event)}/>
            <label>Ketogenic</label>
            <input type="checkbox" id="vegan" onChange={(event) => handleChange(event)}/>
            <label>Vegan</label>
            <input type="checkbox" id="low-fodmap" onChange={(event) => handleChange(event)}/>
            <label>Low-FODMAP</label>
            <input type="checkbox" id="vegeterian" onChange={(event) => handleChange(event)}/>
            <label>Vegeterian</label>
            <input type="checkbox" id="pascetarian" onChange={(event) => handleChange(event)}/>
            <label>Pascetarian</label>
            <input type="checkbox" id="whole30" onChange={(event) => handleChange(event)}/>
            <label>Whole30</label>
            <input type="checkbox" id="lactoVegeterian" onChange={(event) => handleChange(event)}/>
            <label>Lacto-vegeterian</label>
            <input type="checkbox" id="paleo" onChange={(event) => handleChange(event)}/>
            <label>Paleo</label>
          </li>
          <li>
            <p>5</p>
            <p>Show me result without:</p>
            <input type="checkbox" id="dairy" onChange={(event) => handleChange(event)}/>
            <label>Dairy</label>
            <input type="checkbox" id="peanut" onChange={(event) => handleChange(event)}/>
            <label>Peanut</label>
            <input type="checkbox" id="soy" onChange={(event) => handleChange(event)}/>
            <label>Soy</label>
            <input type="checkbox" id="egg" onChange={(event) => handleChange(event)}/>
            <label>Egg</label>
            <input type="checkbox" id="seafood" onChange={(event) => handleChange(event)}/>
            <label>Seafood</label>
            <input type="checkbox" id="sulfite" onChange={(event) => handleChange(event)}/>
            <label>Sulfite</label>
            <input type="checkbox" id="gluten" onChange={(event) => handleChange(event)}/>
            <label>Gluten</label>
            <input type="checkbox" id="sesame" onChange={(event) => handleChange(event)}/>
            <label>Sesame</label>
            <input type="checkbox" id="treeNut" onChange={(event) => handleChange(event)}/>
            <label>Treenut</label>
            <input type="checkbox" id="grain" onChange={(event) => handleChange(event)}/>
            <label>Grain</label>
            <input type="checkbox" id="shellfish" onChange={(event) => handleChange(event)}/>
            <label>Shellfish</label>
            <input type="checkbox" id="wheat" onChange={(event) => handleChange(event)}/>
            <label>Wheat</label>
          </li>
        </ul>
        <button>Submit</button>
        <button>Random</button>
      </form>
    </section>
  )
}

export default Form;