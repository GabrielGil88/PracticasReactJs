import React from 'react';
import ProductList from './ProductList';
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container">
      <h1>Todos los productos</h1>
      <ProductList />
    </div>
  );
};

export default Home;