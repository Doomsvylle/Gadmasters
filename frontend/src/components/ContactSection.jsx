import { useState, useEffect, useRef } from 'react';
import logoIcon from '../assets/logo-icon.webp';

const WA_NUMBER = '51921558694';

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
    </svg>
  );
}
function IconMail() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );
}
function IconFB() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );
}

export default function ContactSection() {
  const [form,    setForm]    = useState({ name: '', phone: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors,  setErrors]  = useState({});
  const nameRef = useRef(null);

  // Escucha el evento 'quote' emitido desde ProductsGrid
  useEffect(() => {
    const handler = (e) => {
      setForm((prev) => ({ ...prev, message: `Me interesa cotizar: ${e.detail}` }));
      nameRef.current?.focus();
    };
    window.addEventListener('quote', handler);
    return () => window.removeEventListener('quote', handler);
  }, []);

  function validate() {
    const errs = {};
    if (!form.name.trim())  errs.name  = 'El nombre es obligatorio';
    if (!form.phone.trim()) errs.phone = 'El teléfono es obligatorio';
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSending(true);

    try {
      // 1. Guarda en MongoDB
      await fetch('/api/contacts', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });

      // 2. Abre WhatsApp
      const text = encodeURIComponent(
        `Hola Gadmasters! 👋\nNombre: ${form.name}\nTeléfono: ${form.phone}` +
        (form.message ? `\nMensaje: ${form.message}` : '')
      );
      window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');

      setSuccess(true);
      setForm({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="contact-section" id="contacto">
      {/* Info */}
      <div className="contact-info">
        <h2>Consultas<br />&amp; cotizaciones</h2>
        <p>
          Completa el formulario y te respondemos a la brevedad.
          También puedes escribirnos por WhatsApp o Facebook.
        </p>

        <div className="contact-detail">
          <div className="contact-icon"><IconPhone /></div>
          <div className="contact-text">
            <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">
              +51 921 558 694
            </a>
          </div>
        </div>
        <div className="contact-detail">
          <div className="contact-icon"><IconMail /></div>
          <div className="contact-text">
            <a href="mailto:gadmasterventas@gmail.com">gadmasterventas@gmail.com</a>
          </div>
        </div>
        <div className="contact-detail">
          <div className="contact-icon"><IconFB /></div>
          <div className="contact-text">
            <a href="https://www.facebook.com/gadmasters" target="_blank" rel="noreferrer">
              @gadmasters
            </a>
          </div>
        </div>

        <img className="contact-logo" src={logoIcon} alt="" />
      </div>

      {/* Form */}
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Nombre completo</label>
          <input
            ref={nameRef}
            type="text"
            placeholder="Tu nombre completo"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>WhatsApp / Teléfono</label>
          <input
            type="tel"
            placeholder="+51 9XX XXX XXX"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {errors.phone && <span className="form-error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Correo electrónico</label>
          <input
            type="email"
            placeholder="tucorreo@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Mensaje o consulta</label>
          <textarea
            rows="4"
            placeholder="¿Qué equipo buscas o qué necesitas?"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        <button className="btn-send" type="submit" disabled={sending}>
          {sending ? 'Enviando...' : 'Enviar por WhatsApp →'}
        </button>

        <div className={`form-success ${success ? 'show' : ''}`}>
          ✓ ¡Consulta enviada! Te respondemos pronto.
        </div>
      </form>
    </section>
  );
}
