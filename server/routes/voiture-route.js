const express = require("express");
const voitureController = require("../controllers/voiture-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const multerMiddleware = require("../middlewares/multer-middleware");
const router = express.Router();

router.post(
    "/",
    authMiddleware,
    multerMiddleware,
    voitureController.createVoiture
);

router.put(
    "/:id",
    authMiddleware,
    multerMiddleware,
    voitureController.updateVoiture
);

router.delete("/:id", authMiddleware, voitureController.deleteVoiture);
router.get("/", voitureController.getAllVoitures);
router.get("/:id", voitureController.getVoitureById);
router.get("/:id/:name", voitureController.getVoitureByName);

module.exports = router;