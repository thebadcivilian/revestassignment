"use client";
import ProductCard from './components/ProductCard';
import { useState } from 'react';
import Data from './components/Data';
import Header from './components/Header';

interface Product {
  id: number;
  productName: string;
  price: number | any;
}

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortedData, setSortedData] = useState<Product[]>(Data);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleSortPriceAscending = () => {
    const sortedByPriceAsc = [...sortedData].sort((a, b) => a.price - b.price);
    setSortedData(sortedByPriceAsc);
  };

  const handleSortPriceDescending = () => {
    const sortedByPriceDesc = [...sortedData].sort((a, b) => b.price - a.price);
    setSortedData(sortedByPriceDesc);
  };

  const filteredProducts = sortedData.filter(product =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header
        onSearch={handleSearch}
        onSortPriceAscending={handleSortPriceAscending}
        onSortPriceDescending={handleSortPriceDescending}
      />
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default App;