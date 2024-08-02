const jsonServer = require("json-server");
   const auth = require("json-server-auth");
   const cors = require("cors");
   const server = jsonServer.create();
   const router = jsonServer.router("db.json");
   const middlewares = jsonServer.defaults();

   server.db = router.db;

   // Set up default middlewares (cors, static, etc)
   server.use(middlewares);

   // Enable CORS for all routes
   server.use(cors());

   // You must apply the auth middleware before the router
   server.use(auth);

   // Add this before server.use(router)
   server.use(jsonServer.bodyParser);

   server.use(router);

   const port = process.env.PORT || 4000;
   server.listen(port, () => {
     console.log(`JSON Server with authentication is running on port ${port}`);
   });