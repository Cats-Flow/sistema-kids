import React from "react";
import { Helmet } from 'react-helmet';
import { Checkbox } from "@chakra-ui/react";

import { Header } from "../../../content/header";
import { Footer } from "../../../content/footer";

export function GCJ() {
  return (
    <section className="_turma">
      <Helmet>
        <title>Gerenciar chamada do juniores • Sistema Kids | Ministério Kids</title>
        <meta name="title" content="Gerenciar chamada do juniores • Sistema Kids | Ministério Kids" />
        <meta property="og:title" content="Gerenciar chamada do juniores • Sistema Kids | Ministério Kids" />
        <meta property="twitter:title" content="Gerenciar chamada do juniores • Sistema Kids | Ministério Kids" />

        <meta property="og:url" content="https://kids.catsflow.com/sistema/aulas/juniores/chamada" />
        <meta property="twitter:url" content="https://kids.catsflow.com/sistema/aulas/juniores/chamada" />
      </Helmet>
      <Header />
      <main className="_main">
        <section className="_card">
          <h2>Chamada juniores</h2>
          <div className="_div">
            <input type="text" className="_input" placeholder="Data da aula" disabled required />
            <input type="text" className="_input" placeholder="Professor" disabled required />
            <input type="text" className="_input" placeholder="Título da aula" disabled required />
          </div>
        </section>
        <form name="Chamada juniores" className="_card alunos">
          <h2>Chamada do juniores</h2>
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