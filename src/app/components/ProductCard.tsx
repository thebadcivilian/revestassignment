
import React from 'react';
import './ProductCard.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';



const ProductCard = ({ product }: any) => {
    // console.log(product);
    return (
        <div className="product-card">
            <div className="image-container">
                <Image src={product.imageUrl} alt={product.productName} className="product-image" />
                <div className="label-container">
                    {product.specialOfferPercentage && (
                        <div className="special-offer">{product.specialOfferPercentage}% Off</div>
                    )}
                    {product.exclusive && (
                        <div className="exclusive-offer">Exclusive</div>
                    )}
                </div>
                <Image src={product.boxImageUrl} alt="paint box" className="box-image" />
            </div>
            <div className="product-info">
                <div className="productName">
                    <h2 className="product-name">{product.productName}</h2>
                    <div className="fav-icon">
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                </div>
                <p className="product-description">{product.description}</p>
                <div className="product-btm">
                    <div>
                        <p className="product-price">{product.price} SAR <span className="product-tax">(Incl. VAT)</span></p>
                        <p className="product-size">Size: {product.size}</p>
                    </div>
                    <div className="product-view">
                        <p>Visualizer</p>
                        <p>View Product</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
