import React from "react";
import Card from "./Card";
import "./ImageGrid.css"

const ImageGrid = () => {
  return(
    <section className="image-grid-section">
      <aside className="questionnaire-info">
        <img className="bulb-icon" src="fruit.jpg" alt="lightbulb-icon"></img>
        <div className="questionnaire-info-text">
          <h2>Recommendations</h2>
          <p>Your food recommendations will show up here. We’ve generated some random foods to get you started.</p>
        </div>
      </aside>
    <div className="card-container">
      <Card />
      <Card />
      <Card />
    </div>

    </section>
  )
}

export default ImageGrid;