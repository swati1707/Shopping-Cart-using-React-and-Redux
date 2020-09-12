import React from 'react';
import util from '../util.js';

class Products extends React.Component{
    render() {
        const productItems=this.props.products;
        return (
            <div className="row products-list">
                {productItems.map(product => (
                    <div className="col-md-4" key={product.id}>
                        <div className="thumbnail text-center">
                            <a href={`#${product.id}`} onClick={(e) => this.props.handleAddToCart(e,product)}>
                                <img src={`products/${product.sku}_2.jpg`} alt={product.title}/>
                                <p>{product.title}</p>
                            </a>
                        </div>
                        <b>{util.formatCurrency(product.price)} </b>
                        <button 
                            className="btn btn-secondary"
                            onClick={(e) => this.props.handleAddToCart(e,product)}>
                            Add To Cart
                        </button>
                    </div>
                ))}
            </div>
        );
    }
}

export default Products;