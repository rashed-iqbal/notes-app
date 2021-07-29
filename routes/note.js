const router = require('express').Router()
const {createNote,updateNote,deleteNote} = require('../controllers/note');

router.route("/create-note").post(createNote);
router.route("/update-note").put(updateNote);
router.route("/delete-note").delete(deleteNote);

module.exports = router