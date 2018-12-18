import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heros: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeros().subscribe((heros) => {
      this.heros = heros.slice(0, 5);
    });
  }

}
