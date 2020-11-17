import { Collection, ObjectId } from 'mongodb';

interface Ingredient {
    quantity: number;
    unit: string;
    description: string;
}

export interface Recipe {
    _id: ObjectId;
    title: string;
    image: string;
    description: string;
    ingredients: Ingredient[];
    instructions: string[];
}

export interface Database {
    recipes: Collection<Recipe>;
}