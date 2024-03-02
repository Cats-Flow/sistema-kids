import React from "react";
import { Helmet } from 'react-helmet';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./home";
import { Dash } from "./dash";
import { Aulas } from "./aulas";
import { Notas } from "./notas";
import { Login } from "./login";
import { Profile } from "./user";
import { CadAluno } from "./cadaluno";
import { Loader } from "./loader";
import { Juniores } from "./juniores";
import { Maternal } from "./maternal";
import { AuthenticationGuard } from "../content/guardprotect";

const NullComponent = () => null;

export function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <Loader />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Helmet>
        <title>Sistema Kids | Ministério Kids</title>
        <meta name="title" content="Sistema Kids | Ministério Kids" />
        <meta property="og:title" content="Sistema Kids | Ministério Kids" />
        <meta property="twitter:title" content="Sistema Kids | Ministério Kids" />

        <meta property="og:url" content="https://kids.catsflow.com/sistema/" />
        <meta property="twitter:url" content="https://kids.catsflow.com/sistema/" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dash" element={<AuthenticationGuard component={Dash} />} />
        <Route path="/notes" element={<AuthenticationGuard component={Notas} />} />
        <Route path="/user" element={<AuthenticationGuard component={Profile} />} />
        <Route path="/registrar/aluno" element={<AuthenticationGuard component={CadAluno} />} />
        <Route path="/turmas/juniores" element={<AuthenticationGuard component={Juniores} />} />
        <Route path="/turmas/maternal" element={<AuthenticationGuard component={Maternal} />} />
        <Route path="/aulas/" element={<AuthenticationGuard component={Aulas} />} />
      </Routes>
    </BrowserRouter>
  )
}



