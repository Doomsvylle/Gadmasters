import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name:      { type: String, required: true, trim: true },
    category:  { type: String, required: true },
    specs:     { type: String, required: true },
    price:     { type: String, default: 'Consultar' },
    badge:     { type: String, default: '' },       // 'Nuevo' | 'Popular' | ''
    badgeType: { type: String, default: '' },        // 'new' | 'hot' | 'soon' | ''
    available: { type: Boolean, default: true },
    order:     { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
