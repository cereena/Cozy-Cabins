// index.js (backend)
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Your database file
const middlewares = jsonServer.defaults();

// Enable CORS
server.use(cors());
server.use(middlewares);

// Bind the router db to the app
server.db = router.db;

// /register  -> signup
// /login     -> login
server.use(auth);
server.use(router);

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`JSON Server with Auth running on http://localhost:${PORT}`);
});
