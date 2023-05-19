import { Component } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {
  recipes: Recipe[] = [
    {
      name: 'Test',
      description: 'Test description!',
      imageUrl:
        'https://sasina-kuhinja.com/wp-content/uploads/2019/10/vojni%C4%8Dki_grah_army_beans.jpg',
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
        'https://sasina-kuhinja.com/wp-content/uploads/2019/10/vojni%C4%8Dki_grah_army_beans.jpg',
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
        'https://sasina-kuhinja.com/wp-content/uploads/2019/10/vojni%C4%8Dki_grah_army_beans.jpg',
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
        'https://sasina-kuhinja.com/wp-content/uploads/2019/10/vojni%C4%8Dki_grah_army_beans.jpg',
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
        'https://sasina-kuhinja.com/wp-content/uploads/2019/10/vojni%C4%8Dki_grah_army_beans.jpg',
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
        'https://sasina-kuhinja.com/wp-content/uploads/2019/10/vojni%C4%8Dki_grah_army_beans.jpg',
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
