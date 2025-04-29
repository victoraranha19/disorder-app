import { Component } from '@angular/core';
import { TabelaTransacoesComponent } from '../../components/tabela-transacoes/tabela-transacoes.component';
import { ITransacao } from '../../models/interfaces';
import { MatDivider } from '@angular/material/divider';

@Component({
  imports: [TabelaTransacoesComponent, MatDivider],
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.scss',
})
export class TransacoesComponent {
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
      descricao: 'Investimento',
      idCarteira: 1,
      idCategoria: 1,
      idTransacao: 1,
      tipo: 'D',
      valor: -2000,
    },
    {
      data: new Date(),
      descricao: 'Consultoria',
      idCarteira: 1,
      idCategoria: 1,
      idTransacao: 1,
      tipo: 'C',
      valor: -150,
    },
  ];

  onEdit(transacao: ITransacao) {
    console.log('Edit', transacao);
  }

  onDelete(transacao: ITransacao) {
    console.log('Delete', transacao);
  }
}
