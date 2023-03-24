import { Grid } from "@mui/material";
import React, { useState } from "react";
import { BoxProfileComp } from "../BoxProfileComp";
import fernanda from "../../../Assets/fernanda.png";
import CardTeam from "../CardSkill/CardTeam";
import CardPersistence from "../CardSkill/CardPersistence";
import CardParticipative from "../CardSkill/CardParticipative";

const GridSkillsFernanda: React.FC = () => {
  const [showContentFernanda, setShowContentFernanda] = useState(false);

  const toggleContentFernanda = () => {
    setShowContentFernanda(!showContentFernanda);
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
          alt="Fernanda"
          src={fernanda}
          sx={{ width: "260px", height: "260px" }}
          textButton="Mostrar habilidades da Fernanda"
          handleShowSkills={toggleContentFernanda}
        />
      </Grid>
      {showContentFernanda && <CardTeam />}
      {showContentFernanda && <CardParticipative />}
      {showContentFernanda && <CardPersistence />}
    </Grid>
  );
};

export default GridSkillsFernanda;
