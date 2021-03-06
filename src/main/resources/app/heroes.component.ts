import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
  
  selectedHero: Hero;
  heroes : Hero[];

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService,
              private router: Router
  ) { }

  onSelect(hero: Hero) {
    this.selectedHero = hero; 
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
