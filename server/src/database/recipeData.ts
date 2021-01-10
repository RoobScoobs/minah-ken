import { ObjectId, Double } from 'mongodb';
import { Recipe } from '../lib/types';

export const recipes: Recipe[] = [
    {
        _id: new ObjectId(),
        title: 'A Wednesday Dinner',
        image: '',
        description: 'Starving after spinning, and needed to get rid of some old kale and parsley in the fridge. Pulled together pasta puttanesca with cannelloni beans, tuscan kale, and red pepper.',
    },
    {
        _id: new ObjectId(),
        title: 'Mom\'s Oatmeal Cookies',
        image: '',
        description: 'Craving my mom\'s oatmeal cookies today, so I decided to rework a vegan gluten free version. Enjoying the result with my favorite almong roiboss tea from tea luxe.',
        ingredients: [
            {
                name: 'flax meal',
                quantity: new Double(2),
                unit: 'tbsp',
            },
            {
                name: 'water',
                quantity: new Double(4),
                unit: 'tbsp',
            },
            {
                name: 'vanilla',
                quantity: new Double(1),
                unit: 'tsp',
            },
            {
                name: 'almond milk',
                quantity: new Double(0.5),
                unit: 'c',
            },
            {
                name: 'almond milk',
                quantity: new Double(0.5),
                unit: 'c',
            },
            {
                name: 'apple cider vinegar',
                quantity: new Double(1),
                unit: 'tsp',
            },
            {
                name: 'almond butter',
                quantity: new Double(2),
                unit: 'tbsp',
            },
            {
                name: 'old fashioned rolled oats (GF)',
                quantity: new Double(1),
                unit: 'c',
            },
            {
                name: 'quick cooking oats (GF)',
                quantity: new Double(1),
                unit: 'c',
            },
            {
                name: 'GF baking mix (e.g. Bob\'s Red Mill)',
                quantity: new Double(0.5),
                unit: 'c',
            },
            {
                name: 'baking soda',
                quantity: new Double(0.5),
                unit: 'c',
            },
            {
                name: 'sugar',
                quantity: new Double(0.75),
                unit: 'c',
            },
            {
                name: 'xantham gum',
                quantity: new Double(1),
                unit: 'tsp',
            },
        ],
        instructions: [
            'Flax meal and water are combined prior to making the rest of the recipe and left for ~5-10 minutes',
            'Thoroughly combine wet and dry ingredients separately, then mix together to form dough',
            'Mix in toppings (as much or as little as desired), I included coconut flakes, raisins, chocolate chips, and sliced almonds',
            'Form into evenly sized and spaced mounds on a parchment-lined baking sheet',
            'Bake at 360F for approximately 20 min',
            'Cookies should hold together well, but still be quite soft in the middle as they will become firmer once cooled',
        ],
    },
    {
        _id: new ObjectId(),
        title: 'A Classic Malay Soup',
        image: '',
        description: 'My boyfriend and I spent the last couple weeks mustering through a cold so I had to make this: sop ayam made vegan. If you\'re sick (or just hungry 😉), try this classic.',
        ingredients: [
            {
                name: 'garlic',
                quantity: new Double(3),
                unit: 'cloves sliced',
            },
            {
                name: 'ginger',
                quantity: new Double(0.125),
                unit: 'slice',
            },
            {
                name: 'onion',
                quantity: new Double(0.5),
                unit: 'thinly sliced',
            },
            {
                name: 'cinnamon',
                quantity: new Double(0.5),
                unit: 'stick',
            },
            {
                name: 'cardamom',
                quantity: new Double(5),
                unit: 'pods',
            },
            {
                name: 'cloves',
                quantity: new Double(3),
                unit: '',
            },
            {
                name: 'star anise',
                quantity: new Double(3),
                unit: '',
            },
            {
                name: 'fennel seeds',
                quantity: new Double(0.5),
                unit: 'tsp',
            },
            {
                name: 'coriander',
                quantity: new Double(0.5),
                unit: 'tsp',
            },
            {
                name: 'vegetable or water stock',
                quantity: new Double(8),
                unit: 'c',
            },
            {
                name: 'bay leaves',
                quantity: new Double(4),
                unit: '',
            },
            {
                name: 'konbu',
                quantity: new Double(1),
                unit: '2"x2"',
            },
            {
                name: 'heart of celery whole',
                quantity: new Double(0.25),
                unit: '',
            },
            {
                name: 'carrots',
                quantity: new Double(3),
                unit: 'sliced',
            },
            {
                name: 'shiitake mushrooms',
                quantity: new Double(4),
                unit: '',
            },
        ],
        instructions: [
            'Saute aromatics that include garlic, ginger, and onion',
            'Coconut oil adds richness, but any oil will do; I did this version oil free by using water "sauteing" method',
            'Toast spices (if using oil, skip step): cinnamon stick, cardamom pods, cloves, star anise, fennel seeds, and coriander',
            'Once aromatics are browned, add spices',
            'Fry spices until fragrant. (If using water method, continue adding small amounts of broth or water to keep from burning.)',
            'Once spices are fragrant, add lentils, then add water or broth and stock ingredients',
            'Bring to a boil, then reduce heat and simmer for at least 30 min',
            'Taste broth and add salt and pepper to taste. Once broth has reached desired taste, remove stock ingredients',
            'Discard celery hearts, bay leaves, konbu, and whole spices',
            'Slice mushrooms and add back into the pot',
            'Add sliced celery and other add-ons to pot (e.g. broccoli, cauliflower, potato, tofu)',
            'Simmer until veggies are soft and serve over rice with desired toppings',
            'Toppings might include: sesame oil, soy sauce/tamari, fried onion, cilantro, scallion, lime, sambal/chili paste',
        ],
    },
    {
        _id: new ObjectId(),
        title: '',
        image: '',
        description: '',
        ingredients: [
            {
                name: '',
                quantity: new Double(),
                unit: '',
            },
        ],
        instructions: [
            ''
        ],
    },
];