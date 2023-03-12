import { Container, Grid } from "@mui/material";
import { BoxProfileComp } from "../../BoxProfileComp";
import Card from "../Card/Card";

//Guilherme está criando essa parte com as fotos e botão para chamar o card, aqui só o teste de como ficaria o card

export const Grupo: React.FC = () => {
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
                src="/static/images/avatar/1.jpg"
                sx={{ width: "200px", height: "200px" }}
                textButton="Mostrar habilidades da Larissa"
              />
            </Grid>
            <Grid xs={3} className="container">
              <Card />
            </Grid>
            <Grid xs={3} className="container">
              <Card />
            </Grid>
            <Grid xs={3} className="container">
              <Card />
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
                alt="Gabriela"
                src="/static/images/avatar/1.jpg"
                sx={{ width: "200px", height: "200px" }}
                textButton="Mostrar habilidades da Gabriela"
              />
            </Grid>
            <Grid xs={3} className="container">
              <Card />
            </Grid>
            <Grid xs={3} className="container">
              <Card />
            </Grid>
            <Grid xs={3} className="container">
              <Card />
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
                src="/static/images/avatar/1.jpg"
                sx={{ width: "200px", height: "200px" }}
                textButton="Mostrar habilidades da Fernanda"
              />
            </Grid>
            <Grid xs={3} className="container">
              <Card />
            </Grid>
            <Grid xs={3} className="container">
              <Card />
            </Grid>
            <Grid xs={3} className="container">
              <Card />
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
                src="/static/images/avatar/1.jpg"
                sx={{ width: "200px", height: "200px" }}
                textButton="Mostrar habilidades da Cassiano"
              />
            </Grid>
            <Grid xs={3} className="container">
              <Card />
            </Grid>
            <Grid xs={3} className="container">
              <Card />
            </Grid>
            <Grid xs={3} className="container">
              <Card />
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
                src="/static/images/avatar/1.jpg"
                sx={{ width: "200px", height: "200px" }}
                textButton="Mostrar habilidades da Guilherme"
              />
            </Grid>
            <Grid xs={3} className="container">
              <Card />
            </Grid>
            <Grid xs={3} className="container">
              <Card />
            </Grid>
            <Grid xs={3} className="container">
              <Card />
            </Grid>
          </Grid>
        </Container>
      </body>
    </>
  );
};
