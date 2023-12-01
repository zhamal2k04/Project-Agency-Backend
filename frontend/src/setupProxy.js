const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/signup", // Путь, который вы хотите проксировать для отправки POST-запросов регистрации
    createProxyMiddleware({
      target: "http://localhost:5500", // Адрес вашего удаленного сервера
      changeOrigin: true,
    })
  );

  app.use(
    "/login", // Путь, который вы хотите проксировать для отправки POST-запросов входа
    createProxyMiddleware({
      target: "http://localhost:5500", // Адрес вашего удаленного сервера
      changeOrigin: true,
    })
  );

  app.use(
    "/api/submitForm",
    createProxyMiddleware({
      target: "http://localhost:5500",
      changeOrigin: true,
    })
  );
};
