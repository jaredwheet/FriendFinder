var router = require("express").Router();
var htmlRoutes = require("./htmlroutes");
var apiRoutes = require("./apiroutes");

router.use("/api", apiRoutes);
router.use("/", htmlRoutes);



module.exports = router