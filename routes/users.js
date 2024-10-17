/** Routes for users of pg-relationships-demo. */

const db = require("../db");
const express = require("express");
const router = express.Router();
const ExpressError = require("../expressError");

/** Get users: [user, user, user] */
router.get("/", async (req, res, next) => {
  try {
    const results = await db.query(`SELECT id, name, type FROM users`);

    return res.status(200).json(results.rows);
  } catch (err) {
    return next(err);
  }
});


module.exports = router;