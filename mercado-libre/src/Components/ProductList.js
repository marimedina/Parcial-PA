import React, { useEffect, useState } from 'react';
import Product from './Product';
import SearchBar from './SearchBar';

const ProductList = () => {

    const [categoria, guardarCategoria] = useState('');
    const [products, saveProducts] = useState([])
    

    useEffect( () => {
        const consultarApi = async () => {

          
            const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?category=${categoria}&limit=30`

            const resp = await fetch(apiUrl)
            const products = await resp.json()

            saveProducts(products.results)

        }
        consultarApi();
    }, [categoria])

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