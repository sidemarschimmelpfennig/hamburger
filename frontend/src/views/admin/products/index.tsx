import { useState } from 'react';

export function AdminProducts() {
  const [products, setProducts] = useState<any[]>([]);

  return (
    <div>
      <h2>Produtos</h2>
      {/* Aqui você pode adicionar a lógica para listar, adicionar, editar e excluir produtos */}
    </div>
  );
}
