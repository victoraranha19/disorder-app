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
    title: 'Transações',
    path: PATH.TRANSACOES,
    loadComponent: () =>
      import('./pages/transacoes/transacoes.component').then(
        (c) => c.TransacoesComponent
      ),
  },
  {
    title: 'Carteiras',
    path: PATH.CARTEIRAS,
    loadComponent: () =>
      import('./pages/carteiras/carteiras.component').then(
        (c) => c.CarteirasComponent
      ),
  },
  {
    title: 'Categorias',
    path: PATH.CATEGORIAS,
    loadComponent: () =>
      import('./pages/categorias/categorias.component').then(
        (c) => c.CategoriasComponent
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'transacoes' },
];
