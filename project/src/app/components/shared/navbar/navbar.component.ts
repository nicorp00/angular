import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  /*EN EL VIDEO ELIMINAR SPEC.TS Y CSS PQ NO LOS USA*/
  
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  buscarFood(termino:any){
    this.router.navigate(['/buscar',termino]);
  }

}
