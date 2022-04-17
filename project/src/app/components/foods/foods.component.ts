import { Component, OnInit } from '@angular/core';
//Foods se añadio al crear la interfaz
import { Foods, FoodsService } from 'src/app/services/foods.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styles: [
  ]
})
export class FoodsComponent implements OnInit {

  foods:Foods[]=[];
  /*Importar un servicio*/
  constructor(private _foodsService:FoodsService,
              private router:Router) 
    { }

  ngOnInit(){
    this.foods = this._foodsService.getFoods();
    //console.log(this.foods)
  }

  verFood(idx:number){
    this.router.navigate(['/food', idx])
  }
}
