import React from 'react';

const styles = {
  meusPedidos: {
    textAlign: 'center',
    margin: '20px',
  },
  pedidoCard: {
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  ul: {
    listStyle: 'none',
    padding: 0,
  },
  li: {
    margin: '5px 0',
  },
};

function MeusPedidos() {
  const pedidos = [
    {
      id: 1,
      dataPedido: '01/11/2023',
      status: 'Em andamento',
      itens: [
        { produto: 'Camisa', quantidade: 2 },
        { produto: 'Tênis', quantidade: 1 },
      ],
    },
    {
      id: 2,
      dataPedido: '02/11/2023',
      status: 'Entregue',
      itens: [{ produto: 'Boné', quantidade: 3 }],
    },
  ];

  return (
    <div style={styles.meusPedidos}>
      <h2>Meus Pedidos</h2>
      {pedidos.map((pedido) => (
        <div key={pedido.id} style={styles.pedidoCard}>
          <h3>Pedido #{pedido.id}</h3>
          <p>Data do Pedido: {pedido.dataPedido}</p>
          <p>Status: {pedido.status}</p>
          <ul style={styles.ul}>
            {pedido.itens.map((item, index) => (
              <li key={index} style={styles.li}>
                {item.quantidade}x {item.produto}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MeusPedidos;
