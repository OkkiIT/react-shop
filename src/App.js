import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from 'axios';


function App() {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://6115962e8f38520017a38566.mockapi.io/items')
    .then(res=>{setItems(res.data)});
  }, []);
  
  useEffect(()=>{
    axios.get('https://6115962e8f38520017a38566.mockapi.io/cart')
    .then(res=>setCartItems(res.data))
  },[])

  const onAddToCart = (obj) => {
    axios.post('https://6115962e8f38520017a38566.mockapi.io/cart',obj)
    setCartItems(prev => [...prev, obj])
  }




  const onRemoveFromCart=(id)=>{
    axios.delete(`https://6115962e8f38520017a38566.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item=>item.id!==id))
  }

  const onChangeSearchInput = (event)=>{
    setSearchValue(event.target.value)
  }

  const updateCart = ()=>{
    axios.get('https://6115962e8f38520017a38566.mockapi.io/cart')
    .then(res=>setCartItems(res.data))
  }

  return (
    <div className='wrapper clear'>
      {cartOpened && <Drawer 
      items={cartItems} 
      closeCart={() => setCartOpened(false)}
      onRemove={onRemoveFromCart} />}
      <Header onClickCart={() => {setCartOpened(true) ;updateCart()}} />

      <div className='content p-40'>
        <div  className='d-flex align-center mb-40 justify-between'>
          <h1 className='flex-wrap'>{searchValue?`Поиск по щапросу:${searchValue}`:'Все Кроссовки'}</h1>
          <div className='search-block d-flex align-center' >
            <img alt='seacrh' src='/img/search.svg' width={18} height={18} />
            <input value={searchValue} onChange={onChangeSearchInput} placeholder='Поиск...' />
            {searchValue?<img onClick={()=>setSearchValue('')} src='/img/btn-remove.svg' alt='remove' />:null}
          </div>
        </div>

        <div className='d-flex flex-wrap'>
          {items.filter((item)=>item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item,index) => {
            return (
              <Card
                key={item.id}
                title={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlus={(obj) => onAddToCart(obj)}
                isFavorited={item.isFavorite}
              />
            )
          })}
        </div>

      </div>
    </div>
  );
}

export default App;
