import React,{useState}from 'react'
import styles from './Card.module.scss'



const Card =({imageUrl,title,price,onPlus,isFavorite})=>{
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorited,setIsFavorited]=useState(isFavorite)

    const onClickPlus =()=>{
      onPlus({title,imageUrl,price});
      setIsAdded(!isAdded)
    }

    const onFavoriteClick =()=>{
      setIsFavorited(!isFavorited)
    }


    return(
        <div className={styles.card}>
            <div onClick={onFavoriteClick} className='favorite'>
              <img src={isFavorited?'/img/liked.svg':'/img/unliked.svg'} alt='Unliked' />
            </div>
            <img width={133} height={112} src={imageUrl} alt='crossik'></img>
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center '>
              <div className='d-flex flex-column' >
                <span>Цена:</span>
                <b>{price} руб </b>
              </div>
                <img  
                className={styles.plus} 
                onClick={onClickPlus} 
                src={isAdded?'/img/btn-checked.svg':'/img/btn-plus.svg'}  
                alt='plus' />
            </div>
          </div>
    )
}

export default Card