const router = require("express").Router();
const APIController = require("../controller/apiController");

router.get('/', APIController.index);
router.post('/registration', APIController.registerStudent);
router.get('/update/(:id)', APIController.update);
router.post('/update/(:id)', APIController.updateStudent);
router.get('/delete/(:id)', APIController.delete);

module.exports = router;