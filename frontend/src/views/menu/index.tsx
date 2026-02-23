import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { BurgersModel } from '../../models/BurgersModel';
import { ProductCard } from './components';

export function Menu() {
  const [burgers, setBurgers] = useState<BurgersModel[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/burgers')
      .then(response => response.json())
      .then(data => setBurgers(data));
  }, []);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#ffbb33',
          }}
        >
          Nossos Hambúrgueres
        </h1>
        <p
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#ffbb33',
          }}
        >
          Confira nosso cardápio
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          alignContent: 'center',
          minHeight: '50vh',
          width: '100%',
        }}
      >
        {burgers.length > 0 &&
          burgers.map(burger => (
            <ProductCard product={burger} key={burger.id} />
          ))}
        {burgers.length > 0 && <button>Confirmar Pedido</button>}
        {burgers.length === 0 && (
          <p
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Nenhum hambúrguer encontrado
          </p>
        )}
      </div>
    </div>
  );
}
