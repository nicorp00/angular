import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { FoodsComponent } from "./components/foods/foods.component";
import { AboutComponent } from "./components/about/about.component";
import { FoodComponent } from "./components/food/food.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'foods', component: FoodsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'food/:id', component: FoodComponent},
    {path: 'buscar/:termino', component: BuscadorComponent},



    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES/*, {useHash: true}*/);


/*HAY QUE ESCRIBIRLO MANUALMENTE
import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const APP_ROUTES: Routes = [
    {path: 'routePath', component: Component},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
*/