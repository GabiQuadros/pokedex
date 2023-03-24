import { Grid } from "@mui/material";
import React, { useState } from "react";
import { BoxProfileComp } from "./BoxProfileComp";
import Card from "./Card/Card";
import cassiano from "../../Assets/cassiano.png";
import poke1 from "../../Assets/002.png";
import poke3 from "../../Assets/007.png";
import poke5 from "../../Assets/025.png";
import status1 from "../../Assets/16.png";
import status2 from "../../Assets/15.png";
import status4 from "../../Assets/19.png";

const GridSkillsCassiano: React.FC = () => {
  const [showContentCassiano, setShowContentCassiano] = useState(false);

  const toggleContentCassiano = () => {
    setShowContentCassiano(!showContentCassiano);
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
            alt="Cassiano"
            src={cassiano}
            sx={{ width: "260px", height: "260px" }}
            textButton="Mostrar habilidades da Cassiano"
            handleShowSkills={toggleContentCassiano}
          />
        </Grid>
        {showContentCassiano && (
          <Grid xs={3} className="container">
            <Card
              foto={poke3}
              habilidade="Persistência"
              descricao="Firme e forte após o React!"
              imageStatus={status2}
            />
          </Grid>
        )}
        {showContentCassiano && (
          <Grid xs={3} className="container">
            <Card
              foto={poke5}
              habilidade="Criatividade"
              descricao="Ideias brilhantes a todo momento."
              imageStatus={status4}
            />
          </Grid>
        )}
        {showContentCassiano && (
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
      ></Grid>
    </React.Fragment>
  );
};

export default GridSkillsCassiano;
