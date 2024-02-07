import React from "react";
import { Header } from "../../content/header";
import { Footer } from "../../content/footer";
import { MagnifyingGlass } from "@phosphor-icons/react";

export function Aulas() {
  return (
    <>
      <Header />
      <main className="_main">
        <section className="_card tools">
          <div className="_div">
            <label className="_sec" htmlFor="search">
              <input className="_input" type="search" name="Pesquisar aula" id="searchaulas" placeholder="Pesquisar aula" />
              <button type="submit" className="_btn">
                <MagnifyingGlass />
              </button>
            </label>
            <nav className="_row">
              <a title="Salvar aulas registradas em PDF" className="_btn min" href="/exportar/aulas/completa/pdf">Salvar em PDF</a>
              <a title="Salvar aulas registradas em planilha" className="_btn min" href="/exportar/aulas/completa/exc">Salvar em planilha</a>
            </nav>
          </div>
        </section>
        <section className="_card aulas">
          <h2>Gerenciar aulas</h2>
          <div className="_div">
            <a className="_btn" title="Aulas de Terça, 7 de favereiro de 2024 - Maternal" href="/aulas/2024/02/07/maternal">
              Sabado, 9 de favereiro, 2024 - maternal
            </a>
            <a className="_btn" title="Aulas de Terça, 7 de favereiro de 2024 - Maternal" href="/aulas/2024/02/07/maternal">
              Terça, 7 de favereiro, 2024 - maternal
            </a>
            <a className="_btn" title="Aulas de Terça, 7 de favereiro de 2024 - Juniores" href="/aulas/2024/02/07/juniores">
              Terça, 7 de favereiro, 2024 - juniores
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}