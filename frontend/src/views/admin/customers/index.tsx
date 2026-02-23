export function AdminCustomers() {
  return (
    <div style={styles.container}>
      <h1>Clientes</h1>
      <p>Aqui você pode gerenciar os clientes do sistema.</p>
      {/* Aqui você pode adicionar a lógica para listar, adicionar, editar e excluir clientes */}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
  },
  th: {
    borderBottom: '1px solid #ccc',
    textAlign: 'left' as const,
    padding: '8px',
  },
  td: {
    borderBottom: '1px solid #eee',
    padding: '8px',
  },
  actionButton: {
    marginRight: '8px',
    padding: '4px 8px',
    cursor: 'pointer' as const,
  },
};
