
import React, { useState } from 'react';

const ProductFilter = ({ applyFilters }) => {
  const [nameFilter, setNameFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleApplyFilters = () => {
    applyFilters({ name: nameFilter, price: priceFilter, rating: ratingFilter });
  };

  return (
    <div className="product-filter">
      <input
        type="text"
        placeholder="Filter by name"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by price"
        value={priceFilter}
        onChange={(e) => setPriceFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
      />
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default ProductFilter;
