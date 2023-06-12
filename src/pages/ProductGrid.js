import React, { Profiler } from 'react';
import {Link} from 'react-router';
import './ProductGrid.css'

const ProductGrid = ({ products }) => {
    return (
        <div className="product-grid" >
            {products.length===0 &&<p>No arts yet</p>}
            {products.map((product, index) => (

            //    <Link to="/" key={index}>
                 <div key={index} className="product-card" onClick={
                    () => {
                        console.log(product.name);
                    }
                }>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button>Add to Cart</button>
                </div>
             //   </Link>
            ))}
        </div>
    );
};

export default ProductGrid;