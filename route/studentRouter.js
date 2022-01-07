const router = require("express").Router();
const StudentController = require("../controller/studentController");

router.get('/', StudentController.index);
router.get('/registration', StudentController.registration);
router.post('/registration', StudentController.registerStudent);
router.get('/update/(:id)', StudentController.update);
router.post('/update/(:id)', StudentController.updateStudent);
router.get('/delete/(:id)', StudentController.delete);

module.exports = router;