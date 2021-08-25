import { Link } from "react-router-dom"

const Header = (props) => {
  return (
    <header className='p-40 d-flex justify-between align-center'>
      <div className='headerLeft d-flex align-center'>
        <Link to='/'>
        <img width={40} height={40} src='/img/logo.svg'></img>
        <div >
          <h3 className='text-uppercase'>Natnatnat</h3>
          <p className='opacity-5'>Sneaker shop</p>
        </div>
        </Link>
      </div>
      <div>
      </div>
      <ul className='d-flex'>
        <li onClick={props.onClickCart} className='mr-30 cu-p'>
          <img width={18} height={18} src='/img/cart.svg'></img>
          <span>{props.totalPrice} руб.</span>
        </li>
        <li>
          <img width={18} height={18} src='/img/user.svg'></img>
        </li>
      </ul>
    </header>
  )
}
export default Header