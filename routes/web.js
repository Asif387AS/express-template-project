import express from 'express'
import { contactController } from '../controllers/contactCotroller.js';
import {homeController} from '../controllers/homeController.js'
import { serviesController } from '../controllers/servicesController.js';
import { skillsController } from '../controllers/skillsController.js';

const router=express.Router();
router.get('/', homeController)
router.get('/services', serviesController)
router.get('/skills', skillsController)
router.get('/contact', contactController)

export default router