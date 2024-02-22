import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from './AuthContext';
import "./index.css";
import App from "./App";

import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
