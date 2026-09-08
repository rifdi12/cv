/* ===== Project Detail Renderer (project.html only) ===== */
(function () {
  const root = document.getElementById('projectDetail');
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    root.innerHTML = `
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag">Not Found</span>
          <h1 class="page-header-title">Project Not Found</h1>
          <p class="page-header-desc">This project doesn't exist or the link is incorrect.</p>
        </div>
        <a href="portfolio.html" class="btn btn-primary">← Back to Portfolio</a>
      </div>
    `;
    return;
  }

  document.title = project.title + ' — Rifdi Ardhi Ramadhandi';
  const variant = PROJECTS.indexOf(project) % 3;
  const variantClass = variant === 1 ? 'variant-2' : variant === 2 ? 'variant-3' : '';

  root.innerHTML = `
    <div class="container">
      <a href="portfolio.html" class="project-back-link reveal">← Back to Portfolio</a>

      <div class="project-header reveal">
        <span class="section-tag">${project.category}</span>
        <h1 class="page-header-title" style="margin-bottom:6px;">${project.title}</h1>
        <p class="project-header-meta">${project.company} · ${project.role} · ${project.period}</p>
      </div>

      <div class="project-layout">
        <div class="project-main reveal from-left">
          <div class="project-cover-lg ${variantClass}${project.image ? ' has-image' : ''}">
            ${project.image
              ? `<img class="project-cover-img" src="${project.image}" alt="${project.title}" loading="lazy" />`
              : `<svg class="portfolio-icon" width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.4" viewBox="0 0 24 24">${project.iconSvg}</svg>`}
          </div>

          <h2 class="project-section-title">Overview</h2>
          <ul class="overview-list">
            ${project.overview.map(line => `<li>${line}</li>`).join('')}
          </ul>
        </div>

        <aside class="project-sidebar reveal from-right">
          <div class="fact-card">
            <h3 class="fact-card-title">Quick Facts</h3>
            <dl class="fact-list">
              <div class="fact-item"><dt>Category</dt><dd>${project.category}</dd></div>
              <div class="fact-item"><dt>Company</dt><dd>${project.company}</dd></div>
              <div class="fact-item"><dt>Role</dt><dd>${project.role}</dd></div>
              <div class="fact-item"><dt>Period</dt><dd>${project.period}</dd></div>
            </dl>
            <div class="fact-tags">
              ${project.tags.map(t => `<span>${t}</span>`).join('')}
            </div>
            <a href="index.html#contact" class="btn btn-primary fact-cta">Let's Talk</a>
          </div>
        </aside>
      </div>

      <div class="other-projects">
        <h2 class="project-section-title">Other Projects</h2>
        <div class="portfolio-grid">
          ${PROJECTS.filter(p => p.id !== project.id).slice(0, 3).map(p => `
            <a href="project.html?id=${p.id}" class="portfolio-card reveal">
              <div class="portfolio-cover${p.image ? ' has-image' : ''}">
                <span class="portfolio-ribbon">${p.category}</span>
                <span class="portfolio-period">${p.period}</span>
                ${p.image
                  ? `<img class="portfolio-cover-img" src="${p.image}" alt="${p.title}" loading="lazy" />`
                  : `<svg class="portfolio-icon" width="44" height="44" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24">${p.iconSvg}</svg>`}
              </div>
              <div class="portfolio-body">
                <h3 class="portfolio-title">${p.title}</h3>
                <p class="portfolio-meta">${p.company} · ${p.role}</p>
                <p class="portfolio-desc">${p.summary}</p>
                <span class="portfolio-view">View Details →</span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `;
})();
