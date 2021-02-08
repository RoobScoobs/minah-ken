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
                name: 'wet ingredients',
                items: [
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
                ]
            },
            {
                name: 'dry ingredients',
                items: [
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
                ]
            }
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
                name: 'aromatics',
                items: [
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
                ]
            },
            {
                name: 'spices',
                items: [
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
                ]
            },
            {
                name: '*',
                items: [
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
                ]
            }
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
        title: 'Beach Vibes',
        image: '',
        description: 'Beach time with da girls, a beautiful break from the winter weather. Replicated unagi don w/ eggplant to make this vegan sushi bowl.',
        ingredients: [
            {
                name: 'eggplant unagi',
                items: [
                    {
                        name: 'Japanese eggplants',
                        quantity: new Double(2),
                        unit: 'sliced 1/2" thick',
                    },
                    {
                        name: 'mirin',
                        quantity: new Double(0.25),
                        unit: 'c',
                    },
                    {
                        name: 'soy sauce/tamari',
                        quantity: new Double(2),
                        unit: 'tbsp',
                    },
                    {
                        name: 'sugar',
                        quantity: new Double(2),
                        unit: 'tbsp',
                    },
                    {
                        name: 'vegan fish sauce',
                        quantity: new Double(1),
                        unit: 'tbsp',
                    },
                ]
            },
            {
                name: 'sushi rice',
                items: [
                    {
                        name: 'sushi rice',
                        quantity: new Double(1.5),
                        unit: 'c',
                    },
                    {
                        name: 'rice vinegar',
                        quantity: new Double(3),
                        unit: 'tbsp',
                    },
                    {
                        name: 'sugar',
                        quantity: new Double(2),
                        unit: 'tbsp',
                    },
                    {
                        name: 'salt',
                        quantity: new Double(1.5),
                        unit: 'tsp',
                    },
                ]
            }
        ],
        instructions: [
            'Wash rice, and add enough water to just cover the grains. Cook rice',
            'Bake eggplant on a parchment lined baking sheet at 400F for ~10-20 min or until brown. Flip pieces halfway to cook evenly. (You can skip this, but adds extra depth, texture, and flavor)',
            'Once eggplant pieces are browned, remove from oven and cool thoroughly',
            'For the sauce, simmer mirin in a hot pan. I used eden brand which (like traditional mirins) contains alcohol, so you will let this cook off now. More commonly available mirins don\'t have alcohol, so you may not see as much reduction',
            'Add sugar and stir until completely dissolved',
            'Add soy sauce and fish sauce and bring to a boil, then reduce heat and simmer for about 10 min',
            'Taste sauce. Add more sugar or soy sauce if necessary. The sauce is fairly thick and sticky. If it becomes too dry or sticky to work with add small amounts of water',
            'Add eggplant to pan, and allow them to simmer in the sauce on low heat, covered ~10 min',
            'Once the eggplants have fully absorbed the sauce and softened slightly, remove from heat and allow them to cool',
            'Once rice is cooked, season while hot. Add rice vinegar, sugar, salt, and gently combine with a rice paddle. Fan the rice as you mix it so that it cools and absorbs evenly',
            'Taste the rice and add any additional vinegar, sugar or salt to taste',
            'Assemble bowl. Top your rice with the eggplant, and toppings of your choice. Some suggestions include: kizami nori, toasted sesame seeds, or finely sliced scallions',
        ],
    },
    {
        _id: new ObjectId(),
        title: 'Welcome to B-town',
        image: '',
        description: 'By Chloe, how do you get such amazing tomatoes in March?! Couldn\'t resist, twice in one day.,
    },
    {
        _id: new ObjectId(),
        title: 'La Vegana Paella',
        image: '',
        description: 'From Boston\'s Tapeo Restaurant',
    },
    {
        _id: new ObjectId(),
        title: 'Broccoli Rabe & Spaghetti',
        image: '',
        description: '',
        ingredients: [
            {
                name: '*',
                items: [
                    {
                        name: 'garlic cloves',
                        quantity: new Double(3),
                        unit: 'sliced',
                    },
                    {
                        name: 'mushrooms',
                        quantity: new Double(0),
                        unit: 'sliced',
                    },
                    {
                        name: 'sweet peppers',
                        quantity: new Double(0),
                        unit: 'sliced',
                    },
                    {
                        name: 'broccoli rabe',
                        quantity: new Double(1),
                        unit: 'chopped into 1" pieces',
                    },
                    {
                        name: 'spaghetti',
                        quantity: new Double(3),
                        unit: 'servings',
                    },
                    {
                        name: 'almond butter',
                        quantity: new Double(2),
                        unit: 'tbsp',
                    },
                    {
                        name: 'nutritional yeast',
                        quantity: new Double(0.25),
                        unit: 'c',
                    },
                    {
                        name: 'pasta broth',
                        quantity: new Double(2),
                        unit: 'c',
                    },
                ]
            }
        ],
        instructions: [
            'Blanche broccoli rabe in salted, boiling water for ~1 min',
            'Remove broccoli rabe, and cook pasta in boiling water until al dente',
            'Saute garlic and mushrooms in pot until browned (I used pasta broth to water sauce)',
            'Add almond butter, nutritional yeast, and 1c of pasta broth. Stir until smooth, then add black pepper and salt to taste',
            'Stir in peppers and pasta, and simmer in sauce until pasta is softened',
            'Add broccoli rabe, and additional garlic powder if desired',
            'Simmer for 1-2 min, until everything is well incorporated. Taste and season to taste',
        ],
    },
    {
        _id: new ObjectId(),
        title: 'Hayashi Rice',
        image: '',
        description: '🍛🍚🍱 Not made the traditional way, but just as comforting...not to mention vegan.',
        ingredients: [
            {
                name: '*',
                items: [
                    {
                        name: 'sweet peppers sliced',
                        quantity: new Double(0.5),
                        unit: 'c',
                    },
                    {
                        name: 'mushrooms, sliced or quartered',
                        quantity: new Double(1),
                        unit: 'c',
                    },
                    {
                        name: 'small onion',
                        quantity: new Double(1),
                        unit: 'sliced thinly',
                    },
                    {
                        name: 'garlic cloves',
                        quantity: new Double(2),
                        unit: 'sliced',
                    },
                    {
                        name: 'carrots',
                        quantity: new Double(3),
                        unit: 'sliced into coins',
                    },
                    {
                        name: 'crushed tomatoes',
                        quantity: new Double(1),
                        unit: 'can',
                    },
                    {
                        name: 'red wine',
                        quantity: new Double(1),
                        unit: 'c',
                    },
                    {
                        name: 'mirin',
                        quantity: new Double(0.5),
                        unit: 'c',
                    },
                    {
                        name: 'soy sauce',
                        quantity: new Double(1),
                        unit: 'tbsp',
                    },
                    {
                        name: 'vegetarian mushroom sauce (or sugar)',
                        quantity: new Double(1),
                        unit: 'tbsp',
                    },
                    {
                        name: 'nutritional yeast',
                        quantity: new Double(1),
                        unit: 'tbsp',
                    },
                    {
                        name: 'bay leaves',
                        quantity: new Double(3),
                        unit: '',
                    },
                    {
                        name: 'konbu',
                        quantity: new Double(1),
                        unit: 'small piece',
                    },
                ]
            }
        ],
        instructions: [
            'Sauté garlic and onions until brown',
            'Add mushrooms, continue sautéing until mushrooms begin to brown',
            'Deglaze pan with mirin and wine, allow it to reduce for 2-3 min',
            'Add tomatoes, peppers, carrots, soy sauce, mushroom sauce, nutritional yeast, bay leaves,, konbu, and black pepper',
            'Simmer for 15-30 min until carrots are soft, flavors are well developed, and the liquid is well reduced to a thick sauce',
            'Season with sugar/salt/pepper to taste',
            'Remove bay leaves and konbu',
            'Serve with hot rice and toppings (e.g. sesame seeds, shredded nori, scallions',
        ],
    },
    {
        _id: new ObjectId(),
        title: 'A Whole Heart',
        image: '',
        description: 'These bowls are brilliant. Plant based done right: unique, fresh, and boldly delicious. Can\'t wait to eat again at Whole Heart Provisions.',
    },
    {
        _id: new ObjectId(),
        title: 'Saturday Mornings',
        image: '',
        description: 'Blueberry buckwheat pancakes on a saturday morning',
    },
    {
        _id: new ObjectId(),
        title: 'An Old World Feeling',
        image: '',
        description: 'Tuscan Kale with garlic, raisins, and walnuts, over spaghetti squash 🍃🍇',
        ingredients: [
            {
                name: '*',
                items: [
                    {
                        name: 'spaghetti squash',
                        quantity: new Double(0.5),
                        unit: '',
                    },
                    {
                        name: 'tuscan kale',
                        quantity: new Double(4),
                        unit: 'c',
                    },
                    {
                        name: 'medium sized onion',
                        quantity: new Double(0.5),
                        unit: 'sliced',
                    },
                    {
                        name: 'raisins',
                        quantity: new Double(0.5),
                        unit: 'c',
                    },
                    {
                        name: 'walnuts',
                        quantity: new Double(0.25),
                        unit: 'c',
                    },
                    {
                        name: 'garlic cloves',
                        quantity: new Double(3),
                        unit: 'sliced',
                    },
                    {
                        name: 'vegetable stock',
                        quantity: new Double(1),
                        unit: 'c',
                    },
                    {
                        name: 'lemon',
                        quantity: new Double(0.5),
                        unit: '',
                    },
                    {
                        name: 'nutritional yeast',
                        quantity: new Double(0.25),
                        unit: 'c',
                    },
                    {
                        name: 'sugar',
                        quantity: new Double(1),
                        unit: 'tsp',
                    },
                ]
            }
        ],
        instructions: [
           'Cut spaghetti squash in half, and remove seeds. Season with black pepper, salt, and garlic powder',
           'Place halves inverted on a baking sheet, and bake at 375F for approximately 30-40 minutes. Squash is done when the spaghetti shreds cleanly pull away from the flesh, without being mushy. Taste a shred to be sure that it still has a bite to it',
           'Once squash is cooked, use a fork to pull away all of the spaghetti shreds and transfer them into a bowl',
           'Caramelize the onions and garlic. Sauté on medium heat with the sugar to help them brown. I used vegetable broth to water sauté, however you could use olive oil instead',
           'Once the onions and garlic are browning, add the mushrooms and continue to brown for a few minutes',
           'Add raisins and walnut pieces, and continue to saute until the raisins are plump',
           'Add kale, and gently mix everything together',
           'Add 1/2c vegetable stock, and bring to a simmer. Cover pan, and allow kale to wilt',
           'Once the kale has reduced in size, add the spaghetti squash and another 1/2c vegetable stock. Gently toss contents of the pan, and allow it to continue simmering',
           'Add nutritional yeast, black pepper, and salt to taste',
           'Once the components are well combined and seasoned, turn off heat and add lemon juice'
        ],
    },
    {
        _id: new ObjectId(),
        title: 'Chipotle Quinoa Chili',
        image: '',
        description: '',
        ingredients: [
            {
                name: '*',
                items: [
                    {
                        name: 'black beans (or any bean of your choice)',
                        quantity: new Double(2),
                        unit: 'c',
                    },
                    {
                        name: 'vegetable broth, water, or bean broth',
                        quantity: new Double(2),
                        unit: 'c',
                    },
                    {
                        name: 'medium onion',
                        quantity: new Double(1),
                        unit: 'sliced',
                    },
                    {
                        name: 'garlic cloves',
                        quantity: new Double(3),
                        unit: 'minced',
                    },
                    {
                        name: 'mushrooms',
                        quantity: new Double(4),
                        unit: 'sliced thickly',
                    },
                    {
                        name: 'red bell pepper',
                        quantity: new Double(1),
                        unit: 'sliced',
                    },
                    {
                        name: 'corn',
                        quantity: new Double(1),
                        unit: 'c',
                    },
                    {
                        name: 'ancho pepper (or any hot pepper)',
                        quantity: new Double(1),
                        unit: '1/2 sliced, 1/2 whole',
                    },
                    {
                        name: 'carrot',
                        quantity: new Double(1),
                        unit: 'diced',
                    },
                    {
                        name: 'crushed tomatoes',
                        quantity: new Double(1),
                        unit: 'can',
                    },
                    {
                        name: 'oregano',
                        quantity: new Double(1),
                        unit: 'tsp',
                    },
                    {
                        name: 'chili powder',
                        quantity: new Double(1),
                        unit: 'tsp',
                    },
                    {
                        name: 'cumin',
                        quantity: new Double(1),
                        unit: 'tsp',
                    },
                    {
                        name: 'nutritional yeast',
                        quantity: new Double(1),
                        unit: 'tbsp',
                    },
                    {
                        name: 'chipotle chili powder, or canned chipotle chili pepper',
                        quantity: new Double(1),
                        unit: 'tsp',
                    },
                    {
                        name: 'bay leaf',
                        quantity: new Double(1),
                        unit: '',
                    },
                    {
                        name: 'sugar',
                        quantity: new Double(1),
                        unit: 'pinch',
                    },
                    {
                        name: 'cinnamon',
                        quantity: new Double(1),
                        unit: 'pinch',
                    },
                ]
            }
        ],
        instructions: [
           'Caramelize the onions and garlic. Sauté on medium heat with the sugar to help them brown. I used the extra water from boiling my dried black beans to water sauté, however you could use vegetable broth, water, or olive oil instead',
           'Once the onions and garlic are browning, add the mushrooms and continue to brown for a few minutes',
           'Add red bell pepper and ancho pepper, continue to brown until well caramelized',
           'Add oregano, chili powder, cumin, chipotle pepper and sauté until fragrant',
           'Add beans, carrots, tomatoes, bay leaf and 1-2c of additional broth/water and bring to a boil',
           'Once boiling, add quinoa and a generous pinch of salt. Cover pot and allow it to simmer on medium low heat for approximately 15 minutes, stirring occasionally',
           'Check to see if quinoa is fully cooked. It look well hydrated, and have absorbed lots of liquid. Taste it to see if the seeds are softened. Add additional water or broth if the chili is too dry',
           'Continue to simmer. Add corn, nutritional yeast, and the pinch of cinnamon. Add small amounts of cinnamon at a time, and taste carefully as it only needs a small amount',
           'Add salt and pepper to taste',
           'Once the components are well melded together and seasoned, serve with toppings of your choice (e.g. scallions, cilantro, lime, and vegan sour cream)',
        ],
    },
    {
        _id: new ObjectId(),
        title: 'Dinner Before The Storm',
        image: '',
        description: 'A vegan Mujaddara',
        ingredients: [
            {
                name: '*',
                items: [
                    {
                        name: 'red onion',
                        quantity: new Double(1),
                        unit: 'sliced',
                    },
                    {
                        name: 'green lentils',
                        quantity: new Double(1.5),
                        unit: 'c',
                    },
                    {
                        name: 'long or medium grain rice (basmati, jasmine, or other long grain variety)',
                        quantity: new Double(3),
                        unit: 'c',
                    },
                    {
                        name: 'cumin',
                        quantity: new Double(3),
                        unit: 'tsp',
                    },
                    {
                        name: 'cayenne',
                        quantity: new Double(1),
                        unit: 'tsp',
                    },
                    {
                        name: 'bay leaf',
                        quantity: new Double(1),
                        unit: '',
                    },
                    {
                        name: 'garlic powder',
                        quantity: new Double(1),
                        unit: 'tsp',
                    },
                    {
                        name: 'cinnamon stick',
                        quantity: new Double(1),
                        unit: 'inch',
                    },
                ]
            }
        ],
        instructions: [
           'Cook lentils. Fill pot with water to about 1” above lentils. Bring to a boil and then simmer with lid on for 10-20 min, until soft',
           'In a pot, saute onions with 1 tsp cumin, salt, and plenty of black pepper',
           'Once browned, remove half of the onions and set aside',
           'Add rice uncooked to the pot and continue to saute, until well combined with onions. Add the remaining cumin, cinnamon, cayenne, bay leaf, and lentils. Gently combine',
           'Fill pot with water to about 1” above lentils and rice. Add 1 tsp salt',
           'Bring to a boil, then cover and simmer on low heat for about 10-15 minutes. Stir occasionally',
           'Once rice is cooked, add more salt or pepper to taste',
           'Remove from heat. Top with remaining caramelized onions, lettuce, tahini, and other toppings of your choosing',
        ],
    },
    {
        _id: new ObjectId(),
        title: 'Chipotle Quinoa Chili',
        image: '',
        description: '',
        ingredients: [
            {
                name: '*',
                items: [
                    {
                        name: 'black beans (or any bean of your choice)',
                        quantity: new Double(2),
                        unit: 'c',
                    },
                    {
                        name: 'vegetable broth, water, or bean broth',
                        quantity: new Double(2),
                        unit: 'c',
                    },
                    {
                        name: 'medium onion',
                        quantity: new Double(1),
                        unit: 'sliced',
                    },
                    {
                        name: 'garlic cloves',
                        quantity: new Double(3),
                        unit: 'minced',
                    },
                    {
                        name: 'mushrooms',
                        quantity: new Double(4),
                        unit: 'sliced thickly',
                    },
                    {
                        name: 'red bell pepper',
                        quantity: new Double(1),
                        unit: 'sliced',
                    },
                    {
                        name: 'corn',
                        quantity: new Double(1),
                        unit: 'c',
                    },
                    {
                        name: 'ancho pepper (or any hot pepper)',
                        quantity: new Double(1),
                        unit: '1/2 sliced, 1/2 whole',
                    },
                    {
                        name: 'carrot',
                        quantity: new Double(1),
                        unit: 'diced',
                    },
                    {
                        name: 'crushed tomatoes',
                        quantity: new Double(1),
                        unit: 'can',
                    },
                    {
                        name: 'oregano',
                        quantity: new Double(1),
                        unit: 'tsp',
                    },
                    {
                        name: 'chili powder',
                        quantity: new Double(1),
                        unit: 'tsp',
                    },
                    {
                        name: 'cumin',
                        quantity: new Double(1),
                        unit: 'tsp',
                    },
                    {
                        name: 'nutritional yeast',
                        quantity: new Double(1),
                        unit: 'tbsp',
                    },
                    {
                        name: 'chipotle chili powder, or canned chipotle chili pepper',
                        quantity: new Double(1),
                        unit: 'tsp',
                    },
                    {
                        name: 'bay leaf',
                        quantity: new Double(1),
                        unit: '',
                    },
                    {
                        name: 'sugar',
                        quantity: new Double(1),
                        unit: 'pinch',
                    },
                    {
                        name: 'cinnamon',
                        quantity: new Double(1),
                        unit: 'pinch',
                    },
                ]
            }
        ],
        instructions: [
           'Caramelize the onions and garlic. Sauté on medium heat with the sugar to help them brown. I used the extra water from boiling my dried black beans to water sauté, however you could use vegetable broth, water, or olive oil instead',
           'Once the onions and garlic are browning, add the mushrooms and continue to brown for a few minutes',
           'Add red bell pepper and ancho pepper, continue to brown until well caramelized',
           'Add oregano, chili powder, cumin, chipotle pepper and sauté until fragrant',
           'Add beans, carrots, tomatoes, bay leaf and 1-2c of additional broth/water and bring to a boil',
           'Once boiling, add quinoa and a generous pinch of salt. Cover pot and allow it to simmer on medium low heat for approximately 15 minutes, stirring occasionally',
           'Check to see if quinoa is fully cooked. It look well hydrated, and have absorbed lots of liquid. Taste it to see if the seeds are softened. Add additional water or broth if the chili is too dry',
           'Continue to simmer. Add corn, nutritional yeast, and the pinch of cinnamon. Add small amounts of cinnamon at a time, and taste carefully as it only needs a small amount',
           'Add salt and pepper to taste',
           'Once the components are well melded together and seasoned, serve with toppings of your choice (e.g. scallions, cilantro, lime, and vegan sour cream)',
        ],
    },
    {
        _id: new ObjectId(),
        title: 'Quesadillas Veganas',
        image: '',
        description: 'Quesadillas with chili barbeque tempeh, portobello mushrooms, and roasted peppers and onions. Served with salad, rice, and guacamole.',
        ingredients: [
            {
                name: '*',
                items: [
                    {
                        name: 'corn tortillas',
                        quantity: new Double(0),
                        unit: '',
                    },
                    {
                        name: 'mixture of sweet and hot peppers (i.e. jalapeño, bell peppers, and poblano)',
                        quantity: new Double(0),
                        unit: '',
                    },
                    {
                        name: 'portabello mushroom cut into large chunks',
                        quantity: new Double(1),
                        unit: '',
                    },
                    {
                        name: 'crumbled or cut tempeh',
                        quantity: new Double(1),
                        unit: '1/4" chunks',
                    },
                    {
                        name: 'red onion cut into 2 or 3 large chunks',
                        quantity: new Double(1),
                        unit: '',
                    },
                    {
                        name: 'vegan cheese',
                        quantity: new Double(0),
                        unit: '',
                    },
                    {
                        name: 'chili powder',
                        quantity: new Double(0),
                        unit: '',
                    },
                    {
                        name: 'cumin',
                        quantity: new Double(0),
                        unit: '',
                    },
                    {
                        name: 'garlic powder',
                        quantity: new Double(0),
                        unit: '',
                    },
                    {
                        name: 'salt',
                        quantity: new Double(0),
                        unit: '',
                    },
                    {
                        name: 'black pepper',
                        quantity: new Double(0),
                        unit: '',
                    },
                ]
            }
        ],
        instructions: [
           'In a mixing bowl, season tempeh chunks with chili powder, cumin, garlic powder, bbq sauce, black pepper, and salt',
           'Put whole peppers, mushrooms, and onion on a parchment lined baking sheet. Season with salt and pepper',
           'Place seasoned tempeh on a separate parchment lined baking sheet',
           'Bake veggies, and tempeh at 400F',
           'After 5-10 minutes of baking, toss the tempeh and taste. Season to taste. If tempeh is crisp and hot, remove from oven. Otherwise, allow it to bake for another 5-10 minutes',
           'After 10 minutes of baking, flip the vegetables. Continue to bake until they are well browned',
           'Once everything is well roasted, slice the onions and peppers',
           'Assemble the quesadillas by layering cheese, and the previously roasted fillings between 2 tortillas',
           'Place assembled quesadillas back onto the parchment-lined baking sheets, and return to the 400F oven',
           'After about 10 minutes of baking, check on the quesadillas. If they are beginning to brown, flip them over and continue to bake',
           'Once both sides of the quesadillas are well browned, and the cheese is melted, remove from oven. Slice into halves or quarters and serve with salsa, guacamole, or vegan sour cream',
           'Combine any remaining quesadilla toppings with lettuce and green onion to make a salad, and dress with salt and lime juice',
        ],
    },
    {
        _id: new ObjectId(),
        title: 'Rum Bliss',
        image: '',
        description: 'Apple Rum Compote with Coconut Bliss\' Naked Ice Cream',
        ingredients: [
            {
                name: '*',
                items: [
                    {
                        name: 'apple',
                        quantity: new Double(1),
                        unit: 'sliced',
                    },
                    {
                        name: 'sugar',
                        quantity: new Double(2),
                        unit: 'tbsp',
                    },
                    {
                        name: 'water',
                        quantity: new Double(0.5),
                        unit: 'c',
                    },
                    {
                        name: 'vanilla extract',
                        quantity: new Double(1),
                        unit: 'tsp',
                    },
                    {
                        name: 'cinnamon',
                        quantity: new Double(1),
                        unit: 'tsp',
                    },
                    {
                        name: 'dark rum',
                        quantity: new Double(0.25),
                        unit: 'c',
                    },
                    {
                        name: 'tapioca starch',
                        quantity: new Double(1),
                        unit: 'tsp',
                    },
                    {
                        name: 'vegan ice cream',
                        quantity: new Double(0),
                        unit: '',
                    },
                ]
            }
        ],
        instructions: [
           'Add apple slices, sugar, water, vanilla, cinnamon, and dark rum into a saucepan',
           'Bring to a simmer, and cover for 10-15 minutes. Stir occasionally. Add more water if the mixture becomes dry',
           'Add tapioca starch, and stir well',
           'Continue to simmer until apples are able to be pierced with a fork, but still firm',
           'Remove from heat and serve with ice cream',
        ],
    },
];