import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';
import { PATH } from '../../app.routes';

@Component({
  imports: [
    CommonModule,

    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss',
})
export class MenuLateralComponent {
  private _rota = signal<PATH>(PATH.TRANSACOES);
  public titulo = computed<string>(() => {
    switch (this._rota()) {
      case PATH.TRANSACOES:
        return 'Transações do mês';
      case PATH.CARTEIRAS:
        return 'Alocação em carteiras';
      case PATH.CATEGORIAS:
        return 'Classificação por categorias';
      default:
        return 'Disorder - Gerenciamento financeiro';
    }
  });

  constructor(private router: Router) {}

  onMenuItemClick(menu: string, drawer: any) {
    this._rota.set(menu as PATH);
    drawer.close();
    this.router.navigate(['/', menu]);
  }
}
