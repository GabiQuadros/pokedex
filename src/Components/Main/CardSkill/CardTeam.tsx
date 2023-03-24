import { Grid } from "@mui/material";
import React from "react";
import Card from "../Card/Card";
import poke1 from "../../../Assets/002.png";
import status1 from "../../../Assets/16.png";

const CardTeam: React.FC = () => {
  return (
    <Grid xs={3} className="container">
      <Card
        foto={poke1}
        habilidade="Trabalho em equipe"
        descricao="Fácil convivência e sempre ajudando aos colegas."
        imageStatus={status1}
      />
    </Grid>
  );
};

export default CardTeam;
