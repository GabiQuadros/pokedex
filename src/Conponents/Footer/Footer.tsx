import { Box, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import git from "../Header/github.png";

export const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#292727",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#ffffff",
      }}
    >
      <Container
        sx={{
          backgroundSize: "contain",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 0,
        }}
      >
        <Grid container>
          <Grid item xs={4} md={3}>
            <img src={git} style={{ width: 100, height: 100 }} />
          </Grid>
          <Grid item xs={2} md={2}>
            <Typography textAlign={"center"}>Gabi </Typography>
            <Typography textAlign={"center"}>Guilherme</Typography>
            <Typography textAlign={"center"}>Larissa</Typography>
          </Grid>
          <Grid item xs={2} md={2}>
            <Typography textAlign={"center"}>Fernada</Typography>
            <Typography textAlign={"center"}>Cassiano</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
