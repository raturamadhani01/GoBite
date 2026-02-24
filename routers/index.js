const router = require("express").Router();
const Controller = require("../controllers/controller");
// const storeRoutes = require("./stores");
// const employeeRoutes = require("./employees");

// ** STORE
// router.get("/", (req, res) => {
//     res.redirect("/homes")
// })
// router.use("/stores", storeRoutes);
// ** EMPLOYEE
// router.use("/", employeeRoutes);

router.get("/baru", Controller.landingPage)
router.get("/login", Controller.login)
router.get("/gobite", Controller.dashboard)

module.exports = router;
