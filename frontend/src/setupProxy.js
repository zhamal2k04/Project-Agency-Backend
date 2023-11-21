const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/signup', // Путь, который вы хотите проксировать для отправки POST-запросов
    createProxyMiddleware({
      target: 'http://localhost:5500', // Адрес вашего удаленного сервера
      changeOrigin: true,
    })
  );
};
