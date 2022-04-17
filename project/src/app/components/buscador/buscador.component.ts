import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foods, FoodsService } from 'src/app/services/foods.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  foods:Foods[]=[];
  termino:any;

  constructor(private activatedRoute:ActivatedRoute,
              private _foodsService:FoodsService,
              private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.termino=(params['termino']);
      this.foods = this._foodsService.buscarFoods(params['termino']);
      console.log(this.foods)
    })
  }


  verFood(idx:number){
    this.router.navigate(['/food', idx])
  }
}
