import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ITransacao } from '../../models/interfaces';

@Component({
  imports: [
    CommonModule,
    DatePipe,
    CurrencyPipe,

    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.scss',
})
export class TransacoesComponent {
  columnsToDisplay = ['icone', 'valor', 'descricao', 'data'];
  transacoes: ITransacao[] = [
    {
      data: new Date(),
      descricao: 'Salario',
      idCarteira: 1,
      idCategoria: 1,
      idTransacao: 1,
      tipo: 'D',
      valor: 5000,
    },
    {
      data: new Date(),
      descricao: 'Salario',
      idCarteira: 1,
      idCategoria: 1,
      idTransacao: 1,
      tipo: 'D',
      valor: -2000,
    },
    {
      data: new Date(),
      descricao: 'Salario',
      idCarteira: 1,
      idCategoria: 1,
      idTransacao: 1,
      tipo: 'C',
      valor: -600,
    },
  ];
}
