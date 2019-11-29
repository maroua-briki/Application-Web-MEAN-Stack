const express =require('express');
const router=express.Router();

const authController=require('../controllers/authController');
const jwtHelper=require('../config/jwtHelper');


router.get('/list',authController.lister);

router.post('/register',authController.register);

router.post('/login',authController.login);

router.get('/userProfile',jwtHelper.verifyJwtToken,authController.userProfile);

router.delete('/delete/:id',authController.delete);

router.put('/update/:id',authController.update); 
// router.post('/update/:id',authController.update); 


router.get('/getUser/:id',authController.getUserById);




//exporter les routes
module.exports=router;