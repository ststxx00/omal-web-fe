// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import DailyReading from "./pages/DailyReading";
import Word from "./pages/Word";
import Notification from "./pages/Notification";
import GlobalStyle from "./styles/GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          {/* Auth Layout */}
          <Route
            path="/"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />

          {/* Main Layout */}
          <Route
            path="/daily-reading"
            element={
              <MainLayout>
                <DailyReading />
              </MainLayout>
            }
          />
          <Route
            path="/word"
            element={
              <MainLayout>
                <Word />
              </MainLayout>
            }
          />
          <Route
            path="/notification"
            element={
              <MainLayout>
                <Notification />
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
