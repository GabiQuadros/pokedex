import { Container, Grid } from "@mui/material";
import { BoxProfileComp } from "../../BoxProfileComp";
import Card from "../Card/Card";
import larissa from "../../../Assets/larissa.png";
import gabriela from "../../../Assets/gabriela.png";
import fernanda from "../../../Assets/fernanda.png";
import guilherme from "../../../Assets/guilherme.png";
import cassiano from "../../../Assets/cassiano.png";
import poke1 from "../../../Assets/002.png";
import poke2 from "../../../Assets/005.png";
import poke3 from "../../../Assets/007.png";
import poke4 from "../../../Assets/009.png";
import poke5 from "../../../Assets/025.png";
import poke6 from "../../../Assets/027.png";
import poke7 from "../../../Assets/032.png";
import status1 from "../../../Assets/16.png";
import status2 from "../../../Assets/15.png";
import status3 from "../../../Assets/18.png";
import status4 from "../../../Assets/19.png";
import status5 from "../../../Assets/17.png";
import { useState } from "react";

export const Grupo: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <>
      <body className="bodyCard">
        <Container>
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
                sx={{ width: "200px", height: "200px" }}
                textButton="Mostrar habilidades da Larissa"
                handleShowSkills={toggleContent}
              />
            </Grid>
            {showContent && (
              <Grid xs={3} className="container">
                <Card
                  foto={poke1}
                  habilidade="Trabalho em equipe"
                  descricao="Fácil convivência e sempre ajudando aos colegas."
                  imageStatus={status1}
                />
              </Grid>
            )}
            {showContent && (
              <Grid xs={3} className="container">
                <Card
                  foto={poke2}
                  habilidade="Proatividade"
                  descricao="Participa das aulas ativamente."
                  imageStatus={status5}
                />
              </Grid>
            )}
            {showContent && (
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
                sx={{ width: "200px", height: "200px" }}
                textButton="Mostrar habilidades da Gabriela"
                handleShowSkills={toggleContent}
              />
            </Grid>
            <Grid xs={3} className="container">
              <Card
                foto={poke1}
                habilidade="Trabalho em equipe"
                descricao="Fácil convivência e sempre ajudando aos colegas."
                imageStatus={status1}
              />
            </Grid>
            <Grid xs={3} className="container">
              <Card
                foto={poke3}
                habilidade="Persistência"
                descricao="Firme e forte após o React!"
                imageStatus={status2}
              />
            </Grid>
            <Grid xs={3} className="container">
              <Card
                foto={poke4}
                habilidade="Participativa"
                descricao="Tá sempre ativa nas atividades."
                imageStatus={status3}
              />
            </Grid>
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
          >
            <Grid item xs={3} className="container">
              <BoxProfileComp
                alt="Fernanda"
                src={fernanda}
                sx={{ width: "200px", height: "200px" }}
                textButton="Mostrar habilidades da Fernanda"
                handleShowSkills={toggleContent}
              />
            </Grid>
            <Grid xs={3} className="container">
              <Card
                foto={poke1}
                habilidade="Trabalho em equipe"
                descricao="Fácil convivência e sempre ajudando aos colegas."
                imageStatus={status1}
              />
            </Grid>
            <Grid xs={3} className="container">
              <Card
                foto={poke4}
                habilidade="Participativa"
                descricao="Tá sempre ativa nas atividades."
                imageStatus={status3}
              />
            </Grid>
            <Grid xs={3} className="container">
              <Card
                foto={poke3}
                habilidade="Persistência"
                descricao="Firme e forte após o React!"
                imageStatus={status2}
              />
            </Grid>
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
          >
            <Grid item xs={3} className="container">
              <BoxProfileComp
                alt="Cassiano"
                src={cassiano}
                sx={{ width: "200px", height: "200px" }}
                textButton="Mostrar habilidades da Cassiano"
                handleShowSkills={toggleContent}
              />
            </Grid>
            <Grid xs={3} className="container">
              <Card
                foto={poke3}
                habilidade="Persistência"
                descricao="Firme e forte após o React!"
                imageStatus={status2}
              />
            </Grid>
            <Grid xs={3} className="container">
              <Card
                foto={poke5}
                habilidade="Criatividade"
                descricao="Ideias brilhantes a todo momento."
                imageStatus={status4}
              />
            </Grid>
            <Grid xs={3} className="container">
              <Card
                foto={poke1}
                habilidade="Trabalho em equipe"
                descricao="Fácil convivência e sempre ajudando aos colegas."
                imageStatus={status1}
              />
            </Grid>
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
          >
            <Grid item xs={3} className="container">
              <BoxProfileComp
                alt="Guilherme"
                src={guilherme}
                sx={{ width: "200px", height: "200px" }}
                textButton="Mostrar habilidades da Guilherme"
                handleShowSkills={toggleContent}
              />
            </Grid>
            <Grid xs={3} className="container">
              <Card
                foto={poke6}
                habilidade="Prestatividade"
                descricao="Ama ajudar todo mundo."
                imageStatus={status2}
              />
            </Grid>
            <Grid xs={3} className="container">
              <Card
                foto={poke7}
                habilidade="Facilidade em aprender"
                descricao="O nerd da turma."
                imageStatus={status4}
              />
            </Grid>
            <Grid xs={3} className="container">
              <Card
                foto={poke1}
                habilidade="Trabalho em equipe"
                descricao="Fácil convivência e sempre ajudando aos colegas."
                imageStatus={status1}
              />
            </Grid>
          </Grid>
        </Container>
      </body>
    </>
  );
};
