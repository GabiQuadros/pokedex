import { Container, Grid } from "@mui/material";
import Card from "../Card/Card";

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
          ></Grid>
          <Grid item xs={12} className="container">
            <Card />
          </Grid>
        </Container>
      </body>
    </>
  );
};
