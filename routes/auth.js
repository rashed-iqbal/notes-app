const router = require('express').Router();
const {signup,login,getuser} = require('../controllers/auth')

router.post("/login",login);
router.post("/signup",signup)
router.post("/getuser",getuser)

module.exports = router