# Gadmasters — React + Node + MongoDB

## Estructura del proyecto
```
gadmasters/
├── frontend/                    ← React + Vite
│   ├── index.html
│   ├── vite.config.js           ← proxy /api → localhost:4000
│   ├── package.json
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css            ← todos los estilos
│       ├── assets/
│       │   ├── logo-full.webp   ← ¡COPIAR MANUALMENTE!
│       │   └── logo-icon.webp   ← ¡COPIAR MANUALMENTE!
│       └── components/
│           ├── NavBar.jsx
│           ├── Hero.jsx
│           ├── CatalogStrip.jsx
│           ├── ProductsGrid.jsx  ← fetch GET /api/products
│           ├── ProductCard.jsx
│           ├── ContactSection.jsx ← POST /api/contacts + WhatsApp
│           └── Footer.jsx
│
└── backend/                     ← Node + Express + MongoDB
    ├── .env.example
    ├── package.json
    └── src/
        ├── server.js
        ├── models/
        │   ├── Product.js
        │   └── Contact.js
        ├── controllers/
        │   ├── productController.js
        │   └── contactController.js
        ├── routes/
        │   ├── products.js
        │   └── contacts.js
        ├── middleware/
        │   └── errorHandler.js
        └── scripts/
            └── seed.js          ← pobla la DB con productos iniciales
```

## Setup paso a paso

### 1. Clona / descarga el proyecto
```bash
cd gadmasters
```

### 2. Configura el Backend
```bash
cd backend
npm install
cp .env.example .env
```
Edita `.env` con tu URI de MongoDB Atlas:
```
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net/gadmasters
FRONTEND_URL=http://localhost:5173
```

### 3. Pobla la base de datos (una sola vez)
```bash
node src/scripts/seed.js
```

### 4. Arranca el Backend
```bash
npm run dev
# → http://localhost:4000
```

### 5. Copia los logos al frontend
Copia tus archivos webp a:
```
frontend/src/assets/logo-full.webp
frontend/src/assets/logo-icon.webp
```

### 6. Arranca el Frontend
```bash
cd ../frontend
npm install
npm run dev
# → http://localhost:5173
```

## API Endpoints

| Método | Ruta                  | Descripción                       |
|--------|-----------------------|-----------------------------------|
| GET    | /api/products         | Lista todos los productos         |
| GET    | /api/products/:id     | Un producto por ID                |
| POST   | /api/products         | Crear producto (admin)            |
| PUT    | /api/products/:id     | Editar producto (admin)           |
| DELETE | /api/products/:id     | Eliminar producto (admin)         |
| POST   | /api/contacts         | Guardar consulta del formulario   |
| GET    | /api/contacts         | Listar consultas (admin)          |
| GET    | /api/health           | Health check                      |

## Deploy

### Frontend → Vercel
1. Sube la carpeta `frontend/` a GitHub
2. Conecta el repo en vercel.com
3. En variables de entorno: `VITE_API_URL=https://tu-backend.render.com`

### Backend → Render.com (gratis)
1. Sube la carpeta `backend/` a GitHub
2. Nuevo Web Service en render.com
3. Build command: `npm install`
4. Start command: `npm start`
5. Variables de entorno: agrega `MONGO_URI`, `FRONTEND_URL`

### Base de datos → MongoDB Atlas (gratis)
1. Crea cuenta en mongodb.com/atlas
2. Crea un cluster gratuito (M0)
3. En Network Access → Allow from anywhere (0.0.0.0/0)
4. Copia la URI de conexión a tu .env

## Próximos pasos sugeridos
- [ ] Agregar JWT para proteger rutas admin (POST/PUT/DELETE products)
- [ ] Panel admin para gestionar productos desde el navegador
- [ ] Nodemailer: enviar email de notificación cuando llega una consulta
- [ ] Paginación en /api/products cuando el catálogo crezca
