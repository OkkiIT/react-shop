const Header =(props)=>{
    return (
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
          <li onClick={props.onClickCart} className='mr-30 cu-p'>
            <img width={18} height={18} src='/img/cart.svg'></img>
            <span>12005 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src='/img/user.svg'></img>
          </li>
        </ul>
      </header>
    )
}
export default Header