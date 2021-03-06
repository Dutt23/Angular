
import { Hero } from '../hero';
import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { catchError, map, tap } from 'rxjs/operators';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
hero: Hero;
  constructor(
  private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location) { }
goBack():void
  {
  this.location.back();
}
  ngOnInit(): void {
    this.getHero();
  }
 getHero(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
}

}
