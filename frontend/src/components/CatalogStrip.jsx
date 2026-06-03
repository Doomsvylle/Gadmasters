export default function CatalogStrip() {
  return (
    <div className="strip" id="catalogo">
      <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: 'rgba(255,255,255,0.8)' }}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
      </svg>
      <span>Catálogo Oficial Gadmasters 2026 — Actualización próximamente</span>
      <a href="/Catalogo.pdf" target="_blank" className="strip-link">
        <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: 'var(--navy)' }}>
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        </svg>
        Descargar PDF
      </a>
    </div>
  );
}
