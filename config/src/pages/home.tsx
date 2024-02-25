import React, { useEffect } from 'react';

export function Home() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = '/login';
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="_home">
      <img src="/config/assets/logo.svg" alt="Logo do Ministério Kids" width="196px" height="246px" />
      <img src="/config/assets/logotipo.svg" alt="Logotipo do Ministério Kids" width="199px" height="133px" />
    </main>
  );
}
