import React from "react";
import './Form.css'

const Form = () => {
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
        <input />
        <input />
        <input />
        <input />
        <input />
        <button>Submit</button>
      </form>
    </section>
  )
}

export default Form;