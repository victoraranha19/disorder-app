import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [
    CommonModule,
    RouterOutlet,

    MenuLateralComponent,
    MatIconModule,
    MatButtonModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
