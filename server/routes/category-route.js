const express = require("express");
const categoryController = require("../controllers/category-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const multerMiddleware = require("../middlewares/multer-middleware");
const router = express.Router();

router.post(
  "/",
  authMiddleware,
  multerMiddleware,
  categoryController.createCategory
);
router.put(
  "/:id",
  authMiddleware,
  multerMiddleware,
  categoryController.updateCategory
);
router.delete("/:id", authMiddleware, categoryController.deleteCategory);
router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);

module.exports = router;
