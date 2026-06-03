import logoFull from '../assets/logo-full.webp';

export default function Footer() {
  return (
    <footer>
      <img src={logoFull} alt="Gadmasters" />
      <p className="footer-copy">
        © 2026 — Gadmasters SAC. Todos los derechos reservados.
      </p>
    </footer>
  );
}
