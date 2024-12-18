// Developer: Roderick Bernardo
// Purpose: React router demo

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Lectures from "./components/Lectures";
import Labs from "./components/Labs";
import Quizzes from "./components/Quizzes";
import Campus from "./components/Campus";
import NotFound from "./components/NotFound";

function AppV5(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout version={props.version} />}>
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="Lectures" element={<Lectures />} />
            <Route path="Labs" element={<Labs />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Campus/:campusId" element={<Campus />} />
            <Route path="NotFound" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppV5;
