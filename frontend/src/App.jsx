import React from 'react';
import { PersonaList } from '../src/Components/PersonaList';
import './index.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1>Sistema de Gestión - Taller React & Supabase</h1>
      </header>
      <main className="app-main">
        <PersonaList />
      </main>
    </div>
  );
}

export default App;

