import { Router } from "express";

export const furniteController = Router();


furniteController.get('/catalog', async (req, res) => {
    res.json([])
})
