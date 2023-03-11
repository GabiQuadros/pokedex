import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import poke from "./Pokemon.png";
import { Box } from "@mui/material";
import "../../App.css";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          height: "120px",
          justifyContent: "center",
          backgroundColor: "rgba(7, 7, 7, 0.63)",
        }}
      >
        <Toolbar variant="dense">
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <img src={poke} style={{ width: 100, height: 100 }} />
          </Box>
          <Typography
            sx={{ flexGrow: 10, fontFamily: "Pokemon", fontSize: "55px" }}
            variant="h6"
            color="inherit"
            component="div"
          >
            Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
