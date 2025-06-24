import React, { useState } from 'react';

// Dictionnaire des modules par secteur
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
  const [modules, setModules] = useState([]);
  const [secteur, setSecteur] = useState('');


  const handleMouseEnter = (secteur) => {
    setSecteur(secteur);
    setModules(modulesParSecteur[secteur] || []);
  };

  return (
    <section className="simulateur-container">
      <div className="simulateur-left">
        <h1 className="simulateur-title">
          <span className="highlighted-text">Ylinar</span> une <strong>ERP</strong> pour gérer <br />
          pour votre : <span className="highlighted-text">{secteur ? secteur.charAt(0).toUpperCase() + secteur.slice(1) : '...'}</span>
        </h1>
        <p>Une solution ERP complète, simple et performante pour votre entreprise.</p>

        {/* Conteneur des icônes de secteurs */}
        <div className="secteurs-container">
          <div
            className="secteur-icon"
            onMouseEnter={() => handleMouseEnter('logistique')}
            title="Logistique"
          >
            📦
          </div>
          <div
            className="secteur-icon"
            onMouseEnter={() => handleMouseEnter('commerce')}
            title="Commerce"
          >
            🛒
          </div>
          <div
            className="secteur-icon"
            onMouseEnter={() => handleMouseEnter('services')}
            title="Services"
          >
            📅
          </div>
          <div
            className="secteur-icon"
            onMouseEnter={() => handleMouseEnter('production')}
            title="Production"
          >
            🏭
          </div>
        </div>

        {/* Affichage des modules suggérés */}
        {modules.length > 0 && (
          <div className="modules-box">
            <h3>Modules suggérés :</h3>
            <ul>
              {modules.map((mod, index) => (
                <li key={index}>{mod}</li>
              ))}
            </ul>
          
          </div>
        )}
      </div>

      <div className="simulateur-right">
        {/* Ajouter une image dynamique si nécessaire */}
        <img
  className="simulateur-image fleche-inversee"
  src="/../images/giphy4.jpg"
  alt="ERP illustration"
/>
      </div>
    </section>
  );
};

export default SimulateurModules;
