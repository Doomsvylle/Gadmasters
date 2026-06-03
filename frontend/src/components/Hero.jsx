import logoFull from '../assets/logo-full.webp';

const STATS = [
  { value: '100%', label: 'Garantizado' },
  { value: '24h',  label: 'Respuesta'   },
  { value: 'Lima', label: 'Cobertura'   },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <span className="eyebrow">Lima, Perú · Tecnología de confianza</span>
        <h1>
          Equipos que<br />
          <em>elevan</em><br />
          tu nivel
        </h1>
        <p className="hero-sub">
          Computadoras de alto rendimiento para trabajo, estudio y gaming.
          Asesoría personalizada y soporte técnico especializado.
        </p>
        <div className="hero-actions">
          <a href="#productos" className="btn-primary">Ver equipos →</a>
          <a href="#catalogo"  className="btn-outline">Catálogo 2026</a>
        </div>
        <div className="hero-stats">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="stat-val">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-img">
        <img src={logoFull} alt="Gadmasters" />
      </div>
    </section>
  );
}
