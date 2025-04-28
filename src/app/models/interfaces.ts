export interface ITransacao {
  idTransacao: number;
  descricao: string;
  valor: number;
  idCategoria: number;
  idCarteira: number;
  data: Date;
  tipo: 'C' | 'D';
}
