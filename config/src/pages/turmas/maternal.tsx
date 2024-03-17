import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { Alert, Checkbox } from "@chakra-ui/react";

import { Header } from "../../content/header";
import { Footer } from "../../content/footer";
import { Loading } from "../../content/loading";

interface Aluno {
  id: number;
  nome: string;
  presente: string;
}

export function Maternal() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [loading, setLoading] = useState(true);
  const [professor, setProfessor] = useState("");
  const [tituloAula, setTituloAula] = useState("");
  const [dataAula, setDataAula] = useState(getFormattedDate());
  const [alerta, setAlerta] = useState({ status: "", mensagem: "" });

  useEffect(() => {
    async function fetchAlunosMaternal() {
      try {
        const response = await fetch('http://localhost:3000/alunos/maternal');
        if (response.ok) {
          const data = await response.json();
          setAlunos(data);
        } else {
          console.error('Erro ao buscar alunos do maternal');
        }
      } catch (error) {
        console.error('Erro ao conectar-se ao servidor:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchAlunosMaternal();
  }, []);

  const handleCheckboxChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedAlunos = [...alunos];
    updatedAlunos[index].presente = e.target.checked ? "presente" : "ausente";
    setAlunos(updatedAlunos);
  };

  const handleProfessorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProfessor(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataAula(e.target.value);
  };

  const handleTituloAulaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTituloAula(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const [dia, mes, ano] = dataAula.split("/");
    const dataFormatada = `${ano}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}T00:00:00`;

    const alunosChamada = alunos.map(aluno => ({
      nome: aluno.nome,
      presente: aluno.presente,
    }));

    try {
      const response = await fetch('http://localhost:3000/chamada/maternal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dataAula: dataFormatada, professor, tituloAula, alunos: alunosChamada }),
      });

      if (response.ok) {
        setAlerta({ status: "success", mensagem: "Chamada salva com sucesso" });
      } else {
        setAlerta({ status: "error", mensagem: "Erro ao salvar chamada" });
      }
    } catch (error) {
      console.error('Erro ao conectar-se ao servidor:', error);
      setAlerta({ status: "error", mensagem: "Erro ao conectar-se ao servidor" });
    }
  };

  return (
    <section className="_turma">
      <Helmet>
        <title>Turma do Maternal • Sistema Kids | Ministério Kids</title>
        <meta name="title" content="Turma do Maternal • Sistema Kids | Ministério Kids" />
        <meta property="og:title" content="Turma do Maternal • Sistema Kids | Ministério Kids" />
        <meta property="twitter:title" content="Turma do Maternal • Sistema Kids | Ministério Kids" />

        <meta property="og:url" content="https://kids.catsflow.com/sistema/turmas/maternal" />
        <meta property="twitter:url" content="https://kids.catsflow.com/sistema/turmas/maternal" />
      </Helmet>
      <Header />
      <form onSubmit={handleSubmit} className="_main">
        <section className="_card">
          <div className="_div">
            <label htmlFor="dataAula">Data da aula:</label>
            <input
              type="text"
              id="Data"
              name="dataAula"
              value={dataAula}
              onChange={handleDateChange}
            />
          </div>
          <div className="_div">
            <label htmlFor="professor">Professor:</label>
            <select
              id="professor"
              name="professor"
              value={professor}
              onChange={handleProfessorChange}
            >
              <option value="">Selecione o professor</option>
              <option value="Professor 1">Professor 1</option>
              <option value="Professor 2">Professor 2</option>
            </select>
          </div>
          <div className="_div">
            <label htmlFor="tituloAula">Título da aula:</label>
            <input
              type="text"
              id="tituloAula"
              name="tituloAula"
              value={tituloAula}
              onChange={handleTituloAulaChange}
            />
          </div>
        </section>
        <section className="_card alunos">
          <h2>Alunos do maternal</h2>
          {loading ? ( // Renderiza o Loader se loading for true
            <Loading />
          ) : (
            <div className="_div">
              {alunos.map((aluno, index) => (
                <div key={aluno.id} className="_cnt">
                  <p>{aluno.nome}</p>
                  <Checkbox
                    name={`presente_${index}`}
                    className="_btn check"
                    checked={aluno.presente === "presente"} // Verifica se aluno.presente é igual a "presente"
                    onChange={handleCheckboxChange(index)}
                  ></Checkbox>
                </div>
              ))}
            </div>
          )}
          <div className="_div">
            <button type="submit" title="Cadastrar aula" className="_btn orange cad">
              Cadastrar aula
            </button>
          </div>
        </section>
      </form>
      {alerta.status && (
        <Alert status={alerta.status === 'success' ? 'success' : 'error'} className="_card alert">
          <div>
            {alerta.status === 'success' ? '✅' : '❌'}
          </div>
          <p>{alerta.mensagem}</p>
        </Alert>
      )}
      <Footer />
    </section>
  )
}

function getFormattedDate() {
  const today = new Date();
  return today.toLocaleDateString('pt-BR');
}
