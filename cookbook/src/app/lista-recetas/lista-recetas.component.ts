import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Receta } from '../recipe.model';
import { RecetarioService } from '../recetario.service';

@Component({
  selector: 'app-lista-recetas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista-recetas.component.html',
  styleUrl: './lista-recetas.component.css'
})
export class ListaRecetasComponent implements OnInit{
    recetario: Receta[] = [];

    constructor(private recetarioService: RecetarioService){}
    
    ngOnInit(): void{
        this.recetario = this.recetarioService.getRecetario();
    }
}
