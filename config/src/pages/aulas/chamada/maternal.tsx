import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Checkbox } from "@chakra-ui/react";

import { Header } from "../../../content/header";
import { Footer } from "../../../content/footer";
import { Loader } from "../../loader";

interface ChamadaMaternal {
  id: number;
  Data: string;
  Professor: string;
  Titulo: string;
  Alunos: AlunoChamadaMaternal[];
}

interface AlunoChamadaMaternal {
  id: number;
  NomeAluno: string;
  Presenca: string;
}

export function GCM() {
  const { chamadaID } = useParams();
  const [chamada, setChamada] = useState<ChamadaMaternal | null>(null);

  useEffect(() => {
    async function fetchChamadaMaternal() {
      try {
        const response = await axios.get<ChamadaMaternal>(`http://localhost:3000/chamada/maternal/${chamadaID}`);
        setChamada(response.data);
      } catch (error) {
        console.error('Erro ao buscar chamada maternal:', error);
      }
    }

    fetchChamadaMaternal();
  }, [chamadaID]);

  if (!chamada) {
    return <Loader />;
  }

  return (
    <section className="_turma">
      <Helmet>
        <title>Gerenciar chamada do maternal • Sistema Kids | Ministério Kids</title>
        <meta name="title" content="Gerenciar chamada do maternal • Sistema Kids | Ministério Kids" />
        <meta property="og:title" content="Gerenciar chamada do maternal • Sistema Kids | Ministério Kids" />
        <meta property="twitter:title" content="Gerenciar chamada do maternal • Sistema Kids | Ministério Kids" />

        <meta property="og:url" content="https://kids.catsflow.com/sistema/aulas/maternal/chamada" />
        <meta property="twitter:url" content="https://kids.catsflow.com/sistema/aulas/maternal/chamada" />
      </Helmet>
      <Header />
      <main className="_main">
        <section className="_card">
          <h2>Chamada maternal</h2>
          <div className="_div">
            <input type="text" className="_input" placeholder="Data da aula" value={new Date(chamada.Data).toLocaleDateString('pt-BR')} disabled required />
            <input type="text" className="_input" placeholder="Professor" value={chamada.Professor} disabled required />
            <input type="text" className="_input" placeholder="Título da aula" value={chamada.Titulo} disabled required />
          </div>
        </section>
        <form name="Chamada maternal" className="_card alunos">
          <h2>Chamada do maternal</h2>
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