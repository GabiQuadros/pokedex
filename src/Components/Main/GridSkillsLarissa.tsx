import { Grid } from "@mui/material";
import React, { useState } from "react";
import { BoxProfileComp } from "./BoxProfileComp";
import larissa from "../../Assets/larissa.png";
import Card from "./Card/Card";
import poke1 from "../../Assets/002.png";
import poke2 from "../../Assets/005.png";
import poke3 from "../../Assets/007.png";
import status1 from "../../Assets/16.png";
import status2 from "../../Assets/15.png";
import status5 from "../../Assets/17.png";

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
        {showContentLarissa && (
          <Grid xs={3} className="container">
            <Card
              foto={poke1}
              habilidade="Trabalho em equipe"
              descricao="Fácil convivência e sempre ajudando aos colegas."
              imageStatus={status1}
            />
          </Grid>
        )}
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
        {showContentLarissa && (
          <Grid xs={3} className="container">
            <Card
              foto={poke3}
              habilidade="Persistência"
              descricao="Firme e forte após o React!"
              imageStatus={status2}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default GridSkillsLarissa;
