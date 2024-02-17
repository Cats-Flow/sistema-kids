import React from "react";

import { Header } from "../content/header";
import { Footer } from "../content/footer";

export function Login() {
  return (
    <>
      <Header />
      <main className="_main">
        <section className="_card login">
          <h2>Entre no sistema</h2>
          <form name="Entre no sistema" action="">
            <div className="_div">
              <input className="_input" placeholder="Usuário" type="text" name="Usuário" id="user" maxLength={32} />
              <input className="_input" placeholder="Senha" type="password" name="Senha" id="password" maxLength={32} />
            </div>
            <button type="submit" title="Entrar" className="_btn orange">Entrar</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}