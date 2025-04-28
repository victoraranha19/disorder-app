import { Routes } from '@angular/router';
import { CarteirasComponent } from './pages/carteiras/carteiras.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { TransacoesComponent } from './pages/transacoes/transacoes.component';

export enum PATH {
  TRANSACOES = 'transacoes',
  CARTEIRAS = 'carteiras',
  CATEGORIAS = 'categorias',
}

export const routes: Routes = [
  {
    title: 'Transações - Disorder',
    path: PATH.TRANSACOES,
    component: TransacoesComponent,
  },
  {
    title: 'Carteiras - Disorder',
    path: PATH.CARTEIRAS,
    component: CarteirasComponent,
  },
  {
    title: 'Categorias - Disorder',
    path: PATH.CATEGORIAS,
    component: CategoriasComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'transacoes' },
];
