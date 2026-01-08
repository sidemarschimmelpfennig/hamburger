export type OrderModel = {
  id: number;
  status: string;
  updated_at: number | null; // validação para banco de dado real de alteração  do produto
  created_at: number | null; // validação para banco de dado real de criação do produto
  deleted_at: number | null; // validação para banco de dado real de soft delete usado para cancelar e "excluir o produto"
};
