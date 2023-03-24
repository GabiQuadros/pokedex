import { Grid } from "@mui/material";
import React from "react";
import Card from "../Card/Card";
import poke3 from "../../../Assets/007.png";
import status2 from "../../../Assets/15.png";

const CardPersistence: React.FC = () => {
  return (
    <Grid xs={3} className="container">
      <Card
        foto={poke3}
        habilidade="Persistência"
        descricao="Firme e forte após o React!"
        imageStatus={status2}
      />
    </Grid>
  );
};

export default CardPersistence;
