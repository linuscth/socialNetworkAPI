const router = require('express').Router();
const {
    getAllUsers,
    getAUser,
    createUser,
    updateUser,
    deleteUser } = require('../../controllers//userController');


router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getAUser).put(updateUser).delete(deleteUser)

module.exports = router;