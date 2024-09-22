import './App.css';

import { useState } from 'react';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import CartModel from './Components/CartModel';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  };
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  };
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  return (
    <div className='app'>
      <Navbar cartCount={cartItems.length} openCart={openCart} />
      <ProductList addToCart={addToCart} cartItems={cartItems} />

      {isCartOpen &&
        <CartModel cartItems={cartItems}
          removeFromCart={removeFromCart}
          closeCart={closeCart} />}
    </div>


  );
}

export default App;
