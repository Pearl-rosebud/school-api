const {createSchool, getSchools} = require("../controllers/schoolController")
const {Router} = require("express")

const router = Router();

router.post("/addschool", createSchool)

router.route("/").get(getSchools)

module.exports= router