import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
})
export class RecipesListComponent {
  recipes: Recipe[] = [
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
  ];
}
