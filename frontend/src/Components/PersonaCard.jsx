import React from 'react';

export const PersonaCard = ({ persona }) => {
  return (
    <div className="persona-card">
      <div className="card-header">
        <span className="card-avatar">{persona.nombre.charAt(0)}</span>
        <div>
          <h3 className="card-title">{persona.nombre}</h3>
          <span className="card-doc">Doc: {persona.documento}</span>
        </div>
      </div>
      <div className="card-body">
        <p><strong>Fecha de Nacimiento:</strong> {persona.fecha_nacimiento}</p>
      </div>
    </div>
  );
};
