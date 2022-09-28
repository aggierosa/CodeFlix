import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Button from "@mui/material/Button";
import { Box, ThemeProvider } from "@mui/system";
import { Header } from "./components/Header";
import { createTheme } from "@mui/material";
import { Layout } from "./components/Layout";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box component="main" sx={{ height: "100vh" }}>
        <Header />
        <Layout>
          <h1>Hello</h1>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
