import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import A from "./pages/A"
import B from "./pages/B"
import Login from "./pages/Login"
import { Global, css } from '@emotion/react'

function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #F7F5EF;
          }
        `}
      />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Login />
            }
          />
          <Route
            path="/a"
            element={
              <MainLayout>
                <A />
              </MainLayout>
            }
          />
          <Route
            path="/b"
            element={
              <MainLayout>
                <B />
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
