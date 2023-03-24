import { Grid } from "@mui/material";
import React, { useState } from "react";
import { BoxProfileComp } from "../BoxProfileComp";
import Card from "../Card/Card";
import cassiano from "../../../Assets/cassiano.png";
import poke1 from "../../../Assets/002.png";
import poke3 from "../../../Assets/007.png";
import poke5 from "../../../Assets/025.png";
import status1 from "../../../Assets/16.png";
import status2 from "../../../Assets/15.png";
import status4 from "../../../Assets/19.png";
import CardTeam from "../CardSkill/CardTeam";
import CardPersistence from "../CardSkill/CardPersistence";

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
        {showContentCassiano && <CardPersistence />}
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
        {showContentCassiano && <CardTeam />}
      </Grid>
    </React.Fragment>
  );
};

export default GridSkillsCassiano;
