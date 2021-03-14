const express = require("express");
const router = express.Router();
// const Joi = require("joi");
// const validateRequest = require("_middleware/validate-request");
// const authorize = require("_middleware/authorize");
// const Role = require("_helpers/role");
// const accountService = require("./account.service");

// routes

router.post("/", verifyEmail);
router.get("/", verifyEmail);

// router.get("/users", (req, res) => {
//   fs.readFile(dataPath, "utf8", (err, data) => {
//     if (err) {
//       throw err;
//     }

//     res.send(JSON.parse(data));
//   });
// });

module.exports = router;

// function verifyEmailSchema(req, res, next) {
//   const schema = Joi.object({
//     token: Joi.string().required(),
//   });
//   validateRequest(req, next, schema);
// }

function verifyEmail(req, res, next) {
  console.log("___ req ___", req);
  console.log("___ res ___", res);
  console.log("___ next ___", next);
  // res
  res.send("testing");
  // accountService
  //   .verifyEmail(req.body)
  //   .then(() =>
  //     res.json({ message: "Verification successful, you can now login" })
  //   )
  //   .catch(next);
}
