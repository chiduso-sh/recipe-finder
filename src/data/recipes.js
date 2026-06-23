// Static recipe data. No backend — this array is the app's "database".
// Each recipe has a unique id, a category, and fields used by search/filter/sort.

export const CATEGORIES = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Dessert',
  'Vegan',
  'Snack',
]

export const recipes = [
  {
    id: 1,
    name: 'Classic Pancakes',
    category: 'Breakfast',
    ingredients: ['flour', 'milk', 'eggs', 'butter', 'sugar', 'baking powder'],
    cookTime: 20,
    servings: 4,
    instructions:
      'Whisk the dry ingredients together, then add milk, eggs and melted butter. Stir until just combined. Pour batter onto a hot greased pan and cook until bubbles form, then flip and cook the other side.',
  },
  {
    id: 2,
    name: 'Avocado Toast',
    category: 'Breakfast',
    ingredients: ['bread', 'avocado', 'lemon', 'salt', 'chili flakes'],
    cookTime: 10,
    servings: 1,
    instructions:
      'Toast the bread until golden. Mash the avocado with lemon juice and salt. Spread over the toast and finish with a pinch of chili flakes.',
  },
  {
    id: 3,
    name: 'Greek Salad',
    category: 'Lunch',
    ingredients: ['cucumber', 'tomato', 'red onion', 'feta', 'olives', 'olive oil'],
    cookTime: 15,
    servings: 2,
    instructions:
      'Chop the cucumber, tomato and red onion into chunks. Combine in a bowl with olives and cubed feta. Drizzle with olive oil and a little oregano, then toss gently.',
  },
  {
    id: 4,
    name: 'Chicken Caesar Wrap',
    category: 'Lunch',
    ingredients: ['tortilla', 'chicken breast', 'romaine', 'parmesan', 'caesar dressing'],
    cookTime: 25,
    servings: 2,
    instructions:
      'Grill and slice the chicken breast. Toss the romaine with caesar dressing and parmesan. Pile everything onto a tortilla, roll tightly, and slice in half.',
  },
  {
    id: 5,
    name: 'Spaghetti Bolognese',
    category: 'Dinner',
    ingredients: ['spaghetti', 'ground beef', 'tomato', 'onion', 'garlic', 'olive oil'],
    cookTime: 45,
    servings: 4,
    instructions:
      'Brown the ground beef with onion and garlic. Add chopped tomatoes and simmer until thick. Boil the spaghetti until al dente, then serve the sauce over the pasta.',
  },
  {
    id: 6,
    name: 'Grilled Salmon',
    category: 'Dinner',
    ingredients: ['salmon', 'lemon', 'dill', 'olive oil', 'salt', 'pepper'],
    cookTime: 30,
    servings: 2,
    instructions:
      'Season the salmon with salt, pepper and dill. Brush with olive oil and grill skin-side down until the flesh flakes easily. Finish with a squeeze of lemon.',
  },
  {
    id: 7,
    name: 'Margherita Pizza',
    category: 'Dinner',
    ingredients: ['pizza dough', 'tomato', 'mozzarella', 'basil', 'olive oil'],
    cookTime: 35,
    servings: 3,
    instructions:
      'Stretch the dough onto a tray. Spread crushed tomato, add torn mozzarella, and bake in a very hot oven until the crust is golden. Top with fresh basil and a drizzle of olive oil.',
  },
  {
    id: 8,
    name: 'Chocolate Chip Cookies',
    category: 'Dessert',
    ingredients: ['flour', 'butter', 'sugar', 'eggs', 'chocolate chips', 'vanilla'],
    cookTime: 25,
    servings: 24,
    instructions:
      'Cream the butter and sugar, then beat in eggs and vanilla. Fold in flour and chocolate chips. Scoop onto a tray and bake until the edges are set but the centers are soft.',
  },
  {
    id: 9,
    name: 'Cheesecake',
    category: 'Dessert',
    ingredients: ['cream cheese', 'sugar', 'eggs', 'graham crackers', 'butter', 'vanilla'],
    cookTime: 90,
    servings: 8,
    instructions:
      'Press a crust of crushed graham crackers and butter into a pan. Beat cream cheese with sugar, eggs and vanilla, pour over the crust, and bake low and slow. Chill before serving.',
  },
  {
    id: 10,
    name: 'Vegan Buddha Bowl',
    category: 'Vegan',
    ingredients: ['quinoa', 'chickpeas', 'sweet potato', 'spinach', 'tahini', 'lemon'],
    cookTime: 40,
    servings: 2,
    instructions:
      'Roast cubed sweet potato and chickpeas until crisp. Cook the quinoa. Arrange everything over fresh spinach and drizzle with a tahini-lemon dressing.',
  },
  {
    id: 11,
    name: 'Vegan Lentil Curry',
    category: 'Vegan',
    ingredients: ['red lentils', 'coconut milk', 'onion', 'garlic', 'curry powder', 'tomato'],
    cookTime: 35,
    servings: 4,
    instructions:
      'Soften onion and garlic, then stir in curry powder. Add lentils, chopped tomato and coconut milk. Simmer until the lentils are tender and the curry has thickened.',
  },
  {
    id: 12,
    name: 'Vegan Banana Smoothie',
    category: 'Vegan',
    ingredients: ['banana', 'almond milk', 'peanut butter', 'oats', 'cinnamon'],
    cookTime: 5,
    servings: 1,
    instructions:
      'Add banana, almond milk, peanut butter, oats and a pinch of cinnamon to a blender. Blend until smooth and pour into a glass.',
  },
  {
    id: 13,
    name: 'Hummus and Veggies',
    category: 'Snack',
    ingredients: ['chickpeas', 'tahini', 'lemon', 'garlic', 'carrot', 'cucumber'],
    cookTime: 10,
    servings: 4,
    instructions:
      'Blend chickpeas, tahini, lemon juice and garlic until creamy, loosening with water as needed. Serve with sliced carrot and cucumber for dipping.',
  },
  {
    id: 14,
    name: 'Trail Mix',
    category: 'Snack',
    ingredients: ['almonds', 'cashews', 'raisins', 'dark chocolate', 'pumpkin seeds'],
    cookTime: 5,
    servings: 6,
    instructions:
      'Combine almonds, cashews, raisins, pumpkin seeds and chopped dark chocolate in a bowl. Mix well and store in an airtight container.',
  },
  {
    id: 15,
    name: 'French Omelette',
    category: 'Breakfast',
    ingredients: ['eggs', 'butter', 'chives', 'salt', 'pepper'],
    cookTime: 10,
    servings: 1,
    instructions:
      'Beat the eggs with salt and pepper. Melt butter in a pan over low heat, add the eggs, and stir gently until just set. Sprinkle with chives and fold into thirds.',
  },
  {
    id: 16,
    name: 'Beef Tacos',
    category: 'Dinner',
    ingredients: ['ground beef', 'taco shells', 'lettuce', 'cheese', 'tomato', 'onion'],
    cookTime: 30,
    servings: 4,
    instructions:
      'Brown the ground beef with onion and taco seasoning. Warm the taco shells and fill with beef, then top with lettuce, tomato and cheese.',
  },
  {
    id: 17,
    name: 'Tomato Basil Soup',
    category: 'Lunch',
    ingredients: ['tomato', 'onion', 'garlic', 'basil', 'vegetable stock', 'cream'],
    cookTime: 40,
    servings: 4,
    instructions:
      'Soften onion and garlic, add chopped tomatoes and stock, and simmer. Blend until smooth, stir in cream and fresh basil, and season to taste.',
  },
]
