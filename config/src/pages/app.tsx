import React from "react";
import { Helmet } from 'react-helmet';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./home";
import { Dash } from "./dash";
import { Notas } from "./notas";
import { Login } from "./login";
import { Profile } from "./user";
import { Loader } from "./loader";


import { AuthenticationGuard } from "../content/guardprotect";
import { NotFoundPage } from "./notpage";

import { RNA } from "./registrar/alunos";

import { Maternal } from "./turmas/maternal";
import { Juniores } from "./turmas/juniores";

import { GAM } from "./aulas/maternal";
import { GCM } from "./aulas/chamada/maternal";
import { GCJ } from "./aulas/chamada/juniores";
import { GAJ } from "./aulas/juniores";

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

        <link rel="shortcut icon" href="./config/assets/favicon.png" type="image/png" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dash" element={<AuthenticationGuard component={Dash} />} />
        <Route path="/notes" element={<AuthenticationGuard component={Notas} />} />
        <Route path="/user" element={<AuthenticationGuard component={Profile} />} />
        <Route path="/registrar/aluno" element={<AuthenticationGuard component={RNA} />} />
        <Route path="/turmas/juniores" element={<AuthenticationGuard component={Juniores} />} />
        <Route path="/turmas/maternal" element={<AuthenticationGuard component={Maternal} />} />
        <Route path="/aulas/maternal" element={<AuthenticationGuard component={GAM} />} />
        <Route path="/aulas/juniores" element={<AuthenticationGuard component={GAJ} />} />
        <Route path="/chamada/maternal/:chamadaID" element={<AuthenticationGuard component={GCM} />} />
        <Route path="/chamada/juniores/:chamadaID" element={<AuthenticationGuard component={GCJ} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}



