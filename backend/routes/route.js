const router =  require('express').Router();
const {getDress, getWomanJeans, getTops, getLehenga, getLehengaCholi, getGouns,getKurta,getShirts,getPants,getShoes,getManJeans , getAllProducts}  = require('../controllers/controller')
router.get('/woman/dress',getDress);
router.get('/woman/Wjeans',getWomanJeans);
router.get('/woman/tops',getTops);
router.get('/woman/lehenga',getLehenga);
router.get('/woman/lehengaCholi',getLehengaCholi);
router.get('/woman/gouns',getGouns);
router.get('/man/kurta',getKurta);
router.get('/man/shirts',getShirts);
router.get('/man/pants',getPants);
router.get('/man/shoes',getShoes);  
router.get('/man/jeans',getManJeans);
router.get('/allProducts',getAllProducts)

module.exports = router;