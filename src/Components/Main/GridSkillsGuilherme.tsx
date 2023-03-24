import { Grid } from "@mui/material";
import React, { useState } from "react";
import { BoxProfileComp } from "./BoxProfileComp";
import Card from "./Card/Card";
import guilherme from "../../Assets/guilherme.png";
import poke1 from "../../Assets/002.png";
import poke6 from "../../Assets/027.png";
import poke7 from "../../Assets/032.png";
import status1 from "../../Assets/16.png";
import status2 from "../../Assets/15.png";
import status4 from "../../Assets/19.png";

const GridSkillsGuilherme: React.FC = () => {
  const [showContentGuilherme, setShowContentGuilherme] = useState(false);

  const toggleContentGuilherme = () => {
    setShowContentGuilherme(!showContentGuilherme);
  };

  return (
    <React.Fragment>
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
            alt="Guilherme"
            src={guilherme}
            sx={{ width: "260px", height: "260px" }}
            textButton="Mostrar habilidades da Guilherme"
            handleShowSkills={toggleContentGuilherme}
          />
        </Grid>
        {showContentGuilherme && (
          <Grid xs={3} className="container">
            <Card
              foto={poke6}
              habilidade="Prestatividade"
              descricao="Ama ajudar todo mundo."
              imageStatus={status2}
            />
          </Grid>
        )}
        {showContentGuilherme && (
          <Grid xs={3} className="container">
            <Card
              foto={poke7}
              habilidade="Facilidade em aprender"
              descricao="O nerd da turma."
              imageStatus={status4}
            />
          </Grid>
        )}
        {showContentGuilherme && (
          <Grid xs={3} className="container">
            <Card
              foto={poke1}
              habilidade="Trabalho em equipe"
              descricao="Fácil convivência e sempre ajudando aos colegas."
              imageStatus={status1}
            />
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default GridSkillsGuilherme;
