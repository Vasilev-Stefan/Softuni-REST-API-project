import { Furniture } from "../models/furniture.js";


async function getAllFurnitures() {
    const data = Furniture.find();
    return data;
}

async function createFurniture(data) {
    console.log(data)
    const furniture = await Furniture.create(data)

    return furniture;
}

export const furnitureService = {
    getAllFurnitures,
    createFurniture

}