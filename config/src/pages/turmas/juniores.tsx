import React from "react";
import { Helmet } from 'react-helmet';
import { Checkbox, Select } from "@chakra-ui/react";

import { Header } from "../../content/header";
import { Footer } from "../../content/footer";

export function Juniores() {
  return (
    <section className="_turma">
      <Helmet>
        <title>Turma dos Juniores • Sistema Kids | Ministério Kids</title>
        <meta name="title" content="Turma dos Juniores • Sistema Kids | Ministério Kids" />
        <meta property="og:title" content="Turma dos Juniores • Sistema Kids | Ministério Kids" />
        <meta property="twitter:title" content="Turma dos Juniores • Sistema Kids | Ministério Kids" />

        <meta property="og:url" content="https://kids.catsflow.com/sistema/turmas/juniores" />
        <meta property="twitter:url" content="https://kids.catsflow.com/sistema/turmas/juniores" />
      </Helmet>
      <Header />
      <main className="_main">
        <section className="_card">
          <h2>Chamada juniores</h2>
          <div className="_div">
            <input type="text" className="_input" placeholder="Data da aula" required />
            <label className="_select" htmlFor="selturma">
              <Select className="camp" name="professor" title="Professor" required>
                <option value="" hidden>Selecionar o professor</option>
                <option value="Paula Rodrigues">Paula Rodrigues</option>
                <option value="Marilaine Martins">Marilaine Martins</option>
                <option value="Henry Rodrigues">Henry Rodrigues</option>
              </Select>
            </label>
            <input type="text" className="_input" placeholder="Título da aula" required />
          </div>
        </section>
        <form action="" name="Chamada juniores" className="_card alunos">
          <h2>Alunos do juniores</h2>
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
          <button type="submit" title="Cadastrar aula" className="_btn orange cad">
            Cadastrar aula
          </button>
        </form>
      </main>
      <Footer />
    </section>
  )
}