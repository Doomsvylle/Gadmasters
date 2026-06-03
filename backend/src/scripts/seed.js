/**
 * Script de seed: puebla MongoDB con los productos iniciales.
 * Uso: node src/scripts/seed.js
 */
import mongoose from 'mongoose';
import dotenv   from 'dotenv';
import Product  from '../models/Product.js';

dotenv.config();

const PRODUCTS = [
  {
    name:      'WorkPro Elite 15"',
    category:  'Laptop · Trabajo / Diseño',
    specs:     'Intel Core i7 12va Gen · 16GB RAM\n512GB SSD NVMe · Win 11 Pro · FHD IPS',
    price:     'Consultar',
    badge:     'Nuevo',
    badgeType: 'new',
    order:     1,
  },
  {
    name:      'GadStation X500',
    category:  'PC Desktop · Gaming / Productividad',
    specs:     'AMD Ryzen 5 5600X · 16GB DDR5\nGTX 1650 4GB · 1TB SSD · Gabinete RGB',
    price:     'Consultar',
    badge:     'Popular',
    badgeType: 'hot',
    order:     2,
  },
  {
    name:      'StudyBook 14"',
    category:  'Laptop · Estudio / Oficina',
    specs:     'Intel Core i5 12va Gen · 8GB RAM\n256GB SSD · Win 11 Home · Ligera 1.5kg',
    price:     'Consultar',
    badge:     '',
    badgeType: '',
    order:     3,
  },
  {
    name:      'Nuevo Modelo',
    category:  'Especificaciones en desarrollo',
    specs:     'Próxima incorporación al catálogo.\nEscríbenos para recibir notificación.',
    price:     'Pronto',
    badge:     'Próximamente',
    badgeType: 'soon',
    available: false,
    order:     4,
  },
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('✅ Conectado a MongoDB');

  await Product.deleteMany({});
  console.log('🗑  Productos anteriores eliminados');

  await Product.insertMany(PRODUCTS);
  console.log(`✅ ${PRODUCTS.length} productos insertados`);

  await mongoose.disconnect();
  console.log('👋 Desconectado');
}

seed().catch((err) => { console.error(err); process.exit(1); });
