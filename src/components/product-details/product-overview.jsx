import './product-overview.css';

import { BsLink45Deg } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { IoMdShareAlt } from 'react-icons/io';
import React from 'react'
import Title from '../title/Title';
import mainImg from '../../assets/images/product-detail-main-img.png';
import productThumbnail1 from '../../assets/images/product-thumbnail-1.png';
import productThumbnail2 from '../../assets/images/product-thumbnail-2.png';
import productThumbnail3 from '../../assets/images/product-thumbnail-3.png';

export default function ProductOverview() {
  return (
    <div className="product__overview">
      <div className="overview__left">
        <div className="product__thumbnail">
          <img src={productThumbnail1} alt="" />
          <img src={productThumbnail2} alt="" />
          <img src={productThumbnail3} alt="" />
        </div>
        <img src={mainImg} alt="" className='product__main-img'/>
      </div>
      <div className="overview__right">
        <div className='product__share'>
        <button className="product__link-btn">
                    <BsLink45Deg className="product__link-icon" size={20} />
        </button>
        <button className="product__share-btn">
                    <IoMdShareAlt className="product__share-icon" size={20} /> Share
        </button>
        </div>
        <div className="product__name">
          <Title mainTitle="Cameryn Sash Tie Dress" subTitle="Dress" titleBold={true} />
        </div>

        {/* <h2 className="product__name">Cameryn Sash Tie Dress</h2> */}
        <form action="">
        <p>Select Size</p> 
          <div className="size-select">
            <label htmlFor="x-small">
              <input type="radio" name="size" id="x-small"/>
              <span>XS</span>
            </label>
            <label htmlFor="small">
              <input type="radio" name="size" id="small"/>
              <span>S</span>
            </label>
            <label htmlFor="medium">
              <input type="radio" name="size" id="medium"/>
              <span>M</span>
            </label>
            <label htmlFor="large">
              <input type="radio" name="size" id="large"/>
              <span>L</span>
            </label>
            <label htmlFor="x-large">
              <input type="radio" name="size" id="x-large"/>
              <span>XL</span>
            </label>
          </div>
        </form>
        <div className="product__buy">
        <button className="add-to-card-btn">
                    <FaShoppingCart className="add-to-card-icon" size={12.8} /> Add to Cart
                </button>
                <h2 className="product__price">
                $545.00
                </h2>
        </div>
      </div>
    </div>

  )
}
