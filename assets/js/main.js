document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('[data-tab]');
    const tabs = document.querySelectorAll('.tab-content');
    const menu = document.querySelector('nav ul');

    function mostrarTab(tabId) {
        // Ocultar todas las pestañas
        tabs.forEach(tab => tab.style.display = 'none');

        // Mostrar la pestaña seleccionada
        const tab = document.getElementById(tabId);
        if (tab) tab.style.display = 'block';

        // Actualizar clase activa en el menú
        links.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`[data-tab="${tabId}"]`);
        if (activeLink) activeLink.classList.add('active');

        // Cerrar el menú hamburguesa
        if (menu) menu.classList.remove('show');
    }

    // Listener para todos los enlaces con data-tab
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            mostrarTab(tabId);
        });
    });

    // 🟢 Mostrar la pestaña "inicio" al cargar la página
    mostrarTab('inicio');

    // ---- MENÚ HAMBURGUESA ----
    const hamburger = document.querySelector('.hamburger');
    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            menu.classList.toggle('show');
        });
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

/* ============================================
   MODAL DE IMÁGENES
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('productModal');
    const modalImg = document.getElementById('modalImg');
    const images = document.querySelectorAll('.product-img');

    images.forEach(img => {
        img.addEventListener('click', function() {
            // Usa la imagen grande (data-full) o la normal si no existe
            const srcFull = this.getAttribute('data-full') || this.src;
            modal.style.display = 'flex';
            modalImg.src = srcFull;
        });
    });
});

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}