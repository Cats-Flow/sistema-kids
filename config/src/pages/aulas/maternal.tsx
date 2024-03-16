import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { ptBR } from 'date-fns/locale';
import { Helmet } from 'react-helmet';
import { Select } from "@chakra-ui/react";

import { Header } from "../../content/header";
import { Footer } from "../../content/footer";
import { Loading } from "../../content/loading";

interface ChamadaMaternal {
  id: number;
  Data: string;
}

export function GAM() {
  const [datasAulasMaternal, setDatasAulasMaternal] = useState<ChamadaMaternal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDatasAulasMaternal() {
      try {
        const response = await axios.get<ChamadaMaternal[]>('http://localhost:3000/aulas/maternal/datas');
        setDatasAulasMaternal(response.data);
      } catch (error) {
        console.error('Erro ao buscar datas das aulas do maternal:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchDatasAulasMaternal();
  }, []);

  return (
    <section className="_turma">
      <Helmet>
        <title>Gerenciar aulas do maternal • Sistema Kids | Ministério Kids</title>
        <meta name="title" content="Gerenciar aulas do maternal • Sistema Kids | Ministério Kids" />
        <meta property="og:title" content="Gerenciar aulas do maternal • Sistema Kids | Ministério Kids" />
        <meta property="twitter:title" content="Gerenciar aulas do maternal • Sistema Kids | Ministério Kids" />

        <meta property="og:url" content="https://kids.catsflow.com/sistema/aulas/maternal" />
        <meta property="twitter:url" content="https://kids.catsflow.com/sistema/aulas/maternal" />
      </Helmet>
      <Header />
      <main className="_main">
        <section className="_card">
          <h2>Ferramentas</h2>
          <div className="_div">
            <label className="_select" htmlFor="selturma">
              <Select className="camp" name="mesdaaula" title="Mês da aula" required>
                <option value="" hidden>Selecione o mês</option>
              </Select>
            </label>
            <label className="_select" htmlFor="selturma">
              <Select className="camp" name="professor" title="Professor" required>
                <option value="" hidden>Selecione o professor</option>
              </Select>
            </label>
          </div>
        </section>
        <section className="_card">
          <h2>Aulas do maternal</h2>
          <nav className="_div">
            {loading ? (
              <Loading />
            ) : (
              datasAulasMaternal.map((chamada, index) => (
                <a
                  key={index}
                  className="_btn"
                  href={`/chamada/maternal/${chamada.id}`} // Ajuste o href para incluir o chamadaID na URL
                  title={`Aula do maternal do dia ${format(new Date(chamada.Data), 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR })}`}>
                  {`${format(new Date(chamada.Data), 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR })}`}
                </a>
              ))
            )}
          </nav>
        </section>
      </main>
      <Footer />
    </section>
  )
}