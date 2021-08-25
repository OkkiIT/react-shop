import React,{useState}from 'react'
import styles from './Card.module.scss'



const Card =({cartItems, item, addToCart, isFavorite=false})=>{
    const [isFavorited,setIsFavorited]=useState(isFavorite)
    const { imageUrl, name, price, onFavorite } = item;

    const onClickPlus =()=>{
      addToCart(item);
    }

    return(
        <div className={styles.card}>
            <img width={133} height={112} src={imageUrl} alt='crossik'></img>
            <h5>{name}</h5>
            <div className='d-flex justify-between align-center '>
              <div className='d-flex flex-column' >
                <span>Цена:</span>
                <b>{price} руб </b>
              </div>
                <img  
                className={styles.plus} 
                onClick={onClickPlus} 
                src={cartItems.find(obj => obj.id === item.id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}  
                alt='plus' />
            </div>
          </div>
    )
}

export default Card