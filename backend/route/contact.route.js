import express from 'express'
import { creatContact,getContact } from '../controller/contactController.js';

const routers = express.Router();


//Contact 
routers.post('/creatContact',creatContact);
routers.get('/getContact',getContact);

export default routers;