import { Grid } from "@mui/material";
import React, { useState } from "react";
import { BoxProfileComp } from "../BoxProfileComp";
import larissa from "../../../Assets/larissa.png";
import Card from "../Card/Card";
import poke2 from "../../../Assets/005.png";
import poke3 from "../../../Assets/007.png";
import status2 from "../../../Assets/15.png";
import status5 from "../../../Assets/17.png";
import CardTeam from "../CardSkill/CardTeam";
import CardPersistence from "../CardSkill/CardPersistence";

const GridSkillsLarissa: React.FC = () => {
  const [showContentLarissa, setShowContentLarissa] = useState(false);

  const toggleContentLarissa = () => {
    setShowContentLarissa(!showContentLarissa);
  };
  return (
    <>
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
            alt="Larissa"
            src={larissa}
            sx={{ width: "260px", height: "260px" }}
            textButton="Mostrar habilidades da Larissa"
            handleShowSkills={toggleContentLarissa}
          />
        </Grid>
        {showContentLarissa && <CardTeam />}
        {showContentLarissa && (
          <Grid xs={3} className="container">
            <Card
              foto={poke2}
              habilidade="Proatividade"
              descricao="Participa das aulas ativamente."
              imageStatus={status5}
            />
          </Grid>
        )}
        {showContentLarissa && <CardPersistence />}
      </Grid>
    </>
  );
};

export default GridSkillsLarissa;
