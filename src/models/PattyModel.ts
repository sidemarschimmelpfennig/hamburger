export type PattyModel = {
  id: number;
  name: string;
  price: number;
  updated_at: number | null; // validação para banco de dado real de alteração  do produto
  created_at: number | null; // validação para banco de dado real de criação do produto
  deleted_at: number | null; // validação para banco de dado real de soft delete usado para cancelar e "excluir o produto"
};
