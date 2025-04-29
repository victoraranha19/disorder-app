import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input, LOCALE_ID, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ITransacao } from '../../models/interfaces';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-tabela-transacoes',
  imports: [
    CommonModule,
    CurrencyPipe,
    DatePipe,

    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  templateUrl: './tabela-transacoes.component.html',
  styleUrl: './tabela-transacoes.component.scss',
})
export class TabelaTransacoesComponent {
  dataSource = input.required<ITransacao[]>();
  editRowClick = output<ITransacao>();
  deleteRowClick = output<ITransacao>();

  columnsToDisplay = [
    'icon',
    'valor',
    'descricao',
    'carteira',
    'categoria',
    'data',
    'acoes',
  ];

  editTransacao(transacao: ITransacao) {
    this.editRowClick.emit(transacao);
  }
  deleteTransacao(transacao: ITransacao) {
    this.deleteRowClick.emit(transacao);
  }
}
