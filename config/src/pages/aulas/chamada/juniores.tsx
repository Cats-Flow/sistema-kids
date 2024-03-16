import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { Checkbox } from "@chakra-ui/react";

import { Header } from "../../../content/header";
import { Footer } from "../../../content/footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Loader } from "../../loader";

interface ChamadaJuniores {
  id: number;
  Data: string;
  Professor: string;
  Titulo: string;
  Alunos: AlunoChamadaJuniores[];
}

interface AlunoChamadaJuniores {
  id: number;
  NomeAluno: string;
  Presenca: string;
}

export function GCJ() {
  const { chamadaID } = useParams();
  const [chamada, setChamada] = useState<ChamadaJuniores | null>(null);

  useEffect(() => {
    async function fetchChamadaJuniores() {
      try {
        const response = await axios.get<ChamadaJuniores>(`http://localhost:3000/chamada/juniores/${chamadaID}`);
        setChamada(response.data);
      } catch (error) {
        console.error('Erro ao buscar chamada maternal:', error);
      }
    }

    fetchChamadaJuniores();
  }, [chamadaID]);

  if (!chamada) {
    return <Loader />;
  }

  return (
    <section className="_turma">
      <Helmet>
        <title>Gerenciar chamada do juniores • Sistema Kids | Ministério Kids</title>
        <meta name="title" content="Gerenciar chamada do juniores • Sistema Kids | Ministério Kids" />
        <meta property="og:title" content="Gerenciar chamada do juniores • Sistema Kids | Ministério Kids" />
        <meta property="twitter:title" content="Gerenciar chamada do juniores • Sistema Kids | Ministério Kids" />

        <meta property="og:url" content="https://kids.catsflow.com/sistema/aulas/juniores/chamada" />
        <meta property="twitter:url" content="https://kids.catsflow.com/sistema/aulas/juniores/chamada" />
      </Helmet>
      <Header />
      <main className="_main">
        <section className="_card">
          <h2>Chamada juniores</h2>
          <div className="_div">
            <input type="text" className="_input" placeholder="Data da aula" value={new Date(chamada.Data).toLocaleDateString('pt-BR')} disabled required />
            <input type="text" className="_input" placeholder="Professor" value={chamada.Professor} disabled required />
            <input type="text" className="_input" placeholder="Título da aula" value={chamada.Titulo} disabled required />
          </div>
        </section>
        <form name="Chamada juniores" className="_card alunos">
          <h2>Chamada do juniores</h2>
          <div className="_div">
            {chamada.Alunos.map(aluno => (
              <div key={aluno.id} className="_cnt">
                <p>{aluno.NomeAluno}</p>
                <Checkbox
                  name={`presenca_${aluno.id}`}
                  className="_btn check"
                  defaultChecked={aluno.Presenca === 'presente'}
                  disabled
                />
              </div>
            ))}
          </div>
        </form>
      </main>
      <Footer />
    </section>
  )
}