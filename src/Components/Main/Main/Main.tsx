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
  const [showContentLarissa, setShowContentLarissa] = useState(false);
  const [showContentGabriela, setShowContentGabriela] = useState(false);
  const [showContentFernanda, setShowContentFernanda] = useState(false);
  const [showContentCassiano, setShowContentCassiano] = useState(false);
  const [showContentGuilherme, setShowContentGuilherme] = useState(false);

  const toggleContentLarissa = () => {
    setShowContentLarissa(!showContentLarissa);
  };

  const toggleContentGabriela = () => {
    setShowContentGabriela(!showContentGabriela);
  };

  const toggleContentFernanda = () => {
    setShowContentFernanda(!showContentFernanda);
  };

  const toggleContentCassiano = () => {
    setShowContentCassiano(!showContentCassiano);
  };

  const toggleContentGuilherme = () => {
    setShowContentGuilherme(!showContentGuilherme);
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
            {showContentGabriela && (
              <Grid xs={3} className="container">
                <Card
                  foto={poke1}
                  habilidade="Trabalho em equipe"
                  descricao="Fácil convivência e sempre ajudando aos colegas."
                  imageStatus={status1}
                />
              </Grid>
            )}
            {showContentGabriela && (
              <Grid xs={3} className="container">
                <Card
                  foto={poke3}
                  habilidade="Persistência"
                  descricao="Firme e forte após o React!"
                  imageStatus={status2}
                />
              </Grid>
            )}
            {showContentGabriela && (
              <Grid xs={3} className="container">
                <Card
                  foto={poke4}
                  habilidade="Participativa"
                  descricao="Tá sempre ativa nas atividades."
                  imageStatus={status3}
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
                alt="Fernanda"
                src={fernanda}
                sx={{ width: "260px", height: "260px" }}
                textButton="Mostrar habilidades da Fernanda"
                handleShowSkills={toggleContentFernanda}
              />
            </Grid>
            {showContentFernanda && (
              <Grid xs={3} className="container">
                <Card
                  foto={poke1}
                  habilidade="Trabalho em equipe"
                  descricao="Fácil convivência e sempre ajudando aos colegas."
                  imageStatus={status1}
                />
              </Grid>
            )}
            {showContentFernanda && (
              <Grid xs={3} className="container">
                <Card
                  foto={poke4}
                  habilidade="Participativa"
                  descricao="Tá sempre ativa nas atividades."
                  imageStatus={status3}
                />
              </Grid>
            )}
            {showContentFernanda && (
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
        </Container>
      </body>
    </>
  );
};
