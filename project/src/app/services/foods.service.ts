import { Injectable } from "@angular/core";

@Injectable()
export class FoodsService{

    /*private foods:any[]=[]*/
    private foods:Foods[]=[
        {
            nombre:'Pizza',
            dificultad: 'Baja',
            calificacion: '4/5',
            img: 'assets/img/pizza.png',
            elaboracion: 'Compramos una pizza en el supermercado, precalentamos el horno y despues de 10 minutos introducimos la pizza'
        },

        {
            nombre:'Spaghetti',
            dificultad: 'Baja',
            calificacion: '3/5',
            img: 'assets/img/spaghetti.jpg',
            elaboracion: 'Calentamos una olla de agua hasta que hierva e introducimos los spaghetti despues de 8 minutos estarán listos'
        },

        {
            nombre:'Hamburguesa',
            dificultad: 'Media',
            calificacion: '4/5',
            img: 'assets/img/hamburguesa.jpg',
            elaboracion: 'Me resulta demasiado cansando escribirlo, nos vamos al Burger King y la compramos'
        }
    ];

    getFoods():Foods[]{
        return this.foods;
    }

    getFood(idx:any){
        return this.foods[idx];
    }
    
/* */
    buscarFoods(termino:any):Foods[]{

        let foodsArray:Foods[]=[];

        termino = termino.toLowerCase();

        for(let food of this.foods){
            let nombre = food.nombre.toLowerCase();
            if(nombre.indexOf(termino) >=0){
                foodsArray.push(food);
            }
        }

        return foodsArray;
    }
}

/*OBLIGA A QUE LO QUE SE AÑADA TENGA ESTAS CARACTERISTICAS*/
export interface Foods{
    nombre:String;
    dificultad:String;
    calificacion:String;
    img:String;
    elaboracion:String;
}

/*PARA CREAR UN SERVICIO
import { Injectable } from "@angular/core";

@Injectable()
export class nameService{
    constructor() {}
}
*/