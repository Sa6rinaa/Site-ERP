import React, { useState } from 'react';


const modulesParSecteur = {
  logistique: [
    '📦 Gestion des stocks',
    '🚚 Suivi des livraisons',
    '📋 Gestion des entrepôts',
  ],
  commerce: [
    '🛒 Gestion des produits',
    '🧾 Facturation',
    '👥 Suivi client',
  ],
  services: [
    '📅 Planning',
    '📈 Suivi des interventions',
    '💬 Gestion des clients',
  ],
  production: [
    '🏭 Gestion de production',
    '🔧 Maintenance',
    '📊 Suivi qualité',
  ],
};



const SimulateurModules = () => {
  const [secteur, setSecteur] = useState('');
  const [modules, setModules] = useState([]);

  const handleChange = (e) => {
    const selected = e.target.value;
    setSecteur(selected);
    setModules(modulesParSecteur[selected] || []);
  };

  return (
    <section className="simulateur-container">
      <div className="simulateur-left">
        <h1 className="simulateur-title">
          <span className="highlighted-text">Ylinar</span> une <strong>ERP</strong> pour gérer <br />
          pour votre : <span className="highlighted-text">{secteur ? secteur.charAt(0).toUpperCase() + secteur.slice(1) : '...'}</span>
        </h1>
        <p>Une solution ERP complète, simple et performante.</p>

        <select value={secteur} onChange={handleChange} className="secteur-select">
          <option value="">-- Choisissez un secteur --</option>
          <option value="logistique">Logistique</option>
          <option value="commerce">Commerce</option>
          <option value="services">Services</option>
          <option value="production">Production</option>
        </select>

        {modules.length > 0 && (
          <div className="modules-box">
            <h3>Modules suggérés :</h3>
            <ul>
              {modules.map((mod, index) => (
                <li key={index}>{mod}</li>
              ))}
            </ul>
            <a href="#features" className="modules-link">➕ En savoir plus sur ces modules</a>
          </div>
        )}
      </div>

     
    </section>
  );
};

export default SimulateurModules;
