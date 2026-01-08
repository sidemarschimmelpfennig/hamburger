import type { BreadModel } from './BreadModel';
import type { PattyModel } from './PattyModel';
import type { OptionsModel } from './Options';

export type BurgersModel = {
  id: number;
  name: string; // nome do cliente
  patty: keyof PattyModel['name']; // vem das carnes disponiveis
  bread: keyof BreadModel['name']; // vem dos pães disponiveis
  optionals?: OptionsModel[]; //opcionais
  updated_at: number | null; // validação para banco de dado real de alteração  do produto
  created_at: number | null; // validação para banco de dado real de criação do produto
  deleted_at: number | null; // validação para banco de dado real de soft delete usado para cancelar e "excluir o produto"
};
