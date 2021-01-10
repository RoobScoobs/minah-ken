require('dotenv').config();

import { connectDatabase } from '../src/database';
import { recipes } from '../src/database/recipeData';

const seedDB = async() => {
  try {
      console.log('[seed]: running...');

      const db = await connectDatabase();

      for (const recipe of recipes) {
          db.recipes.insertOne(recipe);
      }

      console.log('[seed]: successful');
  }
  catch {
      throw new Error('failed to seed database');
  }
};

seedDB();