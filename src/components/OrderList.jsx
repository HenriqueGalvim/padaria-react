import React, { useEffect, useState } from 'react';
import api from '../services/api';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token'); // Obtém o token do localStorage
      if (!token) {
        alert('Token não encontrado. Faça login novamente.');
        return;
      }

      try {
        const response = await api.get('/orders', {
          headers: { Authorization: `Bearer ${token}` }, // Corrigida a interpolação
        });
        setOrders(response.data);
      } catch (error) {
        console.error(error);
        alert('Erro ao buscar pedidos.');
      }
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Lista de Pedidos</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            Pedido de {order.user.name} - Total: R$ {order.total.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
