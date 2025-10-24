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
    
    try {
        const item = await furnitureService.getFurnitureById(id);

        res.json(item)
    } catch (err) {
        res.status(400).json({message: 'Unable to open this furniture!'})
    }

})

furniteController.put('/catalog/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        const item = await furnitureService.updateFurniture(id, data)
        console.log(item)
        
        res.status(214).json(item)
    } catch (err) {
        res.status(400).json({message: 'Unable to update item!'})
    }
    
})
