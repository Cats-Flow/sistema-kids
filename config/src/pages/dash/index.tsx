import React from "react";
import { Header } from "../../content/header";
import { Footer } from "../../content/footer";
import { Baby, Backpack, Calendar, MagnifyingGlass, Notebook, Notepad, PlusCircle } from "@phosphor-icons/react";

export function Dash() {
  return (
    <>
      <Header />
      <main className="_main">
        <section className="_card chamada">
          <h2>Chamada escolar</h2>
          <nav className="_div">
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
          <nav className="_div">
            <a title="Escala ministerial" href="/escalas" className="_btn icon">
              <Calendar />
              Escala ministerial
            </a>
            <a title="Material de estudos" href="https://drive.google.com/drive/folders/11YmX-xli_EF8_DZ8pm9LPTDzCMquOfe-?usp=drive_link" className="_btn icon">
              <Notebook />
              Material de estudo
            </a>
            <a title="Informações das crianças" href="https://drive.google.com/drive/folders/1vzMSk5CtaKO_o64BbAeenDm3d9qhRr8K?usp=drive_link" className="_btn icon">
              <Notepad />
              Cadastro infantil
            </a>
          </nav>
        </section>
        <section className="_card admin">
          <h2>Administrador</h2>
          <label className="_sec" htmlFor="search">
            <input className="_input" type="search" name="Pesquisar alunos" id="searchalunos" placeholder="Pesquisar alunos" />
            <button type="submit" className="_btn">
              <MagnifyingGlass />
            </button>
          </label>
          <nav className="_row">
            <a title="Exportar lista de alunos" className="_btn min" href="/exportar/alunos">Salvar alunos</a>
            <a title="Exportar chamada da aula" className="_btn min" href="/exportar/aulas">Salvar aulas</a>
            <a title="Registrar novo professor" className="_btn min" href="/registrar/professor">Registrar professor</a>
            <a title="Registrar novo aluno" className="_btn min" href="/registrar/aluno">Registrar aluno</a>
            <a title="Gerenciar aulas" className="_btn min" href="/aulas/">Gerenciar aula</a>
            <a title="Registrar nova nota" className="_btn min" href="/registrar/notas">Registrar nota</a>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  )
}