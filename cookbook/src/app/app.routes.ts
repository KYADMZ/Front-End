import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaRecetasComponent } from './lista-recetas/lista-recetas.component';
import { RecetaDetallesComponent } from './receta-detalles/receta-detalles.component';



const routes: Routes = [
  {path: '', component: ListaRecetasComponent},
  { path: 'recetas', component: ListaRecetasComponent},
  { path: 'recetas/:id',component: RecetaDetallesComponent },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
exports: [RouterModule], 
})
export class AppRoutingModule{}