import { createTheme, MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import Popup from "./pages/Popup";
import "@mantine/core/styles.css";

ReactDOM.createRoot(document.body).render(
  <React.StrictMode>
    <MantineProvider theme={createTheme()} withGlobalStyles withNormalizeCSS>
      <Popup />
    </MantineProvider>
  </React.StrictMode>
);
