import { Container, Grid } from "@mui/material";
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
            <Grid item xs={12} className="container">
              <Card />
              <Card />
              <Card />
            </Grid>
          </Grid>
        </Container>
      </body>
    </>
  );
};
