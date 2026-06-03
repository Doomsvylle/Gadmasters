import NavBar      from './components/NavBar.jsx';
import Hero        from './components/Hero.jsx';
import CatalogStrip from './components/CatalogStrip.jsx';
import ProductsGrid from './components/ProductsGrid.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer       from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <CatalogStrip />
      <ProductsGrid />
      <ContactSection />
      <Footer />
    </>
  );
}
