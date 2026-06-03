const BADGE_CLASS = { new: 'badge-new', hot: 'badge-hot', soon: 'badge-soon' };

const LaptopIcon = () => (
  <svg viewBox="0 0 90 70" fill="none">
    <rect x="4" y="4" width="82" height="50" rx="4" stroke="white" strokeWidth="3"/>
    <rect x="11" y="11" width="68" height="36" rx="1" fill="rgba(255,255,255,0.1)"/>
    <rect x="28" y="54" width="34" height="5" rx="1" fill="white"/>
    <rect x="16" y="59" width="58" height="3" rx="1.5" fill="white"/>
  </svg>
);

const DesktopIcon = () => (
  <svg viewBox="0 0 90 80" fill="none">
    <rect x="22" y="3" width="46" height="54" rx="3" stroke="white" strokeWidth="3"/>
    <rect x="29" y="10" width="32" height="28" rx="1" fill="rgba(255,255,255,0.1)"/>
    <rect x="30" y="57" width="30" height="4" rx="1" fill="white"/>
    <rect x="8"  y="61" width="74" height="4" rx="2" fill="white"/>
    <rect x="10" y="65" width="14" height="10" rx="2" fill="white"/>
    <rect x="66" y="65" width="14" height="10" rx="2" fill="white"/>
    <rect x="24" y="68" width="42" height="7" rx="2" fill="white"/>
  </svg>
);

const SoonIcon = () => (
  <svg viewBox="0 0 90 70" fill="none" opacity="0.4">
    <rect x="4" y="4" width="82" height="50" rx="4" stroke="white" strokeWidth="2.5" strokeDasharray="6 4"/>
  </svg>
);

function getIcon(category = '', badgeType = '') {
  if (badgeType === 'soon') return <SoonIcon />;
  if (category.toLowerCase().includes('desktop')) return <DesktopIcon />;
  return <LaptopIcon />;
}

export default function ProductCard({ product, onQuote }) {
  const { name, category, specs, price, badge, badgeType } = product;
  const specsLines = specs.split('\n');

  return (
    <div className="card">
      <div className="card-img">
        {badge && (
          <span className={`badge ${BADGE_CLASS[badgeType] || ''}`}>{badge}</span>
        )}
        {getIcon(category, badgeType)}
      </div>
      <div className="card-body">
        <p className="card-cat">{category}</p>
        <p className="card-name">{name}</p>
        <p className="card-specs">
          {specsLines.map((line, i) => (
            <span key={i}>{line}{i < specsLines.length - 1 && <br />}</span>
          ))}
        </p>
        <div className="card-foot">
          <span className="card-price">{price}</span>
          <button className="btn-quote" onClick={() => onQuote(name)}>
            Cotizar
          </button>
        </div>
      </div>
    </div>
  );
}
