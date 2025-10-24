import { Furniture } from "../models/furniture.js";


async function getAllFurnitures() {
    const data = Furniture.find().select({img: true, price: true, description: true});
    return data;
}

async function createFurniture(data) {
    console.log(data)
    const furniture = await Furniture.create(data)

    return furniture;
}

async function getFurnitureById(id) {
    const item = Furniture.findById(id);

    return item;
}

export const furnitureService = {
    getAllFurnitures,
    createFurniture,
    getFurnitureById

}