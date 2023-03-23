import CardMedia from "@mui/material/CardMedia";
import React from "react";
import "./StyledCard.css";

interface CardProps {
  foto: any;
  habilidade: string;
  descricao: string;
  imageStatus: any;
}

export const Card: React.FC<CardProps> = ({
  foto,
  habilidade,
  descricao,
  imageStatus,
}) => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="content">
          <CardMedia component="img" height="120" image={foto} alt="Picachu" />
          <h4>{habilidade}</h4>
          <h5>{descricao}</h5>
          <CardMedia
            component="img"
            height="60"
            width="159"
            image={imageStatus}
            alt="Status"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
