import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styles: [
  ]
})
export class FoodComponent implements OnInit {

  food:any ={};

  constructor(private activatedRoute: ActivatedRoute,
              private _foodsService: FoodsService) { 
    this.activatedRoute.params.subscribe(params =>{
      this.food = this._foodsService.getFood(params['id']);
      console.log(this.food);
    })
  }

  ngOnInit(): void {
  }

}
