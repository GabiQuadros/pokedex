import { Box, Grid } from "@mui/material";
import * as React from "react";
import git from "../../Assets/github.png";
import ButtonGit from "./ButtonGit";

export const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {/* Arrumar e cintralizar tudo */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img
              src={git}
              alt="git"
              style={{
                width: 150,
                height: 150,
                color: "background.default",
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <ButtonGit
              link="https://github.com/cassianosilvaa"
              name="Cassiano"
            />
            <ButtonGit
              link="https://github.com/anaysfernanda"
              name="Fernanda"
            />
            <ButtonGit link="https://github.com/larissacmoser" name="Larissa" />
            <ButtonGit
              link="https://github.com/Guilherme-Turek"
              name="Guilherme"
            />
            <ButtonGit link="https://github.com/GabiQuadros" name="Gabriela" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
