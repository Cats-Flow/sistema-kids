import React from "react";
import { Header } from "../../content/header";
import { Footer } from "../../content/footer";
import { Baby, Backpack, Calendar, Notebook, Notepad, PlusCircle } from "@phosphor-icons/react";

export function Dash() {
  return (
    <>
      <Header />
      <main className="_main">
        <section className="_card chamada">
          <h2>Chamada escolar</h2>
          <nav>
            <a title="Chamada escolar da turma maternal" href="/turmas/maternal" className="_btn icon">
              <Baby />
              Maternal
            </a>
            <a title="Chamada escolar da turma juniores" href="/turmas/juniores" className="_btn icon">
              <Backpack />
              Juniores
            </a>
          </nav>
          <a title="Criar turma" href="/registrar/turma" className="_btn icon">
            <PlusCircle />
            Criar turma
          </a>
        </section>
        <section className="_card tool">
          <h2>Ferramentas</h2>
          <nav>
            <a title="Escala ministerial" href="/escalas" className="_btn icon">
              <Calendar />
              Escala ministerial
            </a>
            <a title="Material de estudos" href="https://drive.google.com/" className="_btn icon">
              <Notebook />
              Material de estudo
            </a>
            <a title="Informações das crianças" href="https://drive.google.com/" className="_btn icon">
              <Notepad />
              Cadastro infantil
            </a>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  )
}