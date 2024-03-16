import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from 'react-helmet';
import { Select } from "@chakra-ui/react";

import { Header } from "../../content/header";
import { Footer } from "../../content/footer";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Loading } from "../../content/loading";

interface ChamadaJuniores {
  id: number;
  Data: string;
}

export function GAJ() {
  const [datasAulasJuniores, setDatasAulasJuniores] = useState<ChamadaJuniores[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDatasAulasJuniores() {
      try {
        const response = await axios.get<ChamadaJuniores[]>('http://localhost:3000/aulas/juniores/datas');
        setDatasAulasJuniores(response.data);
      } catch (error) {
        console.error('Erro ao buscar datas das aulas do maternal:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchDatasAulasJuniores();
  }, []);

  return (
    <section className="_turma">
      <Helmet>
        <title>Gerenciar aulas do juniores • Sistema Kids | Ministério Kids</title>
        <meta name="title" content="Gerenciar aulas do juniores • Sistema Kids | Ministério Kids" />
        <meta property="og:title" content="Gerenciar aulas do juniores • Sistema Kids | Ministério Kids" />
        <meta property="twitter:title" content="Gerenciar aulas do juniores • Sistema Kids | Ministério Kids" />

        <meta property="og:url" content="https://kids.catsflow.com/sistema/aulas/juniores" />
        <meta property="twitter:url" content="https://kids.catsflow.com/sistema/aulas/juniores" />
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
          <h2>Aulas do juniores</h2>
          <nav className="_div">
            {loading ? (
              <Loading />
            ) : (
              datasAulasJuniores.map((chamada, index) => (
                <a
                  key={index}
                  className="_btn"
                  href={`/chamada/juniores/${chamada.id}`} // Ajuste o href para incluir o chamadaID na URL
                  title={`Aula do juniores do dia ${format(new Date(chamada.Data), 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR })}`}>
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