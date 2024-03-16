import React from "react";
import { Helmet } from 'react-helmet';

import { Header } from "../content/header";
import { Footer } from "../content/footer";

export function Notas() {
  return (
    <section className="_notes">
      <Helmet>
        <title>Notas e Informações • Sistema Kids | Ministério Kids</title>
        <meta name="title" content="Notas e Informações • Sistema Kids | Ministério Kids" />
        <meta property="og:title" content="Notas e Informações • Sistema Kids | Ministério Kids" />
        <meta property="twitter:title" content="Notas e Informações • Sistema Kids | Ministério Kids" />

        <meta property="og:url" content="https://kids.catsflow.com/sistema/notes" />
        <meta property="twitter:url" content="https://kids.catsflow.com/sistema/notes" />
      </Helmet>
      <Header />
      <main className="_main">
        <section className="_card">
          <h2>Novos alunos</h2>
          <p className="_tx">Para o cadastro de novos alunos o professor precisa solicitar ao responsavel do aluno que seja feito o cadastramento infantil.</p>
        </section>
        <section className="_card">
          <h2>Faltas e presença erradas</h2>
          <p className="_tx">Caso aconteça de registrar faltas ou presenças erradas para alunos nas aulas o professor precisa entrar em contato com o lider ministerial informando os nomes dos alunos, turma, dia da aula e se estava presente ou não.</p>
        </section>
        <section className="_card">
          <h2>Melhorias e suporte</h2>
          <p className="_tx">Caso precise ajuda ou falar sobre algum problema encontrado dentro do sistema entre em contato com o Henry Rodrigues.</p>
        </section>
      </main>
      <Footer />
    </section>
  )
}