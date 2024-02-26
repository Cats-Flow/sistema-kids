import express from "express";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const port = 5000;

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const alunosDir = path.join(__dirname, "config", "server", "alunos");

// Rota para adicionar um novo aluno
app.post("/api/alunos", async (req, res) => {
  try {
    const { nome, dataNascimento, responsavel, observacao, turma } = req.body;

    // Verifica se a turma é válida
    if (turma !== "maternal" && turma !== "juniores") {
      return res.status(400).send("Turma inválida");
    }

    // Cria um objeto com os dados do aluno
    const aluno = {
      nome,
      dataNascimento,
      responsavel,
      observacao,
    };

    // Verifica se a observação está presente
    if (!observacao) {
      delete aluno.observacao; // Remove o campo observacao se estiver vazio
    }

    // Caminho do arquivo JSON da turma
    const filePath = path.join(alunosDir, `${turma}.json`);

    // Carrega os alunos da turma (se o arquivo existir)
    let alunos = [];
    try {
      const fileData = await fs.readFile(filePath);
      alunos = JSON.parse(fileData);
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }

    // Adiciona o novo aluno à lista
    alunos.push(aluno);

    // Salva a lista atualizada no arquivo JSON
    await fs.writeFile(filePath, JSON.stringify(alunos, null, 2));

    res.status(201).send("Aluno adicionado com sucesso");
  } catch (error) {
    console.error("Erro ao adicionar aluno:", error);
    res.status(500).send("Erro ao adicionar aluno");
  }
});

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor backend está rodando na porta ${port}`);
});
