import React from "react";
import { Helmet } from 'react-helmet';
import { Checkbox } from "@chakra-ui/react";

import { Header } from "../../../content/header";
import { Footer } from "../../../content/footer";

export function GCM() {
  return (
    <section className="_turma">
      <Helmet>
        <title>Gerenciar chamada do maternal • Sistema Kids | Ministério Kids</title>
        <meta name="title" content="Gerenciar chamada do maternal • Sistema Kids | Ministério Kids" />
        <meta property="og:title" content="Gerenciar chamada do maternal • Sistema Kids | Ministério Kids" />
        <meta property="twitter:title" content="Gerenciar chamada do maternal • Sistema Kids | Ministério Kids" />

        <meta property="og:url" content="https://kids.catsflow.com/sistema/aulas/maternal/chamada" />
        <meta property="twitter:url" content="https://kids.catsflow.com/sistema/aulas/maternal/chamada" />
      </Helmet>
      <Header />
      <main className="_main">
        <section className="_card">
          <h2>Chamada maternal</h2>
          <div className="_div">
            <input type="text" className="_input" placeholder="Data da aula" disabled required />
            <input type="text" className="_input" placeholder="Professor" disabled required />
            <input type="text" className="_input" placeholder="Título da aula" disabled required />
          </div>
        </section>
        <form name="Chamada maternal" className="_card alunos">
          <h2>Chamada do maternal</h2>
          <div className="_div">
            <div className="_cnt">
              <p>Nome do aluno</p>
              <Checkbox name="Presença do aluno" className="_btn check" disabled></Checkbox>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </section>
  )
}