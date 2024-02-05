import { ArrowUUpLeft } from "@phosphor-icons/react";
import React from "react";

export function Header() {
  const ReturnPage = () => {
    window.history.back();
  };

  return(
    <>
      <header className="_header">
        <img src="/config/assets/logotipo.svg" alt="Logotipo do Ministério Kids" />
        <nav>
          <button type="submit" title="Retornar para página anterior" className="_btn return" onClick={ReturnPage}>
            <ArrowUUpLeft />
          </button>
          <button type="submit" title="Retornar para página anterior" className="_btn return" onClick={ReturnPage}>
            <ArrowUUpLeft />
          </button>
        </nav>
      </header>
    </>
  )
}