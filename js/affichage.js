document.addEventListener('DOMContentLoaded', () => {

  // Récupérer le code SAE depuis l'URL
  const url = new URLSearchParams(window.location.search);
  const saeKey = url.get('sae');
  const sae = SAE[saeKey];

  // Si la SAE n'existe pas
  if (!sae) {
    document.querySelector('main').innerHTML = '<p class="error">SAE introuvable</p>';
    return;
  }

  // ============================================================================
  // CONSTRUCTION DU HTML
  // ============================================================================
  let html = '<div class="sae-detail">';

  // En-tête avec titre et informations principales
  html += '<header class="sae-header">';
  html += `<h1 class="sae-titre">${sae.titre}</h1>`;
  html += '<div class="sae-meta">';
  html += `<span class="sae-code">${saeKey}</span>`;
  html += `<span class="sae-semestre">Semestre ${sae.semestre}</span>`;
  html += '</div>';
  html += '</header>';

  // Compétences
  if (sae.compétences && sae.compétences.length > 0) {
    html += '<section class="sae-section">';
    html += '<h2 class="section-titre">Compétences</h2>';
    html += '<div class="competences-list">';
    sae.compétences.forEach(comp => {
      html += `<span class="competence-badge">${comp}</span>`;
    });
    html += '</div>';
    html += '</section>';
  }

  // Description
  if (sae.description) {
    html += '<section class="sae-section">';
    html += '<h2 class="section-titre">Description</h2>';
    html += `<div class="section-content">${sae.description}</div>`;
    html += '</section>';
  }

  // Apprentissages Critiques
  if (sae.AC && Object.keys(sae.AC).length > 0) {
    html += '<section class="sae-section">';
    html += '<h2 class="section-titre">Apprentissages Critiques</h2>';
    html += '<div class="ac-list">';
    for (let code in sae.AC) {
      html += '<div class="ac-item">';
      html += `<strong class="ac-code">${code}</strong>`;
      html += `<p class="ac-description">${sae.AC[code]}</p>`;
      html += '</div>';
    }
    html += '</div>';
    html += '</section>';
  }

  // Ressources
  if (sae.ressources && Object.keys(sae.ressources).length > 0) {
    html += '<section class="sae-section">';
    html += '<h2 class="section-titre">Ressources</h2>';
    html += '<div class="ressources-list">';
    for (let code in sae.ressources) {
      html += `<div class="ressource-item"><strong>${code}</strong> : ${sae.ressources[code]}</div>`;
    }
    html += '</div>';
    html += '</section>';
  }

  // Bouton PDF
  html += '<div class="pdf-section">';
  html += `<a href="pdf/${saeKey}.pdf" target="_blank" class="btn-pdf">`;
  html += '📄 Télécharger le PDF';
  html += '</a>';
  html += '</div>';

  html += '</div>'; // Fin .sae-detail

  // Injecter le HTML dans la page
  document.querySelector('main').innerHTML = html;

});