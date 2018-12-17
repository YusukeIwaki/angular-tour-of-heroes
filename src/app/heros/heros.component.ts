import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  currentHero: Hero;
  heros: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeros().subscribe(heros => {
      this.heros = heros;
    })
  }

  setCurrentHero(hero: Hero) {
    this.currentHero = hero;
  }
}
