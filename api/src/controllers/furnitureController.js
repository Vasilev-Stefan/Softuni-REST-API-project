import { Router } from "express";

import { furnitureService } from "../service/furnitureService.js";

export const furniteController = Router();


furniteController.get('/catalog', async (req, res) => {
    const items = await furnitureService.getAllFurnitures()
    res.json(items);
})

furniteController.post('/catalog', async (req, res) => {
    const data = req.body;
    const creatorId = req.user.id;

    data._ownerId = creatorId    
    
    try {
        const item = await furnitureService.createFurniture(data);
        
        res.status(201).json(item)
    } catch (err) {
        res.status(400).json({message: 'Record not created!'})

    }
})

furniteController.get('/catalog/:id', async (req, res) => {
    const id = req.params.id;
    
    const item = await furnitureService.getFurnitureById(id);

    res.json(item)
})
