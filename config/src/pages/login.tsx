import React from "react";
import { Helmet } from 'react-helmet';
import { useAuth0 } from "@auth0/auth0-react";

import { Header } from "../content/header";
import { Footer } from "../content/footer";

export function Login() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/sistema/dash",
      },
    });
  };

  return (
    <section className="_body _login">
      <Helmet>
        <title>Entrar no sistema • Sistema Kids | Ministério Kids</title>
        <meta name="title" content="Entrar no sistema • Sistema Kids | Ministério Kids" />
        <meta property="og:title" content="Entrar no sistema • Sistema Kids | Ministério Kids" />
        <meta property="twitter:title" content="Entrar no sistema • Sistema Kids | Ministério Kids" />

        <meta property="og:url" content="https://kids.catsflow.com/sistema/login" />
        <meta property="twitter:url" content="https://kids.catsflow.com/sistema/login" />
      </Helmet>
      <Header />
      <main className="_main">
        <section className="_card">
          <h2>Entre no sistema</h2>
          <button title="Fazer login" className="_btn" onClick={handleLogin}>Fazer login</button>
        </section>
      </main>
      <Footer />
    </section>
  );
}
