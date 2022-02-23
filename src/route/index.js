import express from 'express'
var router = express.Router()

import { create } from '../controller/index.controller.js'

/* GET home page. */
router.get('/', create);

export default router;
