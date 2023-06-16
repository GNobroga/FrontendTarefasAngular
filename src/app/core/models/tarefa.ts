export interface Tarefa {
  codigo?: number;
  titulo: string;
  descricao?: string;
  dataCriacao?: string;
  dataPrevisao: string;
  feito?: boolean
  listaId: number;
}
