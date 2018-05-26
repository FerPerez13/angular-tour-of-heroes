import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id:1,
    name:'Heroe' 
  };

  constructor() {
  }
  
  Batman = 'Batman';
  Superman = 'Superman';
  WonderWoman = 'Wonder Woman'
  Arrow = 'Arrow'

  ngOnInit() {
  
  }


}
