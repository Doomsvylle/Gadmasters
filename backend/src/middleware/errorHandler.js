export const errorHandler = (err, _req, res, _next) => {
  console.error('❌', err.message);
  const status = err.status || 500;
  res.status(status).json({
    message: err.message || 'Error interno del servidor',
  });
};
