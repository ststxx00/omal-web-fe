import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
import { Global, css } from '@emotion/react';
import ReflectionList from "./pages/ReflectionListPage";
import WordListPage from "./pages/WordListPage";
import NotificationPage from "./pages/NotificationPage";

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
          <Route path="/" element={<Login />} />
          <Route path="/reflection-list" element={<MainLayout><ReflectionList /></MainLayout>}></Route>
          <Route path="/word-list" element={<MainLayout><WordListPage /></MainLayout>}></Route>
          <Route path="/notification" element={<MainLayout><NotificationPage /></MainLayout>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
