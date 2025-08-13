const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const path = require("path");
const express = require("express");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Enable CORS
server.use(cors());
server.use(middlewares);

// Serve static images
server.use('/images', express.static(path.join(__dirname, 'images')));

// Bind the router db to the app
server.db = router.db;

// Auth routes
server.use(auth);
server.use(router);

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`JSON Server with Auth running on http://localhost:${PORT}`);
});
