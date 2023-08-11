import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';

const PointOfSale = () => {
  const [products] = useState([
    { name: 'Cumi Tepung', price: 45000, imageSrc: '/img/cumi-goreng-tepung.jpg', alt: 'Cumi Goreng Tepung' },
    { name: 'Cumi Bakar', price: 50000, imageSrc: '/img/Cumi-bakar.jpg', alt: 'Cumi Goreng Bakar' },
    { name: 'Cumi Cabe', price: 37000, imageSrc: '/img/cumi-cabe.jpg', alt: 'Cumi Cabe' },
    { name: 'Cumi & Kerang', price: 60000, imageSrc: '/img/cumi-kerang.jpg', alt: 'Cumi & Kerang' },
    { name: 'Cah Kailan', price: 50000, imageSrc: '/img/cah-kailan.jpg', alt: 'Cah Kailan' },
    { name: 'Tahu Goreng', price: 35000, imageSrc: '/img/tahu-goreng.jpeg', alt: 'Tahu Goreng' },
    { name: 'Cah Taoge', price: 45000, imageSrc: '/img/cah-taoge.jpg', alt: 'Cah Taoge' },
    { name: 'Sayuran', price: 25000, imageSrc: '/img/sayuran.jpeg', alt: 'Sayuran' },
    { name: 'Kerang Bambu', price: 55000, imageSrc: '/img/KERANG-BAMBU.jpg', alt: 'Kerang Bambu' },
    { name: 'Kepiting Padang', price: 50000, imageSrc: '/img/Kepiting-padang.jpg', alt: 'Kepiting Padang' },
    { name: 'Gurame Asam', price: 15000, imageSrc: '/img/Gurame-asam.jpg', alt: 'Gurame Asam' },
    { name: 'Ikan', price: 20000, imageSrc: '/img/', alt: 'Ikan' },
    { name: 'Udang Bakar', price: 35000, imageSrc: '/img/udang-bakar.jpg', alt: 'Udang Bakar' },
    { name: 'Udang Saos', price: 55000, imageSrc: '/img/udang-saos.jpg', alt: 'Udang Saos' },
    { name: 'Udang Mayones', price: 45000, imageSrc: '/img/udang-mayones.jpeg', alt: 'Udang Mayones' },
    { name: 'Minuman', price: 23000, imageSrc: '/img/minuman.jpg', alt: 'Minuman' },
    { name: 'Iced Tea', price: 20000, imageSrc: '/img/iced-tea.png', alt: 'Iced Tea' },
    { name: 'Es Jeruk Nipis', price: 15000, imageSrc: '/img/jeruk-nipis.jpeg', alt: 'Es Jeruk Nipis' },
    { name: 'Nasi Putih', price: 15000, imageSrc: '/img/nasi-putih.png', alt: 'Nasi Putih' },
    { name: 'Happy Hour', price: 15000, imageSrc: '/img/', alt: 'Happy Hour' },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.name === product.name);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  function saveBill() {
    // Logika untuk menyimpan bill
    alert('Bill telah disimpan.');
  }

  const printBill = () => {
    // Logika untuk mencetak bill
    alert('Bill telah dicetak.');
  };

  return (
    <div className="point-of-sale">
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} saveBill={saveBill} printBill={printBill} />
    </div>
  );
};

export default PointOfSale;
