import { Container } from "@mui/material";
import GridSkillsLarissa from "../GridSkills/GridSkillsLarissa";
import GridSkillsGabriela from "../GridSkills/GridSkillsGabriela";
import GridSkillsFernanda from "../GridSkills/GridSkillsFernanda";
import GridSkillsCassiano from "../GridSkills/GridSkillsCassiano";
import GridSkillsGuilherme from "../GridSkills/GridSkillsGuilherme";

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
