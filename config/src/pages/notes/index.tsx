import React from "react";
import { Header } from "../../content/header";
import { Footer } from "../../content/footer";

export function Notas() {
  return (
    <>
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
    </>
  )
}