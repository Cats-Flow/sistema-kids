const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const { formatISO } = require('date-fns');

const app = express();
const prisma = new PrismaClient();

const TURMA_JUNIORES = 'Juniores';
const TURMA_MATERNAL = 'Maternal';
const STATUS_AUSENTE = 'ausente';

app.use(express.json());
app.use(cors());

// Função para formatar a data para ISO-8601 DateTime
function formatarData(data) {
  return formatISO(new Date(data));
}

// Função para tratar erros centralizada
function handleErro(res, mensagemErro, status = 500) {
  console.error(mensagemErro);
  res.status(status).json({ error: mensagemErro });
}

// Rota para salvar alunos
app.post('/alunos', async (req, res) => {
  const { nome, responsavel, dataNascimento, observacao, turma } = req.body;
  const dataNascimentoFormatada = formatarData(dataNascimento);

  try {
    const aluno = await prisma.aluno.create({
      data: {
        nome,
        responsavel,
        dataNascimento: dataNascimentoFormatada,
        observacao,
        turma,
      },
    });
    res.json(aluno);
  } catch (error) {
    handleErro(res, 'Erro ao salvar aluno');
  }
});

// Rota para buscar os alunos com o campo turma: Juniores
app.get('/alunos/juniores', async (req, res) => {
  try {
    const alunosJuniores = await prisma.aluno.findMany({
      where: {
        turma: TURMA_JUNIORES,
      },
    });
    res.json(alunosJuniores);
  } catch (error) {
    handleErro(res, 'Erro ao buscar alunos do juniores');
  }
});

// Rota para salvar a chamada dos Juniores
app.post('/chamada/juniores', async (req, res) => {
  const { dataAula, professor, tituloAula, alunos } = req.body;
  const dataAulaFormatada = formatarData(dataAula);

  try {
    await prisma.chamadaJuniores.create({
      data: {
        Data: dataAulaFormatada,
        Professor: professor,
        Titulo: tituloAula, // Inclui o título da aula
        Alunos: {
          create: alunos.map(aluno => ({
            NomeAluno: aluno.nome,
            Presenca: aluno.presente || STATUS_AUSENTE, // Definir "ausente" se não houver presença definida
          })),
        },
      },
    });
    res.json({ message: 'Chamada salva com sucesso' });
  } catch (error) {
    handleErro(res, 'Erro ao salvar chamada');
  }
});

// Rota para buscar os alunos com o campo turma: Maternal
app.get('/alunos/maternal', async (req, res) => {
  try {
    const alunosMaternal = await prisma.aluno.findMany({
      where: {
        turma: TURMA_MATERNAL,
      },
    });
    res.json(alunosMaternal);
  } catch (error) {
    handleErro(res, 'Erro ao buscar alunos do maternal');
  }
});

// Rota para salvar a chamada dos Maternal
app.post('/chamada/maternal', async (req, res) => {
  const { dataAula, professor, tituloAula, alunos } = req.body;
  const dataAulaFormatada = formatarData(dataAula);

  try {
    await prisma.chamadaMaternal.create({
      data: {
        Data: dataAulaFormatada,
        Professor: professor,
        Titulo: tituloAula, // Inclui o título da aula
        Alunos: {
          create: alunos.map(aluno => ({
            NomeAluno: aluno.nome,
            Presenca: aluno.presente || STATUS_AUSENTE, // Definir "ausente" se não houver presença definida
          })),
        },
      },
    });
    res.json({ message: 'Chamada salva com sucesso' });
  } catch (error) {
    handleErro(res, 'Erro ao salvar chamada');
  }
});

// Rota para buscar as datas das aulas do Maternal
app.get('/aulas/maternal/datas', async (req, res) => {
  try {
    // Adicione um log para indicar que a rota foi acessada
    console.log('Recebida requisição para buscar datas das aulas do maternal');

    const datasAulasMaternal = await prisma.chamadaMaternal.findMany({
      select: {
        id: true,
        Data: true,
      }
    });

    res.json(datasAulasMaternal);
  } catch (error) {
    // Adicione um log para indicar um erro
    console.error('Erro ao buscar datas das aulas do maternal:', error);
    handleErro(res, 'Erro ao buscar datas das aulas do maternal');
  }
});

// Rota para buscar os detalhes da chamada do Maternal por ID
app.get('/chamada/maternal/:chamadaID', async (req, res) => {
  const chamadaID = parseInt(req.params.chamadaID);

  try {
    const chamada = await prisma.chamadaMaternal.findUnique({
      where: {
        id: chamadaID,
      },
      include: {
        Alunos: true,
      },
    });

    if (!chamada) {
      return res.status(404).json({ message: 'Chamada não encontrada' });
    }

    res.json(chamada);
  } catch (error) {
    handleErro(res, 'Erro ao buscar detalhes da chamada maternal', 500);
  }
});

// Rota para buscar as datas das aulas do Juniores
app.get('/aulas/juniores/datas', async (req, res) => {
  try {
    // Adicione um log para indicar que a rota foi acessada
    console.log('Recebida requisição para buscar datas das aulas do juniores');

    const datasAulasJuniores = await prisma.chamadaJuniores.findMany({
      select: {
        id: true,
        Data: true,
      }
    });

    res.json(datasAulasJuniores);
  } catch (error) {
    // Adicione um log para indicar um erro
    console.error('Erro ao buscar datas das aulas do juniores:', error);
    handleErro(res, 'Erro ao buscar datas das aulas do juniores');
  }
});

// Rota para buscar os detalhes da chamada do Juniores por ID
app.get('/chamada/juniores/:chamadaID', async (req, res) => {
  const chamadaID = parseInt(req.params.chamadaID);

  try {
    const chamada = await prisma.chamadaJuniores.findUnique({
      where: {
        id: chamadaID,
      },
      include: {
        Alunos: true,
      },
    });

    if (!chamada) {
      return res.status(404).json({ message: 'Chamada não encontrada' });
    }

    res.json(chamada);
  } catch (error) {
    handleErro(res, 'Erro ao buscar detalhes da chamada juniores', 500);
  }
});

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
