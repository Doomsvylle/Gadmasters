/* ============================================
   PESTAÑAS
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('[data-tab]');
    const tabs = document.querySelectorAll('.tab-content');
    const heroSection = document.getElementById('heroSection');
    const menu = document.querySelector('nav ul'); // Asegúrate de tener esta variable
    
    function mostrarTab(tabId) {
        tabs.forEach(tab => tab.style.display = 'none');
        //desaparece el menu principal
        //if (heroSection) heroSection.style.display = 'none';

        const tab = document.getElementById(tabId);
        if (tab) tab.style.display = 'block';

        links.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`[data-tab="${tabId}"]`);
        if (activeLink) activeLink.classList.add('active');
         // 🟢 Cerrar el menú hamburguesa si está abierto
        if (menu) {
            menu.classList.remove('show');
        }    
    }
    // Cerrar el menú hamburguesa después de seleccionar una opción
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            mostrarTab(tabId);
        });
    });

    // Mostrar productos por defecto
    mostrarTab('productos');

    // ---- MENÚ HAMBURGUESA ----
    const hamburger = document.querySelector('.hamburger');
    

    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            menu.classList.toggle('show');
            console.log('✅ Click detectado - menú toggled');
        });
    } else {
        console.error('❌ No se encontró el botón o el menú');
    }
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

    const suc = document.getElementById('suc');
    suc.style.display = 'block';
    suc.textContent = '✓ Mensaje recibido (modo frontend). Pronto nos pondremos en contacto.';

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
    const link = document.querySelector('[data-tab="contactenos"]');
    if (link) link.click();

    setTimeout(() => {
        const mensaje = document.getElementById('fM');
        if (mensaje) {
            mensaje.value = `Me interesa cotizar el producto: ${producto}`;
        }
    }, 300);
}