import { Collection, ObjectId } from 'mongodb';

export interface Recipe {
    _id: ObjectId;
    title: string;
    image: string;
    description: string;
    ingredients: string;
    instruction: string;
}

export interface Database {
    recipes: Collection<Recipe>;
}