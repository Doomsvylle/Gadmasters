import { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductsGrid() {
  const [products, setProducts] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState(null);

  useEffect(() => {
    fetch('/api/products')
      .then((r) => {
        if (!r.ok) throw new Error('No se pudo cargar los productos');
        return r.json();
      })
      .then((data) => { setProducts(data); setLoading(false); })
      .catch((err) => { setError(err.message); setLoading(false); });
  }, []);

  function scrollToContact(productName) {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    // Emite evento para que ContactForm pre-llene el mensaje
    window.dispatchEvent(new CustomEvent('quote', { detail: productName }));
  }

  return (
    <section className="products-section" id="productos">
      <div className="section-head">
        <p className="section-label">Nuestros equipos</p>
        <h2 className="section-title">Encuentra tu<br />máquina ideal</h2>
      </div>

      {loading && <p className="loading">Cargando equipos...</p>}
      {error   && <p className="loading" style={{ color: '#f87171' }}>{error}</p>}

      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} onQuote={scrollToContact} />
        ))}
      </div>
    </section>
  );
}
