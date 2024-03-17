import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "../content/footer";
import { Header } from "../content/header";
import { ArrowUUpLeft, House } from "@phosphor-icons/react";

export function NotFoundPage() {
  const ReturnPage = () => {
    window.history.back();
  };

  return (
    <section className="_body _np">
      <Helmet>
        <title>Página não encontrada • Sistema Kids | Ministério Kids</title>
        <meta name="title" content="Página não encontrada • Sistema Kids | Ministério Kids" />
        <meta property="og:title" content="Página não encontrada • Sistema Kids | Ministério Kids" />
        <meta property="twitter:title" content="Página não encontrada • Sistema Kids | Ministério Kids" />
      </Helmet>
      <Header />
      <main className="_main">
        <section className="_card _errpage">
          <div className="_div">
            <h1>404</h1>
            <p>Parece que a página não existe.</p>
          </div>
          <nav className="_flex">
            <a title="Página inicial" className="_btn" href="./">
              <House />
              Home
            </a>
            <button type="submit" title="Retornar para página anterior" className="_btn return" onClick={ReturnPage}>
              <ArrowUUpLeft />
              Voltar
            </button>
          </nav>
        </section>
      </main>
      <Footer />
    </section>
  )
}