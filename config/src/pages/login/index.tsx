import React from "react";
import { Header } from "../../content/header";
import { GitBranch } from "@phosphor-icons/react";

export function Login() {
  return (
    <>
      <Header />
      <footer className="_footer">
        <p>© 2024 Cat`s Flow</p>
        <span>
          <GitBranch />
          B1.0.0
        </span>
      </footer>
    </>
  )
}