import React from "react";
import "./Form.css"
import Slider from '@mui/material/Slider';

const Form: React.FC = () => {
  return (
    <section className="form-section">
      <aside className="questionnaire-info">
        <img className="bulb-icon" src="lightbulb.jpg" alt="lightbulb-icon"></img>
        <div className="questionnaire-info-text">
          <h2>Questionnaire</h2>
          <p>First, answer some questions about what you're craving. Feel free to leave these blank and generate some random foods.</p>
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
              <select className="option-select"></select>
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
                  {/* <input className="sweet"type="range"/> */}
                  <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    // getAriaValueText={"0"}
                    color="secondary"
                    valueLabelDisplay="auto"
                  />
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
              <div className="checkbox-container">
                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="african"/>
                    <label htmlFor="african">African</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="american"/>
                    <label htmlFor="american">American</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="british"/>
                    <label htmlFor="british">British</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="cajun"/>
                    <label htmlFor="cajun">Cajun</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="caribbean"/>
                    <label>Caribbean</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="chinese"/>
                    <label>Chinese</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="easternEuropean"/>
                    <label>East European</label>
                  </div>
                </div>

                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="european"/>
                    <label htmlFor="european">European</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="french"/>
                    <label htmlFor="french">French</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="german"/>
                    <label htmlFor="german">German</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="greek"/>
                    <label>Greek</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="indian"/>
                    <label>Indian</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="irish"/>
                    <label>Irish</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="italian"/>
                    <label>Italian</label>
                  </div>
                </div>

                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="japanese"/>
                    <label htmlFor="japanese">Japanese</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="jewish"/>
                    <label htmlFor="jewish">Jewish</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="korean"/>
                    <label htmlFor="korean">Korean</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="latinAmerican"/>
                    <label>Latin American</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="mediterranean"/>
                    <label>Mediterranean</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="mexican"/>
                    <label>Mexican</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="middleEastern"/>
                    <label>Middle Eastern</label>
                  </div>
                </div>

                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="nordic"/>
                    <label htmlFor="nordic">Nordic</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="southern"/>
                    <label htmlFor="southern">Southern</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="spanish"/>
                    <label htmlFor="spanish">Spanish</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="thai"/>
                    <label>Thai</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="vietnamese"/>
                    <label>Vietnamese</label>
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
              <div className="checkbox-container">
                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="glutenFree"/>
                    <label>Gluten Free</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="ketogenic"/>
                    <label>Ketogenic</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="vegeterian"/>
                    <label>Vegeterian</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="lactoVegeterian"/>
                    <label>Lacto-vegeterian</label>
                  </div>
                </div>

                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="ovoVegeterian"/>
                    <label>Ovo-vegeterian</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="vegan"/>
                    <label>Vegan</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="pascetarian"/>
                    <label>Pascetarian</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="paleo"/>
                    <label>Paleo</label>
                  </div>
                </div>

                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="primal"/>
                    <label>Primal</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="low-fodmap"/>
                    <label>Low-FODMAP</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="whole30"/>
                    <label>Whole30</label>
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
              <div className="checkbox-container">
                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="dairy"/>
                    <label>Dairy</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="egg"/>
                    <label>Egg</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="gluten"/>
                    <label>Gluten</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="grain"/>
                    <label>Grain</label>
                  </div>
                </div>

                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="peanut"/>
                    <label>Peanut</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="seafood"/>
                    <label>Seafood</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="sesame"/>
                    <label>Sesame</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="shellfish"/>
                    <label>Shellfish</label>
                  </div>
                </div>

                <div className="check-column">
                  <div className="check-wrapper">
                    <input type="checkbox" id="soy"/>
                    <label>Soy</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="sulfite"/>
                    <label>Sulfite</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="treeNut"/>
                    <label>Tree Nut</label>
                  </div>
                  <div className="check-wrapper">
                    <input type="checkbox" id="wheat"/>
                    <label>Wheat</label>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="form-button-container">
          <div className="form-button-wrapper">
            <button>Submit</button>
            <button>Random</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Form;