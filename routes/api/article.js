const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router.route("/saved")
  .post(articleController.create)
router.route("/")
  .get(articleController.findAll)


module.exports = router
