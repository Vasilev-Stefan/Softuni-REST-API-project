import { Furniture } from "../models/furniture.js";


async function getAllFurnitures(filter) {
    if(filter){
        const data = await Furniture.find({_ownerId: filter})
        return data;
    }

    const data = await Furniture.find().select({img: true, price: true, description: true});
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

async function deleteFurniture(id) {
    await Furniture.deleteOne({_id: id});
    return;
}

export const furnitureService = {
    getAllFurnitures,
    createFurniture,
    getFurnitureById,
    updateFurniture,
    deleteFurniture

}