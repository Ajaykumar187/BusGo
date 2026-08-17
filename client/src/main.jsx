import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import ErrorBoundary from "./components/common/ErrorBoundary";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <ErrorBoundary>

      <BrowserRouter>

        <AuthProvider>

          <Toaster
            position="top-right"
            reverseOrder={false}
          />

          <App />

        </AuthProvider>

      </BrowserRouter>

    </ErrorBoundary>

  </React.StrictMode>
);