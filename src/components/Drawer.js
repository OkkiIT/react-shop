const Drawer = ({ onRemove, closeCart, items = [] }) => {
  return (
    <div className='overlay' >
      <div iv className='drawer'>
        <h2 className='mb-30 justify-between d-flex' >Корзина <img onClick={closeCart} className='cu-p' src='/img/btn-remove.svg' /></h2>

       
        {items.length > 0 ? <>
        <div className='items'>
          {items.map(obj => {
            return (
              <div className='cartItem d-flex align-center mb-20'>
                <img className='mr-20' width={70} height={70} src={obj.imageUrl} alt='Sneakers' />
                <div>
                  <p className='mb-5'>{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img onClick={() => onRemove(obj.id)} src='/img/btn-remove.svg' alt='remove' />
              </div>
            )
          })}
        </div>
        <div className='cartTotalBlock'>
        <ul>
          <li className='d-flex'>
            <span>Итого:</span>
            <div></div>
            <b>21498</b>
          </li>

          <li className='d-flex'>
            <span>Налог 5%:</span>
            <div></div>
            <b>1074</b>
          </li>
        </ul>
        <button> Оформить заказ</button>
      </div>
      </>
        
        : <div className='cartEmpty d-flex align-center flex-column flex'>
          <img className='mb-20' width={120} height={120} src='/img/empty-cart.jpg' alt='sad'></img>
          <h2>Корзина пустая</h2>
          <p className='opacity-6'>добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          <button onClick={closeCart} className='greenButton'>
            <img src='/img/arrow.svg' alt='arrow'></img>
            Вернуться назад
          </button>
        </div>}
       
        

      </div>
    </div>
  )
}
export default Drawer