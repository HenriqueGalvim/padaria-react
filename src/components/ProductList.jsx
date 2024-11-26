import React, { useEffect, useState } from 'react';
import api from '../services/api';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        alert('Erro ao buscar produtos.');
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - R$ {product.price.toFixed(2)} (Estoque: {product.stock})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;