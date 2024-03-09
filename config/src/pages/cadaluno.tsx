import React from "react";
import { Helmet } from "react-helmet";
import { Select } from "@chakra-ui/react";
import { Header } from "../content/header";
import { Footer } from "../content/footer";

import InputMask from 'react-input-mask';

export function CadAluno() {
  return (
    <>
      <Helmet>
        <title>Cadastrar novo aluno • Sistema Kids | Ministério Kids</title>
        <meta name="title" content="Cadastrar novo aluno • Sistema Kids | Ministério Kids" />
        <meta property="og:title" content="Cadastrar novo aluno • Sistema Kids | Ministério Kids" />
        <meta property="twitter:title" content="Cadastrar novo aluno • Sistema Kids | Ministério Kids" />
        <meta property="og:url" content="https://kids.catsflow.com/sistema/registrar/aluno" />
        <meta property="twitter:url" content="https://kids.catsflow.com/sistema/registrar/aluno" />
      </Helmet>
      <section className="_body _cadaluno">
        <Header />
        <main className="_main">
          <section className="_card _ca">
            <h2>Cadastrar aluno</h2>
            <form className="_div">
              <div className="_div">
                <input className="_input" type="text" placeholder="Nome do aluno" name="nome" required />
                <input className="_input" type="text" placeholder="Nome do responsável" name="responsavel" required />
                <InputMask className="_input" type="text" mask="99/99/9999" placeholder="Data de nascimento" name="nascimento" required />
                <textarea className="_textarea" name="observacao" placeholder="Observação"></textarea>
                <label className="_select" htmlFor="selturma">
                  <Select className="camp" name="turma" title="Turma do aluno" required>
                    <option value="" hidden>Selecionar turma</option>
                    <option value="Maternal">Maternal</option>
                    <option value="Juniores">Juniores</option>
                  </Select>
                </label>
              </div>
              <button title="Cadastrar aluno" className="_btn orange" type="submit">
                Cadastrar
              </button>
            </form>
          </section>
        </main>
        <Footer />
      </section>
    </>
  );
}
