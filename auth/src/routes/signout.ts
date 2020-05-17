import express from "express";

const router = express.Router();

router.get("/api/users/signout", (req, res) => {
  res.send("Inside Sign Out");
});

export { router as signOutRouter };
