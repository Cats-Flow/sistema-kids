import React, { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    const verificarLogin = () => {
      // Aqui você pode implementar a lógica para verificar se o usuário está logado
      const usuarioLogado = false; // Supondo que o usuário não esteja logado inicialmente
      if (!usuarioLogado) {
        // Redireciona para a página de login
        window.location.href = '/login';
      }
    };

    // Simula o carregamento do conteúdo da página
    setTimeout(verificarLogin, 2000); // Redireciona após 2 segundos (tempo simulado)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Executa apenas uma vez após a montagem do componente

  return (
    <main className="_home">
      <img src="/config/assets/logo.svg" alt="Logo do Ministério Kids" width="196px" height="246px" />
      <img src="/config/assets/logotipo.svg" alt="Logotipo do Ministério Kids" width="199px" height="133px" />
    </main>
  );
};

export default Home;
