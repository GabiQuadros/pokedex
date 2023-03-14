import React from "react";
import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import Header from "./Components/Header/header";
import { Grupo } from "./Components/Main/Main/Main";
import { ThemeProvider } from "@mui/material";
import themeDefault from "./theme/Default";

function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <Header />
      <Grupo />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
