import type { ImageModel } from './ImageModel';
import type { OptionsModel } from './Options';

export type BurgersModel = {
  id: number;
  name: string; // nome do produto
  description: string; // descrição do produto
  patty: string; // carnes colocadas no produto
  bread: string; // pães colocados no produto
  optionals?: OptionsModel[]; //opcionais
  price: number;
  images: ImageModel[];
  created_at: number | null; // validação para banco de dado real de criação do produto
  updated_at: number | null; // validação para banco de dado real de alteração  do produto
  deleted_at: number | null; // validação para banco de dado real de soft delete usado para cancelar e "excluir o produto"
};
