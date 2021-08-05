import React from "react";

function App() {
  return (
    <div className='wrapper clear'>

      <header className='p-40 d-flex justify-between align-center'>
        <div className='headerLeft d-flex align-center'>
          <img width={40} height={40} src='/img/logo.svg'></img>
          <div >
            <h3 className='text-uppercase'>React Shop</h3>
            <p className='opacity-5'>Магазин кроссовок</p>
          </div>
        </div>
        <div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img width={18} height={18} src='/img/cart.svg'></img>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src='/img/user.svg'></img>
          </li>
        </ul>
      </header>

      <div className='content p-40'>
        <h1 className='mb-40' >Все Кроссовки</h1>
         
         <div className='d-flex '>
         <div className='card'>
          <img width={133} height={112} src='/img/crossiki/1.jpg' alt='crossik'></img>
          <h5>Мужские кроссовки Nike Blazer Mid</h5>
          <div className='d-flex justify-between align-center '>
            <div className='d-flex flex-column' >
              <span>Цена:</span>
              <b>12 999р</b>
            </div>
            <button className='button'><img src='/img/plus.png' width={11} height={11} alt='plus' /></button>
          </div>
        </div>

        <div className='card'>
          <img width={133} height={112} src='/img/crossiki/2.jpg' alt='crossik'></img>
          <h5>Мужские кроссовки Nike Blazer Mid</h5>
          <div className='d-flex justify-between align-center '>
            <div className='d-flex flex-column' >
              <span>Цена:</span>
              <b>12 999р</b>
            </div>
            <button className='button'><img src='/img/plus.png' width={11} height={11} alt='plus' /></button>
          </div>
        </div>

        <div className='card'>
          <img width={133} height={112} src='/img/crossiki/3.jpg' alt='crossik'></img>
          <h5>Мужские кроссовки Nike Blazer Mid</h5>
          <div className='d-flex justify-between align-center '>
            <div className='d-flex flex-column' >
              <span>Цена:</span>
              <b>12 999р</b>
            </div>
            <button className='button'><img src='/img/plus.png' width={11} height={11} alt='plus' /></button>
          </div>
        </div>

        <div className='card'>
          <img width={133} height={112} src='/img/crossiki/4.jpg' alt='crossik'></img>
          <h5>Мужские кроссовки Nike Blazer Mid</h5>
          <div className='d-flex justify-between align-center '>
            <div className='d-flex flex-column' >
              <span>Цена:</span>
              <b>12 999р</b>
            </div>
            <button className='button'><img src='/img/plus.png' width={11} height={11} alt='plus' /></button>
          </div>
        </div>

         </div>

      </div>
    </div>
  );
}

export default App;
