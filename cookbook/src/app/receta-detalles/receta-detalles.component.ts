import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetarioService } from '../recetario.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-receta-detalles',
  standalone: true,
  imports: [NgFor],
  templateUrl: './receta-detalles.component.html',
  styleUrl: './receta-detalles.component.css'
})
export class RecetaDetallesComponent implements OnInit {
    receta: any;

    constructor(
        private route: ActivatedRoute,
        private recetarioService: RecetarioService
    ){}
    
    ngOnInit(): void {      
      
      const idParam = this.route.snapshot.paramMap.get
      if(idParam !== null){
        const id = +idParam;
        this.receta = this.recetarioService.getReceta(id);     
      }else{
        console.error('No ID parameter found in the route');
      }
      
    }

}
