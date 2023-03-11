import { Box, Button, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import git from "../../Assets/github.png";
import SendIcon from "@mui/icons-material/Send";

export const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#292727",
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
            <img src={git} style={{ width: 150, height: 150 }} />
          </Grid>
          <Grid item xs={8}>
            <Button
              variant="outlined"
              sx={{ color: "black", borderColor: "black" }}
              endIcon={<SendIcon />}
              href="https://github.com/GabiQuadros"
              target="_blank"
            >
              Gabriela
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "black", borderColor: "black" }}
              endIcon={<SendIcon />}
              href="https://github.com/Guilherme-Turek"
              target="_blank"
            >
              Guilherme
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "black", borderColor: "black" }}
              endIcon={<SendIcon />}
              href="https://github.com/larissacmoser"
              target="_blank"
            >
              Larissa
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "black", borderColor: "black" }}
              endIcon={<SendIcon />}
              href="https://github.com/anaysfernanda"
              target="_blank"
            >
              Fernanda
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "black", borderColor: "black" }}
              endIcon={<SendIcon />}
              href="https://github.com/cassianosilvaa"
              target="_blank"
            >
              Cassiano
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
