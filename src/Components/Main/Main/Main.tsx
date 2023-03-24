import { Container } from "@mui/material";
import { useState } from "react";
import GridSkillsLarissa from "../GridSkillsLarissa";
import GridSkillsGabriela from "../GridSkillsGabriela";
import GridSkillsFernanda from "../GridSkillsFernanda";
import GridSkillsCassiano from "../GridSkillsCassiano";
import GridSkillsGuilherme from "../GridSkillsGuilherme";

export const Grupo: React.FC = () => {
  return (
    <>
      <body className="bodyCard">
        <Container>
          <GridSkillsLarissa />
          <GridSkillsGabriela />
          <GridSkillsFernanda />
          <GridSkillsCassiano />
          <GridSkillsGuilherme />
        </Container>
      </body>
    </>
  );
};
