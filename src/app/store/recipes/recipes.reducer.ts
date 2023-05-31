import { Recipe } from 'src/app/recipes/recipe.model';
import { RECIPE_ACTIONS, RecipesActionTypes } from './recipes.actions';

export interface RecipesState {
  recipes: Recipe[] | null;
  loading: boolean;
}

const initialState: RecipesState = {
  recipes: [
    {
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
      name: 'Test',
      description: 'Test description!',
      imageUrl:
        'https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ingredients: [
        {
          name: 'Onions',
          amount: '200',
          unit: 'g',
        },
        {
          name: 'Tomatoes',
          amount: '5',
          unit: 'piece(s)',
        },
        {
          name: 'Meat',
          amount: '500',
          unit: 'g',
        },
      ],
      steps: [
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
    },
    {
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
      const modifiedRecipes = { ...state.recipes, ...action.payload };

      return {
        ...state,
        recipes: modifiedRecipes,
      };

    case RECIPE_ACTIONS.UPDATE:
      const updatedRecipe = {
        ...state.recipes[action.payload.recipeIdx],
        ...action.payload.recipe,
      };

      const updatedRecipes = [...state.recipes];
      updatedRecipes[action.payload.recipeIdx] = updatedRecipe;

      return {
        ...state,
        recipes: updatedRecipes,
      };

    case RECIPE_ACTIONS.DELETE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe, idx) => idx !== action.payload),
      };

    default:
      return state;
  }
}
