import Navbar from "./navBar";
import './CSS/home.css'
import React, { useState } from 'react';
// import Products from "./products";
// import Searchbar from "./searchbar";
import ProductCard from "./ProductCard";
import ProductFilter from "./FillterOption";




function Home(){
  const dummy='Lorem Ipsum adalah text contoh digunakan didalam industri pencetakan dan typesetting. Lorem Ipsum telah menjadi text contoh semenjak tahun ke 1500an, apabila pencetak yang kurang terkenal mengambil sebuah galeri cetak dan merobakanya menjadi satu buku spesimen. Ia telah bertahan bukan hanya selama lima kurun, tetapi telah melonjak ke era typesetting elektronik, dengan tiada perubahan ketara. Ia telah dipopularkan pada tahun 1960an dengan penerbitan Letraset yang mebawa kangungan Lorem Ipsum, dan lebih terkini dengan sofwer pencetakan desktop seperti Aldus PageMaker yang telah menyertakan satu versi Lorem Ipsum.';
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 90, rating: 4.5 ,image:"https://sm.pcmag.com/pcmag_me/photo/default/5a_drsu.jpg",dummy:dummy},
        { id: 2, name: 'Product 2', price: 60, rating: 3,image:"https://www.intex.in/cdn/shop/products/1_9b8014ad-124e-4742-a628-9a4c4affe617.jpg?v=1648711109",dummy:dummy},
        { id: 3, name: 'Product 3', price: 70, rating: 5,image: "https://static-assets.business.amazon.com/assets/in/24th-jan/705_Website_Blog_Appliances_1450x664.jpg.transform/1450x664/image.jpg",dummy:dummy},
        // Add more sample products as needed
      ]);
    
      const applyFilters = (filters) => {
        // Filter the products based on the provided criteria
        // For simplicity, let's assume filters are applied independently (AND condition)
        let filteredProducts = [...products];
    
        if (filters.name) {
          filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(filters.name.toLowerCase())
          );
        }
    
        if (filters.price) {
          filteredProducts = filteredProducts.filter(product =>
            product.price <= parseInt(filters.price)
          );
        }
    
        if (filters.rating) {
          filteredProducts = filteredProducts.filter(product =>
            product.rating >= parseInt(filters.rating)
          );
        }
    
        // Update the state to reflect the filtered products
        setProducts(filteredProducts);
      };
    
    return (
        <>
        <Navbar />
        {/* <Products /> */}
        <ProductFilter applyFilters={applyFilters} />
      <div className="product-list">
        {products.map(product => (
          <ProductCard
          imageSrc={product.image}
            key={product.id}
            productName={product.name}
            dummy={dummy}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
           
        </>
    );
}

export default Home;