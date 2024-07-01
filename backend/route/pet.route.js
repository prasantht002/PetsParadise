import express from "express"
import {createPet, deletePet, getPet, getPets, updatePet} from '../controller/pet.controller.js'

const routers = express.Router();



routers.get("/", getPets)

routers.get('/getPets', getPets);
routers.get('/getPet/:id',getPet);
routers.post('/addPet',createPet);
routers.put('/updatePet/:id',updatePet);
routers.delete('/deletePet/:id', deletePet);

export default routers;