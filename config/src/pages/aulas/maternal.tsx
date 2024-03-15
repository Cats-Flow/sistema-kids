import React from "react";
import { Helmet } from 'react-helmet';
import { Select } from "@chakra-ui/react";

import { Header } from "../../content/header";
import { Footer } from "../../content/footer";

export function GAM() {
  return (
    <section className="_turma">
      <Helmet>
        <title>Gerenciar aulas do maternal • Sistema Kids | Ministério Kids</title>
        <meta name="title" content="Gerenciar aulas do maternal • Sistema Kids | Ministério Kids" />
        <meta property="og:title" content="Gerenciar aulas do maternal • Sistema Kids | Ministério Kids" />
        <meta property="twitter:title" content="Gerenciar aulas do maternal • Sistema Kids | Ministério Kids" />

        <meta property="og:url" content="https://kids.catsflow.com/sistema/aulas/maternal" />
        <meta property="twitter:url" content="https://kids.catsflow.com/sistema/aulas/maternal" />
      </Helmet>
      <Header />
      <main className="_main">
        <section className="_card">
          <h2>Ferramentas</h2>
          <div className="_div">
            <label className="_select" htmlFor="selturma">
              <Select className="camp" name="mesdaaula" title="Mês da aula" required>
                <option value="" hidden>Selecione o mês</option>
              </Select>
            </label>
            <label className="_select" htmlFor="selturma">
              <Select className="camp" name="professor" title="Professor" required>
                <option value="" hidden>Selecione o professor</option>
              </Select>
            </label>
          </div>
        </section>
        <section className="_card">
          <h2>Aulas do maternal</h2>
          <nav className="_div">
            <a className="_btn" href="/aulas/maternal/chamada?data=aaaa-mm-dd" title="Aula do maternal do dia dd/mm">
              DD de MMMM de AAAA
            </a>
            <a className="_btn" href="/aulas/maternal/chamada?data=aaaa-mm-dd" title="Aula do maternal do dia dd/mm">
              DD de MMMM de AAAA
            </a>
            <a className="_btn" href="/aulas/maternal/chamada?data=aaaa-mm-dd" title="Aula do maternal do dia dd/mm">
              DD de MMMM de AAAA
            </a>
          </nav>
        </section>
      </main>
      <Footer />
    </section>
  )
}