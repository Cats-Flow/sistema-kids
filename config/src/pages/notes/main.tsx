import React from 'react'
import ReactDOM from 'react-dom/client'
import { Notas } from '.'

ReactDOM.createRoot(document.getElementById('notes')!).render(
  <React.StrictMode>
    <Notas />
  </React.StrictMode>
)
