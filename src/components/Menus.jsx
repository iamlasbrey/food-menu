import "./Menus.css"
import Menu from './Menu'
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";

const override = css`
    display: block;
    margin: 0 auto;
`;

const Menus = ({foodMenu, loading}) => {
    if(loading){
        return <div className='loader'> <BounceLoader color='#FA9E0D;' loading={loading} css={override} size={300} /> </div> }
    return (
        
        <div className='menus'>
            {
                foodMenu.map((menu)=>{
                    return <Menu 
                        key={menu.id}
                        image={menu.strMealThumb}
                        name={menu.strMeal}
                        description={menu.description}
                        title={menu.title}
                        price={menu.price}
                        ratings={menu.ratings}
                    />
                })
            }
            
        </div>
    )
}

export default Menus
