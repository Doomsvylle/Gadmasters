/* ============================================
   PESTAÑAS
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('[data-tab]');
    const tabs = document.querySelectorAll('.tab-content');
    const heroSection = document.getElementById('heroSection');

    function mostrarTab(tabId) {
        // Ocultar todas las pestañas
        tabs.forEach(tab => tab.style.display = 'none');
        // Ocultar el hero (solo si no es la pestaña "inicio")
        if (heroSection) heroSection.style.display = 'none';

        // Mostrar la pestaña seleccionada
        const tab = document.getElementById(tabId);
        if (tab) tab.style.display = 'block';

        // Actualizar clase activa en el menú
        links.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`[data-tab="${tabId}"]`);
        if (activeLink) activeLink.classList.add('active');
    }

    // Al hacer clic en un enlace del menú
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            mostrarTab(tabId);
        });
    });

    // Mostrar productos por defecto
    mostrarTab('productos');
});

/* ============================================
   FORMULARIO DE CONTACTO (solo frontend)
   ============================================ */
function sendF() {
    const n = document.getElementById('fN').value.trim();
    const p = document.getElementById('fP').value.trim();
    const e = document.getElementById('fE').value.trim();
    const m = document.getElementById('fM').value.trim();

    if (!n || !p) {
        alert('Por favor ingresa tu nombre y teléfono.');
        return;
    }

    // Simulación de envío (solo frontend)
    const suc = document.getElementById('suc');
    suc.style.display = 'block';
    suc.textContent = '✓ Mensaje recibido (modo frontend). Pronto nos pondremos en contacto.';

    // Limpiar formulario
    document.getElementById('fN').value = '';
    document.getElementById('fP').value = '';
    document.getElementById('fE').value = '';
    document.getElementById('fM').value = '';

    setTimeout(() => suc.style.display = 'none', 5000);
}

/* ============================================
   COTIZACIÓN (redirige a la pestaña de contacto)
   ============================================ */
function mostrarCotizacion(producto) {
    // Cambiar a la pestaña de contacto
    const link = document.querySelector('[data-tab="contactenos"]');
    if (link) link.click();

    // Prellenar el mensaje con el producto
    setTimeout(() => {
        const mensaje = document.getElementById('fM');
        if (mensaje) {
            mensaje.value = `Me interesa cotizar el producto: ${producto}`;
        }
    }, 300);
/* ============================================
   MENÚ HAMBURGUESA - Función global
   ============================================ */
  // ---- MENÚ HAMBURGUESA (Segunda opción, sin onclick) ----
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('nav ul');
    
    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            menu.classList.toggle('show');
            console.log('Click detectado'); // Verás esto en la consola si funciona
        });
    } else {
        console.log('No se encontró el botón o el menú');
    }
} // <-- Esta es la llave de cierre correcta