import { CurrencyPipe } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-carteiras',
  imports: [CurrencyPipe, MatCardModule, MatDivider, MatInputModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  templateUrl: './carteiras.component.html',
  styleUrl: './carteiras.component.scss',
})
export class CarteirasComponent {
  entrada = 5000;
}
