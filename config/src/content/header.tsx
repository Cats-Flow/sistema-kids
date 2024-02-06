import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ArrowUUpLeft, Equals } from "@phosphor-icons/react";
import React from "react";

export function Header() {
  const ReturnPage = () => {
    window.history.back();
  };

  return(
    <>
      <header className="_header">
        <img src="/config/assets/logotipo.svg" alt="Logotipo do Ministério Kids" width="112px" height="78.84px" />
        <nav>
          <button type="submit" title="Retornar para página anterior" className="_btn return" onClick={ReturnPage}>
            <ArrowUUpLeft />
          </button>
          <button type="submit" title="Retornar para página anterior" className="_btn return" onClick={ReturnPage}>
            <ArrowUUpLeft />
          </button>
          <Menu>
            <MenuButton as="button" className="_btn menu" title="Menu lateral">
              <Equals />
            </MenuButton>
            <MenuList className="_menu">
              <MenuItem className="_opt p" as="a" href="/user" title="Acessar informações da conta">Conta</MenuItem>
              <MenuItem className="_opt" as="a" href="/notes" title="Notas e informações">Notas</MenuItem>
              <MenuItem className="_opt u" as="button" title="Sair da conta">Sair</MenuItem>
            </MenuList>
          </Menu>
        </nav>
      </header>
    </>
  )
}