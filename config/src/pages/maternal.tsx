import React from "react";
import { Header } from "../content/header";
import { Footer } from "../content/footer";
import Data from "../content/date";
import { MagnifyingGlass, PlusCircle } from "@phosphor-icons/react";
import { Checkbox } from "@chakra-ui/react";

export function Maternal() {
  const currentDate = new Date();
  return (
    <>
      <Header />
      <main className="_main">
        <section className="_card tools">
          <Data date={currentDate} />
          <div className="_div">
            <label className="_sec" htmlFor="search">
              <input className="_input" type="search" name="Pesquisar alunos" id="searchalunos" placeholder="Pesquisar alunos" />
              <button type="submit" className="_btn">
                <MagnifyingGlass />
              </button>
            </label>
            <nav className="_row">
              <a title="Salvar alunos do maternal em PDF" className="_btn min" href="/exportar/alunos/maternal/pdf">Salvar em PDF</a>
              <a title="Salvar alunos do maternal em planilha" className="_btn min" href="/exportar/alunos/maternal/exc">Salvar em planilha</a>
            </nav>
          </div>
        </section>
        <form action="" name="Chamada maternal" className="_card alunos">
          <h2>Alunos do maternal</h2>
          <div className="_div">
            <div className="_cnt">
              <p>Henry de Barros Rodrigues</p>
              <Checkbox name="Presença do aluno" className="_btn check"></Checkbox>
            </div>
            <div className="_cnt">
              <p>Paula Cristiane de Barros Rodrigues Elias</p>
              <Checkbox name="Presença do aluno" className="_btn check"></Checkbox>
            </div>
            <div className="_cnt">
              <p>Henry de Barros Rodrigues</p>
              <Checkbox name="Presença do aluno" className="_btn check"></Checkbox>
            </div>
          </div>
          <div className="_div">
            <a title="Criar turma" href="/registrar/aluno" className="_btn icon">
              <PlusCircle />
              Cadastrar aluno
            </a>
            <button type="submit" title="Cadastrar aula" className="_btn orange cad">
              Cadastrar aula
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  )
}