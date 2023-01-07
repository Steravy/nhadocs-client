import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import "./index.css";
import Layout from "./layout/Layout";
import reportWebVitals from "./reportWebVitals";
import CvTemplatePage from "./pages/template/TemplatePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/template" element={<CvTemplatePage />} />
          <Route path="/about" element={<CvTemplatePage />} />
          <Route path="/blog" element={<CvTemplatePage />} />
          <Route path="/fqa" element={<CvTemplatePage />} />
          <Route path="/create" element={<CvTemplatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
