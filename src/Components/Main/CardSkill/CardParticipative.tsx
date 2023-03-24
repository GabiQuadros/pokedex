import { Grid } from "@mui/material";
import React from "react";
import Card from "../Card/Card";
import poke4 from "../../../Assets/009.png";
import status3 from "../../../Assets/18.png";

const CardParticipative: React.FC = () => {
  return (
    <Grid xs={3} className="container">
      <Card
        foto={poke4}
        habilidade="Participativa"
        descricao="Tá sempre ativa nas atividades."
        imageStatus={status3}
      />
    </Grid>
  );
};

export default CardParticipative;
