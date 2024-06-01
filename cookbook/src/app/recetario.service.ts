import { Injectable } from '@angular/core';
import { Receta } from './recipe.model';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RecetarioService {

  private recetario: Receta[]= [
        {id: 1, titulo: 'Agua de limon', 
        ingredientes: ['agua natural','limones','Azucar'],
        instrucciones: ['1. Partimos los limones a la mitad y quitamos las semillas','2. Llenamos una jarra con agua',
        '3. Exprimimos los limones y mezclamos su jugo en la jarra','4. Agregamos y mezclamos el azúcar']},
        {id: 2, titulo: 'Cereal', 
        ingredientes: ['Leche','Cereal','Complementos (plátano, avena, etc).'], 
        instrucciones:['En un tazón vertimos el cereal y luego la leche, si queremos complementos podemos agregarlo']}
  ];
  constructor() { }

  getRecetario(){
    return this.recetario;
  }

  getReceta(id: Number){
    return this.recetario.find(receta => receta.id === id);
  }

}
