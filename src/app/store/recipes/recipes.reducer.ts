import { Recipe } from 'src/app/store/recipes/recipe.model';
import { RECIPE_ACTIONS, RecipesActionTypes } from './recipes.actions';

export interface RecipesState {
  recipesList: Recipe[];
  loading: boolean;
}

const initialState: RecipesState = {
  recipesList: [
    {
      authorId: '1',
      name: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero qui aperiam aspernatur eveniet quia velit modi maiores earum rem voluptatum sapiente id repudiandae facere est labore assumenda, possimus dolores error consequatur neque? Distinctio, iste beatae! Minima hic nostrum animi, eaque ullam in velit enim dicta! Nemo nisi impedit excepturi dolor?',
      description: 'Test description!',
      imageUrl:
        'https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ingredients: [
        {
          name: 'Onion',
          amount: '200',
          unit: 'g',
        },
        {
          name: 'Tomatoes',
          amount: '5',
          unit: 'pieces',
        },
        {
          name: 'Meat',
          amount: '500',
          unit: 'g',
        },
      ],
    },
    {
      authorId: '1',
      name: 'Spaghetti Bolognese',
      description:
        'Delicious meal that can be done with just a few ingredients!',
      imageUrl:
        'https://images.pexels.com/photos/6287520/pexels-photo-6287520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ingredients: [
        {
          name: 'Onions',
          amount: '100',
          unit: 'g',
        },
        {
          name: 'Tomatoes',
          amount: '3',
          unit: 'piece(s)',
        },
        {
          name: 'Minced Meat',
          amount: '350',
          unit: 'g',
        },
        {
          name: 'Parmesan',
          amount: '100',
          unit: 'g',
        },
      ],
      cookingSteps: [
        {
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt natus nulla aut commodi enim quos vero soluta eaque id. Illum iure eligendi aut ipsum cum nobis. Consectetur, culpa id.',
        },
        {
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt natus nulla aut commodi enim quos vero soluta eaque id. Illum iure eligendi aut ipsum cum nobis. Consectetur, culpa id.',
        },
        {
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt natus nulla aut commodi enim quos vero soluta eaque id. Illum iure eligendi aut ipsum cum nobis. Consectetur, culpa id.',
        },
        {
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt natus nulla aut commodi enim quos vero soluta eaque id. Illum iure eligendi aut ipsum cum nobis. Consectetur, culpa id.',
        },
        {
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt natus nulla aut commodi enim quos vero soluta eaque id. Illum iure eligendi aut ipsum cum nobis. Consectetur, culpa id.',
        },
        {
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt natus nulla aut commodi enim quos vero soluta eaque id. Illum iure eligendi aut ipsum cum nobis. Consectetur, culpa id.',
        },
        {
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt natus nulla aut commodi enim quos vero soluta eaque id. Illum iure eligendi aut ipsum cum nobis. Consectetur, culpa id.',
        },
        {
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt natus nulla aut commodi enim quos vero soluta eaque id. Illum iure eligendi aut ipsum cum nobis. Consectetur, culpa id.',
        },
        {
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt natus nulla aut commodi enim quos vero soluta eaque id. Illum iure eligendi aut ipsum cum nobis. Consectetur, culpa id.',
        },
      ],
      likes: 5,
      comments: [
        {
          authorId: '1',
          content: 'I like this recipe very much!',
          date: new Date(),
          likes: 2,
        },
        {
          authorId: '3',
          content: 'Can recommend it!',
          date: new Date(),
          likes: 4,
        },
        {
          authorId: '2',
          content: "I've tasted better spaghetti bolognese...",
          date: new Date(),
          likes: 0,
        },
        {
          authorId: '4',
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, soluta facilis officiis quos voluptate earum voluptatibus, et veritatis esse qui tenetur necessitatibus adipisci dolorum recusandae sunt minus vel dolore at sed suscipit quod aut temporibus atque. Quia veniam, praesentium deleniti odit inventore aliquid ex consequuntur magni, quisquam beatae, consectetur vitae?',
          date: new Date(),
          likes: 5,
        },
      ],
    },
    {
      authorId: '1',
      name: 'Test',
      description: 'Test description!',
      imageUrl: null,
      ingredients: [
        {
          name: 'Onion',
          amount: '200',
          unit: 'g',
        },
        {
          name: 'Tomatoes',
          amount: '5',
          unit: 'pieces',
        },
        {
          name: 'Meat',
          amount: '500',
          unit: 'g',
        },
      ],
    },
    {
      authorId: '1',
      name: 'Test',
      description: 'Test description!',
      imageUrl:
        'https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ingredients: [
        {
          name: 'Onion',
          amount: '200',
          unit: 'g',
        },
        {
          name: 'Tomatoes',
          amount: '5',
          unit: 'pieces',
        },
        {
          name: 'Meat',
          amount: '500',
          unit: 'g',
        },
      ],
    },
    {
      authorId: '1',
      name: 'Test',
      description: 'Test description!',
      imageUrl:
        'https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ingredients: [
        {
          name: 'Onion',
          amount: '200',
          unit: 'g',
        },
        {
          name: 'Tomatoes',
          amount: '5',
          unit: 'pieces',
        },
        {
          name: 'Meat',
          amount: '500',
          unit: 'g',
        },
      ],
    },
    {
      authorId: '1',
      name: 'Test',
      description: 'Test description!',
      imageUrl:
        'https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ingredients: [
        {
          name: 'Onion',
          amount: '200',
          unit: 'g',
        },
        {
          name: 'Tomatoes',
          amount: '5',
          unit: 'pieces',
        },
        {
          name: 'Meat',
          amount: '500',
          unit: 'g',
        },
      ],
    },
    {
      authorId: '1',
      name: 'Test',
      description: 'Test description!',
      imageUrl:
        'https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ingredients: [
        {
          name: 'Onion',
          amount: '200',
          unit: 'g',
        },
        {
          name: 'Tomatoes',
          amount: '5',
          unit: 'pieces',
        },
        {
          name: 'Meat',
          amount: '500',
          unit: 'g',
        },
      ],
    },
    {
      authorId: '1',
      name: 'Test',
      description: 'Test description!',
      imageUrl:
        'https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ingredients: [
        {
          name: 'Onion',
          amount: '200',
          unit: 'g',
        },
        {
          name: 'Tomatoes',
          amount: '5',
          unit: 'pieces',
        },
        {
          name: 'Meat',
          amount: '500',
          unit: 'g',
        },
      ],
    },
    {
      authorId: '1',
      name: 'Test',
      description: 'Test description!',
      imageUrl:
        'https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ingredients: [
        {
          name: 'Onion',
          amount: '200',
          unit: 'g',
        },
        {
          name: 'Tomatoes',
          amount: '5',
          unit: 'pieces',
        },
        {
          name: 'Meat',
          amount: '500',
          unit: 'g',
        },
      ],
    },
    {
      authorId: '1',
      name: 'Test',
      description: 'Test description!',
      imageUrl:
        'https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ingredients: [
        {
          name: 'Onion',
          amount: '200',
          unit: 'g',
        },
        {
          name: 'Tomatoes',
          amount: '5',
          unit: 'pieces',
        },
        {
          name: 'Meat',
          amount: '500',
          unit: 'g',
        },
      ],
    },
  ],
  loading: false,
};

export function recipesReducer(
  state = initialState,
  action: RecipesActionTypes
) {
  switch (action.type) {
    case RECIPE_ACTIONS.REFRESH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };

    case RECIPE_ACTIONS.ADD:
      const modifiedRecipes = { ...state.recipesList, ...action.payload };

      return {
        ...state,
        recipes: modifiedRecipes,
      };

    case RECIPE_ACTIONS.UPDATE:
      const updatedRecipe = {
        ...state.recipesList[action.payload.recipeIdx],
        ...action.payload.recipe,
      };

      const updatedRecipes = [...state.recipesList];
      updatedRecipes[action.payload.recipeIdx] = updatedRecipe;

      return {
        ...state,
        recipes: updatedRecipes,
      };

    case RECIPE_ACTIONS.DELETE:
      return {
        ...state,
        recipes: state.recipesList.filter(
          (recipe, idx) => idx !== action.payload
        ),
      };

    default:
      return state;
  }
}
