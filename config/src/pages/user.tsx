import React from "react";
import { Helmet } from 'react-helmet';
import { User } from "@phosphor-icons/react";
import { useAuth0 } from "@auth0/auth0-react";

import { Header } from "../content/header";
import { Footer } from "../content/footer";

export function Profile() {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <section className="_body _user">
      <Helmet>
        <title>Conta • Sistema Kids | Ministério Kids</title>
        <meta name="title" content="Conta • Sistema Kids | Ministério Kids" />
        <meta property="og:title" content="Conta • Sistema Kids | Ministério Kids" />
        <meta property="twitter:title" content="Conta • Sistema Kids | Ministério Kids" />

        <meta property="og:url" content="https://kids.catsflow.com/sistema/user" />
        <meta property="twitter:url" content="https://kids.catsflow.com/sistema/user" />
      </Helmet>
      <Header />
      <main className="_main">
        <section className="_card">
          <div className="_div">
            <div className="_iconuser _btn orange">
              <User />
            </div>
            <h1>{user.name}</h1>
            <h4>{user.email}</h4>
          </div>
          <div className="_div">
            <a title="Trocar a senha da conta" className="_btn" href="https://ministeriokids.us.auth0.com/u/reset-password/request/Username-Password-Authentication?state=hKFo2SBZMEYzUm92V21UaVdBNUJSR3dQUVFLWjlzcUVPR1RKTqFurnJlc2V0LXBhc3N3b3Jko3RpZNkgRlVWODlDc2EwWmxkOFZLLXhnRjBRNU5FaGZlNkd4SXmjY2lk2SBzQlRURTB1NVBWcFU2VW54S1lvM0N0enZkT1hDNUtoRw" target="_blank" rel="noopener noreferrer">Trocar a senha</a>
            <button className="_btn orange" title="Sair da conta" onClick={handleLogout}>Sair</button>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
