import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent { 
  types: Type[] = [
    {
      id: 12,
      name: 'GRASS',
      textColor: '#36AC3D'
    },
    {
      id: 10,
      name: 'FIRE',
      textColor: '#D38851'
    },
    {
      id: 7,
      name: 'BUG',
      textColor: '#B4C36F'
    },
    {
      id: 18,
      name: 'FAIRY',
      textColor: '#36AC3D'
    },
    {
      id: 16,
      name: 'DRAGON',
      textColor: '#36AC3D'
    },
    {
      id: 8,
      name: 'GHOST',
      textColor: '#71618A'
    },
    {
      id: 5,
      name: 'GROUND',
      textColor: '#BDAB4F'
    },
    {
      id: 14,
      name: 'PSYCHIC',
      textColor: '#BA4777'
    },
    {
      id: 9,
      name: 'STEEL',
      textColor: '#6E8D95'
    },
    {
      id: 17,
      name: 'DARK',
      textColor: '#36AC3D'
    },
    {
      id: 13,
      name: 'ELECTRIC',
      textColor: '#B3975C'
    },
  ];
}

interface Type {
  id: number;
  name: string;
  textColor: string;
}
