import { Furniture } from "../models/furniture.js";


async function getAllFurnitures() {
    const data = Furniture.find().select({img: true, price: true, description: true});
    return data;
}

async function createFurniture(data) {
    const furniture = await Furniture.create(data)

    return furniture;
}

async function getFurnitureById(id) {
    const item = Furniture.findById(id);

    return item;
}

async function updateFurniture(id, data) {
    const item = await Furniture.findOneAndUpdate({_id: id}, data, {new: true})
    return item;
}

export const furnitureService = {
    getAllFurnitures,
    createFurniture,
    getFurnitureById,
    updateFurniture

}