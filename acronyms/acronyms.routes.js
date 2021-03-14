// import {
//   findMultiple,
//   findSingle,
//   findRandom,
//   addSingle,
//   modifySingle,
//   deleteSingle,
//   welcome,
// } from "./acronymController";
// import { Acronym, sequelize } from "./dbConnector";

const fs = require("fs");
const file = "./data/acronyms.json";

fs.readFile(file, { encoding: "utf8" }, (err, data) => {
  if (err) {
    next(err); // Pass errors to Express
  }

  // GET --> /
  router.get("/", (req, res, next) => next(), "welcome");
  // router.get("/", authorize(Role.Admin), getAll);

  // Pass the transformed array to populate the DB
  // syncAndPopulate(mapAndTransform(data));

  // // Setup all routes
  // setupRoutes(app);
});

// app.use((req, res, next) => {
//     // Our token is the key "Authorization" and any value found in the Headers
//     const token = req.get("Authorization");

//     if (token) {
//       req.token = token;
//       next();
//     } else {
//       res.status(403).send({
//         error:
//           "Please provide an Authorization header to identify yourself. Like this: { Authorization: 'WHATEVER' } ",
//       });
//     }
//   });

//   // GET --> /
//   app.get("/", (req, res, next) => next(), welcome);

//   // GET --> /acronym?from=50&limit=10&search=:search
//   app.get("/acronym?", (req, res, next) => next(), findMultiple);

//   // GET --> /acronym/:acronym
//   app.get("/acronym/:acronym", (req, res, next) => next(), findSingle);

//   // GET --> /random/:count?
//   app.get("/random/:count?", (req, res, next) => next(), findRandom);

//   // POST --> /acronym
//   app.post("/acronym", (req, res, next) => next(), addSingle);

//   // PUT --> /acronym/:acronym
//   app.put("/acronym/:acronym", (req, res, next) => next(), modifySingle);

//   // DELETE --> /acronym/:acronym
//   app.delete("/acronym/:acronym", (req, res, next) => next(), deleteSingle);

//   // ALL other routes return 404 by default
//   app.get("*", (req, res) => {
//     res.sendStatus(404);
//   });
