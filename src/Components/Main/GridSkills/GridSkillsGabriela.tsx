import { Grid } from "@mui/material";
import React, { useState } from "react";
import { BoxProfileComp } from "../BoxProfileComp";
import gabriela from "../../../Assets/gabriela.png";
import CardTeam from "../CardSkill/CardTeam";
import CardPersistence from "../CardSkill/CardPersistence";
import CardParticipative from "../CardSkill/CardParticipative";

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
      {showContentGabriela && <CardTeam />}
      {showContentGabriela && <CardPersistence />}
      {showContentGabriela && <CardParticipative />}
    </Grid>
  );
};

export default GridSkillsGabriela;
