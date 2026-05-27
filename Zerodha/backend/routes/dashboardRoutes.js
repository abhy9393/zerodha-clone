const express = require("express");

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const router = express.Router();

router.get(
  "/dashboard",
  authMiddleware,
  async (req, res) => {
    res.json({
      message: "Dashboard Access Granted",
      user: req.user,
    });
  }
);

module.exports = router;