import React from "react";
import "./StyledCard.css";

export const Card: React.FC = () => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="content">
          <h2>Habilidades</h2>
          <h3>colocar foto</h3>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            praesentium aut culpa cum suscipit deleniti veniam unde facere iure
            sint dolorum, voluptas quae rerum fugit esse laudantium voluptatem?
            Voluptatum, nemo!
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
