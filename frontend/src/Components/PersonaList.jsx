import React, { useEffect, useState } from 'react';
import { personaService } from '../Services/personaService';
import { PersonaCard } from './PersonaCard';

export const PersonaList = () => {
  const [personas, setPersonas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true);
        const data = await personaService.obtenerPersonas();
        setPersonas(data);
      } catch (err) {
        setError('No se pudo conectar con la base de datos.');
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, []);

  if (loading) return <div className="status-message">Cargando registros...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="list-container">
      <h2>Listado de Personas Registradas</h2>
      {personas.length === 0 ? (
        <p>No hay registros en la base de datos.</p>
      ) : (
        <div className="cards-grid">
          {personas.map((p) => (
            <PersonaCard key={p.id || p.document} persona={p} />
          ))}
        </div>
      )}
    </div>
  );
};


