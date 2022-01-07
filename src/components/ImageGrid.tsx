import React from "react";
import Card from "./Card";

const ImageGrid: React.FC = () => {
  return(
    <section className="image-grid-section">
      <Card />
      <Card />
      <Card />
    </section>
  )
}

export default ImageGrid;