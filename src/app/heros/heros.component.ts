import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  currentHero: Hero;
  heros: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  constructor() { }

  ngOnInit() {
  }

  setCurrentHero(hero: Hero) {
    this.currentHero = hero;
  }

  updateHero(id: number, name: string) {
    for (let i = 0; i < this.heros.length; i++) {
      if (this.heros[i].id == id) {
        this.heros[i].name = name;
      }
    }
  }
}
