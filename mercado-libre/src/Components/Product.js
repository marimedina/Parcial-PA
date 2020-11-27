import React from 'react';

const Product = ({product}) => {

    const {title, price, thumbnail, condition, available_quantity, permalink} = product

    

    return (
        <div className='container'>
                <div className='col s4 m5 l4'>
                    <div className='card light-blue darken-2'>
                        <div className='card-image'>
                            <img className='responsive-img' src={thumbnail}></img>
                        </div>
                        <div className="card-content">
                            
                            <span className='card-title'>{title}</span>
                            <h6>Price: ${price}</h6>
                            <h6>Condition: {condition}</h6>
                            <h6>Stock: {available_quantity}</h6>
                        
                        </div>
                        <div className="card-action">
                        <a href={`${permalink}`} className='black-text'>More...</a>
                        </div>
                    </div>
                </div>

                

            
        </div>
    );
}
 
export default Product;