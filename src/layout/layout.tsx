import React from 'react';
import { BsSearch, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaShoppingCart } from 'react-icons/fa';
import './main-layout.css';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <>
            <header className="header px-10">
                <section className="header__header-left">
                    <nav className="header-left__nav">
                        <div className="nav__logo">
                            <img src={logo} alt="logo" />
                        </div>

                        <ul className="nav__nav-list">
                            <Link className="nav-list__li" to="/clothes?parentCate=female">
                                Female
                            </Link>
                            <Link className="nav-list__li" to="/clothes?parentCate=male">
                                Male
                            </Link>
                            <Link className="nav-list__li" to="/clothes?parentCate=kids">
                                Kids
                            </Link>
                            {/* <li className="nav-list__li">
                                <a href="/clothes?parentCate=female" className="text-black-80">
                                    Female
                                </a>
                            </li>
                            <li className="nav-list__li">
                                <a href="/clothes?parentCate=male" className="text-black-80">
                                    Male
                                </a>
                            </li>
                            <li className="nav-list__li">
                                <a href="/clothes?parentCate=kids" className="text-black-80">
                                    Kids
                                </a>
                            </li> */}
                        </ul>
                    </nav>
                    <div className="header-left__search-box">
                        <BsSearch size={16} />
                        <input
                            className="search-box__input"
                            type="text"
                            placeholder="What are you looking for?"
                        />
                    </div>
                </section>
                <section>
                    <div className="header__header-right">
                        <div className="header-right__user-info">
                            <div className="user-info__name-container">
                                <p className="name-container__greeting">Hello</p>
                                <p className="name-container__name">Evelyn Andreas</p>
                            </div>
                            <div className="user-info__avatar-container">
                                <img
                                    className="avatar-container__image"
                                    src={require('../assets/images/avatar.jpg')}
                                    alt="avatar"
                                />
                            </div>
                        </div>
                        <button className="header-right__cart-button">
                            <FaShoppingCart className="cart-button__icon" size={16} />
                        </button>
                    </div>
                </section>
            </header>

            <main className="px-10 mb-25">{children}</main>

            <footer className="footer px-10">
                <div className="footer__des">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <p className="des_intro">
                        Small, artisan label that offers a thoughtfully curated collection of high
                        quality everyday essentials made.
                    </p>

                    <div className="des__social">
                        <button className="social__buton">
                            <BsTwitter size={14} />
                        </button>
                        <button className="social__buton">
                            <FaFacebookF size={14} />
                        </button>
                        <button className="social__buton">
                            <FaLinkedinIn size={14} />
                        </button>
                    </div>
                </div>
                <div className="footer__company-info">
                    <h4 className="company-info__title">Company</h4>
                    <ul className="company-info__list">
                        <li className="company-info__list-item">
                            <a href="/" className="text-gray-80">
                                About
                            </a>
                        </li>
                        <li className="company-info__list-item">
                            <a href="/" className="text-gray-80">
                                Terms of Use
                            </a>
                        </li>
                        <li className="company-info__list-item">
                            <a href="/" className="text-gray-80">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="company-info__list-item">
                            <a href="/" className="text-gray-80">
                                How it Works
                            </a>
                        </li>
                        <li className="company-info__list-item">
                            <a href="/" className="text-gray-80">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__company-info">
                    <h4 className="company-info__title">Support</h4>
                    <ul className="company-info__list">
                        <li className="company-info__list-item">
                            <a href="/" className="text-gray-80">
                                Support Carrer
                            </a>
                        </li>
                        <li className="company-info__list-item">
                            <a href="/" className="text-gray-80">
                                24h Service
                            </a>
                        </li>
                        <li className="company-info__list-item">
                            <a href="/" className="text-gray-80">
                                Quick Chat
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__company-info">
                    <h4 className="company-info__title">Contact</h4>
                    <ul className="company-info__list">
                        <li className="company-info__list-item">
                            <a href="/" className="text-gray-80">
                                Whatsapp
                            </a>
                        </li>
                        <li className="company-info__list-item">
                            <a href="/" className="text-gray-80">
                                Support 24
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}
