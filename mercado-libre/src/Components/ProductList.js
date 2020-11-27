import React, { useEffect, useState } from 'react';
import Product from './Product';

const ProductList = () => {

    const [products, saveProducts] = useState([])
    

    useEffect( () => {
        const consultarApi = async () => {

            const query = 'iphone'
            const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=30`

            const resp = await fetch(apiUrl)
            const products = await resp.json()

            saveProducts(products.results)

        }
        consultarApi();
    }, [])

    return (
        
        <div className="row">
            {products && products.map(product => (
                <Product
                    key={product.id}
                    img={product.thumbnail}
                    product={product}
                />
                

            ))}
        </div>
    );
}
 
export default ProductList;