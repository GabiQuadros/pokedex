import { Grid } from "@mui/material";
import React, { useState } from "react";
import { BoxProfileComp } from "./BoxProfileComp";
import Card from "./Card/Card";
import gabriela from "../../Assets/gabriela.png";
import poke1 from "../../Assets/002.png";
import poke3 from "../../Assets/007.png";
import poke4 from "../../Assets/009.png";
import status1 from "../../Assets/16.png";
import status2 from "../../Assets/15.png";
import status3 from "../../Assets/18.png";

const GridSkillsGabriela: React.FC = () => {
  const [showContentGabriela, setShowContentGabriela] = useState(false);

  const toggleContentGabriela = () => {
    setShowContentGabriela(!showContentGabriela);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        margin: "20px",
        alignItems: "center",
        bgcolor: "rgba(255, 255, 255, 0.1);",
        borderRadius: "10px",
        borderTop: "1px solid rgba(255, 255, 255, 0.5)",
        borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
      }}
    >
      <Grid item xs={3} className="container">
        <BoxProfileComp
          alt="Gabriela"
          src={gabriela}
          sx={{ width: "260px", height: "260px" }}
          textButton="Mostrar habilidades da Gabriela"
          handleShowSkills={toggleContentGabriela}
        />
      </Grid>
      {showContentGabriela && (
        <Grid xs={3} className="container">
          <Card
            foto={poke1}
            habilidade="Trabalho em equipe"
            descricao="Fácil convivência e sempre ajudando aos colegas."
            imageStatus={status1}
          />
        </Grid>
      )}
      {showContentGabriela && (
        <Grid xs={3} className="container">
          <Card
            foto={poke3}
            habilidade="Persistência"
            descricao="Firme e forte após o React!"
            imageStatus={status2}
          />
        </Grid>
      )}
      {showContentGabriela && (
        <Grid xs={3} className="container">
          <Card
            foto={poke4}
            habilidade="Participativa"
            descricao="Tá sempre ativa nas atividades."
            imageStatus={status3}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default GridSkillsGabriela;
