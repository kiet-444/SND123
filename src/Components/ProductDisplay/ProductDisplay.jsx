// import React from 'react';
// import './ProductDisplay.css';
// import star_icon from "../Assets/star_icon.png";
// import star_dull_icon from "../Assets/star_dull_icon.png";

// const ProductDisplay = (props) => {
//     const { product } = props;

//     // Debugging tip: log product to check its structure
//     console.log(product);

//     return (
//         <div className='productdisplay'>
//             <div className="productdisplay-left">
//                 <div className="productdisplay-img-list">
//                     <img src={product.img} alt="product" />
//                     <img src={product.img} alt="product" />
//                     <img src={product.img} alt="product" />
//                     <img src={product.img} alt="product" />
//                 </div>
//                 <div className="productdisplay-img">
//                     <img className='productdisplay-main-img' src={product.img} alt="product" />
//                 </div>
//             </div>
//             <div className="productdisplay-right">
//                 <h1>{product.name}</h1>
//                 <div className="productdisplay-right-star">
//                     <img src={star_icon} alt="star icon" />
//                     <img src={star_icon} alt="star icon" />
//                     <img src={star_icon} alt="star icon" />
//                     <img src={star_icon} alt="star icon" />
//                     <img src={star_dull_icon} alt="dull star icon" />
//                     <p>(100)</p>
//                 </div>
//                 <div className="productdisplay-right-prices">
//                     <div className="productdisplay-right-price-old">${product.old_price}</div>
//                     <div className="productdisplay-right-price-new">${product.new_price}</div>
//                 </div>
//                 <div className="product-right-description">
//                     asbdabdabdbadbdad
//                 </div>
//                 <div className="prodctdisplay-right-size">
//                     <h1>Select size</h1>
//                     <div className="productdisplay-right-size">
//                         <div>S</div>
//                         <div>M</div>
//                         <div>L</div>
//                         <div>XL</div>
//                         <div>XXL</div>
//                     </div>
//                 </div>
//                 <button>ADD TO CART</button>
//                 <p className='productdisplay-right-category'> <span>Category:</span> Women, T-Shirt, Crop</p>
//                 <p className='productdisplay-right-category'> <span>Tags:</span> Modern</p>
//             </div>
//         </div>
//     );
// }

// export default ProductDisplay;
import React from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
    const { product } = props;

    console.log(product);

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.img} alt="product" />
                    <img src={product.img} alt="product" />
                    <img src={product.img} alt="product" />
                    <img src={product.img} alt="product" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.img} alt="product" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="star icon" />
                    <img src={star_icon} alt="star icon" />
                    <img src={star_icon} alt="star icon" />
                    <img src={star_icon} alt="star icon" />
                    <img src={star_dull_icon} alt="dull star icon" />
                    <p>(100)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="product-right-description">
                    asbdabdabdbadbdad
                </div>
                <div className="prodctdisplay-right-size">
                    <h1>Select size</h1>
                    <div className="productdisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className='productdisplay-right-category'> <span>Category:</span> Women, T-Shirt, Crop</p>
                <p className='productdisplay-right-category'> <span>Tags:</span> Modern</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
