import { Collection, ObjectId, Double } from 'mongodb';

export interface Item {
    quantity: Double;
    unit: string;
    name: string;
}

export interface Ingredient {
    name: string;
    items: Item[];
}

export interface Recipe {
    _id: ObjectId;
    title: string;
    image: string;
    description: string;
    ingredients?: Ingredient[];
    instructions?: string[];
}

export interface Database {
    recipes: Collection<Recipe>;
}