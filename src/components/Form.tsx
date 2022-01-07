import React from "react";
import "./Form.css"

const Form: React.FC = () => {
  return (
    <section className="form-section">
      <form className="questions">
        <ul>
          <li className="meal-input">
            <p>1</p>
            <p>What kind of meal are you looking for?</p>
            <select className="option-select"></select>
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
            <input type="checkbox" id="african"/>
            <label htmlFor="african">African</label>
            <input type="checkbox" id="european"/>
            <label htmlFor="european">European</label>
            <input type="checkbox" id="japanese"/>
            <label htmlFor="japanese">Japanese</label>
            <input type="checkbox" id="nordic"/>
            <label htmlFor="nordic">Nordic</label>
            <input type="checkbox" id="american"/>
            <label htmlFor="american">American</label>
            <input type="checkbox" id="french"/>
            <label htmlFor="french">French</label>
            <input type="checkbox" id="jewish"/>
            <label htmlFor="jewish">Jewish</label>
            <input type="checkbox" id="southern"/>
            <label htmlFor="southern">Southern</label>
            <input type="checkbox" id="british"/>
            <label htmlFor="british">British</label>
            <input type="checkbox" id="german"/>
            <label htmlFor="german">German</label>
            <input type="checkbox" id="korean"/>
            <label htmlFor="korean">Korean</label>
            <input type="checkbox" id="spanish"/>
            <label htmlFor="spanish">Spanish</label>
            <input type="checkbox" id="cajun"/>
            <label htmlFor="cajun">Cajun</label>
            <input type="checkbox" id="greek"/>
            <label>Greek</label>
            <input type="checkbox" id="latinAmerican"/>
            <label>Latin American</label>
            <input type="checkbox" id="thai"/>
            <label>Thai</label>
            <input type="checkbox" id="caribbean"/>
            <label>Caribbean</label>
            <input type="checkbox" id="indian"/>
            <label>Indian</label>
            <input type="checkbox" id="mediterranean"/>
            <label>Mediterranean</label>
            <input type="checkbox" id="vietnamese"/>
            <label>Vietnamese</label>
            <input type="checkbox" id="chinese"/>
            <label>Chinese</label>
            <input type="checkbox" id="irish"/>
            <label>Irish</label>
            <input type="checkbox" id="mexican"/>
            <label>Mexican</label>
            <input type="checkbox" id="easternEuropean"/>
            <label>Eastern European</label>
            <input type="checkbox" id="italian"/>
            <label>Italian</label>
            <input type="checkbox" id="middleEastern"/>
            <label>Middle Eastern</label>
          </li>
          <li>
            <p>4</p>
            <p>Any dietary restrictions?</p>
            <input type="checkbox" id="glutenFree"/>
            <label>Gluten Free</label>
            <input type="checkbox" id="ovoVegeterian"/>
            <label>Ovo-vegeterian</label>
            <input type="checkbox" id="primal"/>
            <label>Primal</label>
            <input type="checkbox" id="ketogenic"/>
            <label>Ketogenic</label>
            <input type="checkbox" id="vegan"/>
            <label>Vegan</label>
            <input type="checkbox" id="low-fodmap"/>
            <label>Low-FODMAP</label>
            <input type="checkbox" id="vegeterian"/>
            <label>Vegeterian</label>
            <input type="checkbox" id="pascetarian"/>
            <label>Pascetarian</label>
            <input type="checkbox" id="whole30"/>
            <label>Whole30</label>
            <input type="checkbox" id="lactoVegeterian"/>
            <label>Lacto-vegeterian</label>
            <input type="checkbox" id="paleo"/>
            <label>Paleo</label>
          </li>
          <li>
            <p>5</p>
            <p>Show me result without:</p>
            <input type="checkbox" id="dairy"/>
            <label>Dairy</label>
            <input type="checkbox" id="peanut"/>
            <label>Peanut</label>
            <input type="checkbox" id="soy"/>
            <label>Soy</label>
            <input type="checkbox" id="egg"/>
            <label>Egg</label>
            <input type="checkbox" id="seafood"/>
            <label>Seafood</label>
            <input type="checkbox" id="sulfite"/>
            <label>Sulfite</label>
            <input type="checkbox" id="gluten"/>
            <label>Gluten</label>
            <input type="checkbox" id="sesame"/>
            <label>Sesame</label>
            <input type="checkbox" id="treeNut"/>
            <label>Treenut</label>
            <input type="checkbox" id="grain"/>
            <label>Grain</label>
            <input type="checkbox" id="shellfish"/>
            <label>Shellfish</label>
            <input type="checkbox" id="wheat"/>
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