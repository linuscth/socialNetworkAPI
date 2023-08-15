const router = require('express').Router();
const apiRoutes = require('./api/index');


router.use('/api', apiRoutes);

router.use((req, res) => res.send('wrong route!'));

module.exports = router