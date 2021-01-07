import { Collection, ObjectId, Decimal128 } from 'mongodb';

export interface Ingredient {
    quantity: Decimal128;
    unit: string;
    name: string;
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