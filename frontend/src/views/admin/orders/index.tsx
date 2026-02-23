import { useState } from 'react';
import { styles } from './styles';

type OrderItem = {
  name: string;
  qty: number;
  price: number;
};

type Order = {
  id: number;
  customer: string;
  address: string;
  status: string;
  items: OrderItem[];
};

const mockOrders: Order[] = [
  {
    id: 1,
    customer: 'João Silva',
    address: 'Rua Central, 120',
    status: 'Aguardando',
    items: [
      { name: 'X-Burger', qty: 2, price: 18 },
      { name: 'Batata Frita', qty: 1, price: 12 },
    ],
  },
  {
    id: 2,
    customer: 'Maria Souza',
    address: 'Av. Brasil, 450',
    status: 'Aguardando',
    items: [
      { name: 'X-Salada', qty: 1, price: 20 },
      { name: 'Refrigerante', qty: 2, price: 6 },
    ],
  },
];

export function AdminOrders() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const calculateTotal = (items: OrderItem[]) =>
    items.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <div style={styles.container}>
      {/* LISTA DE PEDIDOS */}
      <div style={styles.ordersList}>
        <h3>Pedidos</h3>

        {mockOrders.map(order => (
          <div
            key={order.id}
            style={{
              ...styles.orderCard,
              ...(hovered === order.id ? styles.orderCardHover : {}),
            }}
            onMouseEnter={() => setHovered(order.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelectedOrder(order)}
          >
            <div style={styles.orderTitle}>
              Pedido #{order.id} — {order.customer}
            </div>

            <div style={styles.orderInfo}>{order.address}</div>

            <div style={styles.orderStatus}>{order.status}</div>
          </div>
        ))}
      </div>

      {/* DETALHES */}
      <div style={styles.details}>
        {!selectedOrder ? (
          <div style={styles.empty}>Selecione um pedido</div>
        ) : (
          <>
            <h2>Pedido #{selectedOrder.id}</h2>
            <p>
              <strong>Cliente:</strong> {selectedOrder.customer}
            </p>
            <p>
              <strong>Endereço:</strong> {selectedOrder.address}
            </p>

            <div style={styles.itemsList}>
              {selectedOrder.items.map((item, index) => (
                <div key={index} style={styles.item}>
                  <span>
                    {item.qty}x {item.name}
                  </span>
                  <span>R$ {(item.qty * item.price).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div style={styles.total}>
              Total: R$ {calculateTotal(selectedOrder.items).toFixed(2)}
            </div>

            <div style={styles.actions}>
              <button style={styles.accept}>Aceitar</button>
              <button style={styles.reject}>Recusar</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
