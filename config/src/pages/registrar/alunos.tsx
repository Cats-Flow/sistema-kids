import React, { ChangeEvent, FormEvent, useState } from "react";
import { Helmet } from "react-helmet";
import { Alert, Select } from "@chakra-ui/react";

import { Header } from "../../content/header";
import { Footer } from "../../content/footer";

import InputMask from 'react-input-mask';
import axios from "axios";

interface FormData {
  nome: string;
  responsavel: string;
  dataNascimento: string;
  observacao: string;
  turma: string;
}

interface AlertState {
  status: string;
  mensagem: string;
}

export function RNA() {
  const initialState: FormData = {
    nome: '',
    responsavel: '',
    dataNascimento: '',
    observacao: '',
    turma: '',
  };

  const [formData, setFormData] = useState<FormData>(initialState);
  const [alerta, setAlerta] = useState<AlertState>({ status: '', mensagem: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formattedDataNascimento = formatarData(formData.dataNascimento);
    try {
      const response = await axios.post('http://localhost:3000/alunos', { ...formData, dataNascimento: formattedDataNascimento });
      if (response.status === 200) {
        setAlerta({ status: "success", mensagem: "Aluno adicionado com sucesso" });
        setFormData(initialState);
      } else {
        setAlerta({ status: "error", mensagem: "Erro ao adicionar aluno" });
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
      setAlerta({ status: "error", mensagem: "Erro ao adicionar aluno" });
    }
  };

  const formatarData = (data: string) => {
    const [dia, mes, ano] = data.split("/");
    return `${ano}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;
  };

  return (
    <>
      <Helmet>
        <title>Registrar novo aluno • Sistema Kids | Ministério Kids</title>
        <meta name="title" content="Registrar novo aluno • Sistema Kids | Ministério Kids" />
        <meta property="og:title" content="Registrar novo aluno • Sistema Kids | Ministério Kids" />
        <meta property="twitter:title" content="Registrar novo aluno • Sistema Kids | Ministério Kids" />
        <meta property="og:url" content="https://kids.catsflow.com/sistema/registrar/aluno" />
        <meta property="twitter:url" content="https://kids.catsflow.com/sistema/registrar/aluno" />
      </Helmet>
      <section className="_body _cadaluno">
        <Header />
        <main className="_main">
          <div className="error-container">
            {alerta.status && (
              <Alert status={alerta.status === 'success' ? 'success' : 'error'} className="_card alert">
                <div>{alerta.status === 'success' ? '✅' : '❌'}</div>
                <p>{alerta.mensagem}</p>
              </Alert>
            )}
          </div>
          <section className="_card _ca">
            <h2>Cadastrar aluno</h2>
            <form className="_div" onSubmit={handleSubmit}>
              <div className="_div">
                <input className="_input" type="text" placeholder="Nome do aluno" name="nome" value={formData.nome} onChange={handleChange} required />
                <input className="_input" type="text" placeholder="Nome do responsável" name="responsavel" value={formData.responsavel} onChange={handleChange} required />
                <InputMask className="_input" type="text" mask="99/99/9999" placeholder="Data de nascimento" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} required />
                <textarea className="_textarea" name="observacao" placeholder="Observação" value={formData.observacao} onChange={handleChange}></textarea>
                <label className="_select" htmlFor="selturma">
                  <Select className="camp" name="turma" title="Turma do aluno" value={formData.turma} onChange={handleChange} required>
                    <option value="" hidden>Selecionar turma</option>
                    <option value="Maternal">Maternal</option>
                    <option value="Juniores">Juniores</option>
                  </Select>
                </label>
              </div>
              <button title="Cadastrar aluno" className="_btn orange" type="submit">Cadastrar</button>
            </form>
          </section>
        </main>
        <Footer />
      </section>
    </>
  );
}
