import express       from 'express';
import cors          from 'cors';
import dotenv        from 'dotenv';
import mongoose      from 'mongoose';
import productRoutes from './routes/products.js';
import contactRoutes from './routes/contacts.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 4000;

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());

// ── Routes ──────────────────────────────────────────────────────────────────
app.use('/api/products', productRoutes);
app.use('/api/contacts', contactRoutes);

// ── Health check ────────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

// ── Error handler (debe ir último) ──────────────────────────────────────────
app.use(errorHandler);

// ── Conectar MongoDB y arrancar ──────────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB conectado');
    app.listen(PORT, () => console.log(`🚀 Backend en http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('❌ Error MongoDB:', err.message);
    process.exit(1);
  });
