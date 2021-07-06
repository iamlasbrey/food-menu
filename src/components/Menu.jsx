import './Menu.css'

const Menu = ({image,name, description,title,price,ratings }) => {
    const starrating=()=>{
        if(ratings=== 1) return <div> <i class="fas fa-star"></i> </div>
        if(ratings=== 2) return <div><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        if(ratings=== 3) return <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        if(ratings=== 4) return <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        if(ratings=== 5) return <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
    }

    return (
        <div className='menu'>
            <div className='top-container'>
                <img src={image} alt="" /> 
            </div>
            <div className='bottom-container'>
                <div className='name-price'>
                    <div className='name-price-section'><h4>{title}</h4> <h4>{price}</h4></div>
                <p className='server-with'> {name}</p>
                <p className='choice-of'>{description} </p>
                    </div>
                <div className='stars-add'>
                    <div className='star-container'>
                    {starrating()}
                    </div>
                    <div className='plus-container'>
                        <i class="fas fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
