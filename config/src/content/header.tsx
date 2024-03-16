import { useAuth0 } from "@auth0/auth0-react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ArrowUUpLeft, Equals } from "@phosphor-icons/react";
import React from "react";

export function Header() {
  const ReturnPage = () => {
    window.history.back();
  };

  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <>
      <header className="_header">
        <img src="/config/assets/logotipo.svg" alt="Logotipo do Ministério Kids" width="112px" height="78.84px" />
        <nav>
          <button type="submit" title="Retornar para página anterior" className="_btn return" onClick={ReturnPage}>
            <ArrowUUpLeft />
          </button>
          <Menu>
            <MenuButton as="button" className="_btn menu" title="Menu lateral">
              <Equals />
            </MenuButton>
            <MenuList className="_menu">
              <MenuItem className="_opt p1" as="a" href="/dash" title="Acessar o painel inicial">Painel</MenuItem>
              <MenuItem className="_opt p2" as="a" href="/user" title="Acessar informações da conta">Conta</MenuItem>
              <MenuItem className="_opt" as="a" href="/notes" title="Notas e informações">Notas</MenuItem>
              <MenuItem className="_opt u" as="button" title="Sair da conta" onClick={handleLogout}>Sair</MenuItem>
            </MenuList>
          </Menu>
        </nav>
      </header>
    </>
  )
}