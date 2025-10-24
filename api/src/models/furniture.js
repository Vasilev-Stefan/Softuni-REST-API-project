import mongoose from 'mongoose';

const furnitureSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
        minLength: [4, 'The make is too short!']
    },
    model: {
        type: String,
        required: true,
        minLength: [4, 'The model is too short!']
    },
    year: {
        type: Number,
        required: true,
        min: [1950, 'The item cannot be before 1950 year'],
        max: [2050, 'The year can exceed 2050 year']
    },
    description: {
        type: String,
        required: true,
        minLength: [15, 'The description is too short']
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'The price must be a positive number']
    },
    img: {
        type: String,
        required: true,
    },
    material: {
        type: String,
        required: false,
    }
})

export const Furniture = mongoose.model('Furniture', furnitureSchema)