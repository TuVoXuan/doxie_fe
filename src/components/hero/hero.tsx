import './Hero.css';

import BAZAAR from '../../assets/images/logo-BAZAAR.svg';
import BUSTLE from '../../assets/images/logo-BUSTLE.svg';
import { FaShoppingCart } from 'react-icons/fa';
import InStyle from '../../assets/images/logo-InStyle.svg';
import VERSACE from '../../assets/images/logo-VERSACE.svg';
import heroImg from '../../assets/images/hero-img.png';

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero__content">
                <span>Sale 70%</span>
                <h1>An Industrial Take on Streetwear</h1>
                <p>
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine
                    outfits.
                </p>
                <button className="hero__button">
                    {' '}
                    <FaShoppingCart className="hero__button__icon" size={12.8} /> Start Shopping
                </button>
                <div className="hero__logo">
                    <img src={BAZAAR} alt="BAZAAR" />
                    <img src={BUSTLE} alt="BUSTLE" />
                    <img src={VERSACE} alt="VERSACE" />
                    <img src={InStyle} alt="InStyle" />
                </div>
            </div>
            <div className="hero__imgContainer">
                <img className="hero__img" src={heroImg} alt="" />
            </div>
        </div>
    );
}
