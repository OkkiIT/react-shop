import Card from "../components/Card/Card";

const Home =({
    cartItems,
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart})=>{
    return(
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
                addToCart={onAddToCart}
                isFavorite={item.isFavorite}
                onFavorite={(obj)=>onAddToFavorite(obj)}
                item={item}
                cartItems={cartItems}
              />
            )
          })}
        </div>

      </div>
    )
}

export default Home