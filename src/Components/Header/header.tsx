import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import poke from "../../Assets/Pokemon.png";
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
          backgroundColor: "background.paper",
        }}
      >
        <Toolbar variant="dense">
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", marginLeft: "35px" },
            }}
          >
            <img src={poke} style={{ width: 100, height: 100 }} />
          </Box>
          <Typography
            sx={{
              flexGrow: 10,
              fontFamily: "Pokemon",
              fontSize: "80px",
              marginBottom: "20px",
            }}
            variant="h6"
            color="inherit"
            component="div"
          >
            Growdex
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
