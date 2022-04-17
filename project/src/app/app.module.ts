import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//RUTAS
import { APP_ROUTING } from './app.routes';

//SERVICIOS
import { FoodsService } from './services/foods.service';

//COMPONENTES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FoodsComponent } from './components/foods/foods.component';
import { FoodComponent } from './components/food/food.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FoodsComponent,
    FoodComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    FoodsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
