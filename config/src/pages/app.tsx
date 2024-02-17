import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Login } from "./login";
import { Notas } from "./notas";
import { Dash } from "./dash";
import { Juniores } from "./juniores";
import { Maternal } from "./maternal";
import { Aulas } from "./aulas";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Notas />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/turmas/juniores" element={<Juniores />} />
        <Route path="/turmas/maternal" element={<Maternal />} />
        <Route path="/aulas/" element={<Aulas />} />
      </Routes>
    </BrowserRouter>
  )
}