const express = require("express");
const router = express.Router();
const candidatesController = require("../../controllers/candidates.controller");

router.route("/").post(candidatesController.addCandidate);

router.route("/organisation/:id").get(candidatesController.allCandidates);
router
  .route("/:id")
  .get(candidatesController.getAllCandidates)
  .put(candidatesController.updateCandidate)
  .delete(candidatesController.removeCandidate);

router.route("/one/:id").get(candidatesController.getCandidate);
router
  .route("/positions/:id")
  .delete(candidatesController.removeCandidatesByPosition);

module.exports = router;
