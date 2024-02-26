import React, { useState } from "react";
import { Header } from "../content/header";
import { Footer } from "../content/footer";
import { Helmet } from "react-helmet";
import { Alert, Select } from "@chakra-ui/react";
import { Checks, WarningCircle } from "@phosphor-icons/react";

const CadAluno: React.FC = () => {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [observacao, setObservacao] = useState("");
  const [turma, setTurma] = useState("");
  const [alerta, setAlerta] = useState<{ status: string, mensagem: string } | null>(null);

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/alunos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome,
          dataNascimento,
          responsavel,
          observacao,
          turma
        })
      });
      if (response.ok) {
        setAlerta({ status: "success", mensagem: "Aluno adicionado com sucesso" });
        // Limpa os campos do formulário após adicionar o aluno com sucesso
        setNome("");
        setDataNascimento("");
        setResponsavel("");
        setObservacao("");
        setTurma("");
      } else {
        setAlerta({ status: "error", mensagem: "Erro ao adicionar aluno" });
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
      setAlerta({ status: "error", mensagem: "Erro ao adicionar aluno" });
    }
  };

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
        {alerta && (
          <Alert status={alerta.status === 'success' ? 'success' : 'error'} className="_card alert">
            <div>
              {alerta.status === 'success' ? <Checks /> : <WarningCircle />}
            </div>
            <p>{alerta.mensagem}</p>
          </Alert>
        )}
        <main className="_main">
          <section className="_card _ca">
            <h2>Cadastrar aluno</h2>
            <form className="_div" onSubmit={handleFormSubmit}>
              <div className="_div">
                <input className="_input" type="text" placeholder="Nome do aluno" value={nome} onChange={(e) => setNome(e.target.value)} required />
                <input className="_input" type="text" placeholder="Nome do responsável" value={responsavel} onChange={(e) => setResponsavel(e.target.value)} required />
                <input className="_input" type="text" placeholder="Data de nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
                <textarea className="_textarea" name="Observação" placeholder="Observação" value={observacao} onChange={(e) => setObservacao(e.target.value)}></textarea>
                <label className="_select" htmlFor="selturma">
                  <Select className="camp" id="selturma" name="Turma do aluno" title="Turma do aluno" value={turma} onChange={(e) => setTurma(e.target.value)} required>
                    <option value="" hidden>Selecionar turma</option>
                    <option value="Maternal">Maternal</option>
                    <option value="Juniores">Juniores</option>
                  </Select>
                </label>
              </div>
              <button className="_btn orange" type="submit">Cadastrar</button>
            </form>
          </section>
        </main>
        <Footer />
      </section>
    </>
  )
}

export default CadAluno;
