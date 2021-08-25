import React, { useState, useEffect } from "react";

import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";




function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    axios.get('https://6115962e8f38520017a38566.mockapi.io/items')
      .then(res => { setItems(res.data)});
      
    axios.get('https://6115962e8f38520017a38566.mockapi.io/cart')
      .then(res => {
        setCartItems(res.data);
        console.log(res)
      })
      calculatePrice(cartItems);
  }, []);


  const calculatePrice = (cartItem) => {
    cartItem.forEach(item => {
      setTotalPrice(0 + item.price)
    })
  }

  const calcTotalPrice = (cartItem) => {
    let totalPrice = 0;
    cartItem.forEach(item => {

      totalPrice = item.price + totalPrice
    })
    return totalPrice
  }

  const isItemAddedToCart = (obj) => {
    return cartItems.find((item) => item.id === obj.id)
  };

  const onRemove = async (obj) => {
    const item = cartItems.find(item => item.id === obj.id);
    await axios.delete(`https://6115962e8f38520017a38566.mockapi.io/cart/${item._id}`);
    updateCart();
  }

  const onAdd = async (obj) => {
    await axios.post('https://6115962e8f38520017a38566.mockapi.io/cart', obj)
    updateCart();;
  }

  const onAddToCart = async (obj) => {
    try {
      if (isItemAddedToCart(obj)) {
        onRemove(obj);
      } else {
        onAdd(obj);
      }
    } catch (error) {
      alert(error)
    }


  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const updateCart = () => {
    axios.get('https://6115962e8f38520017a38566.mockapi.io/cart')
      .then(res => setCartItems(res.data))
  }

  if (cartOpened){}

  return (
    <div className='wrapper clear'>
      {cartOpened && <Drawer
        calcTotalPrice={calcTotalPrice}
        items={cartItems}
        closeCart={() => setCartOpened(false)}
        onRemove={onRemove} />
        }
      <Header totalPrice={calcTotalPrice(cartItems)} onClickCart={() => { setCartOpened(true); updateCart() }} />
      <Route path='/' exact>
        <Home
          cartItems={cartItems}
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
         
          onAddToCart={onAddToCart}
        />
      </Route>
      

    </div>
  );
}

export default App;
