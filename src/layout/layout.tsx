import React from 'react';
import { BsSearch, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaShoppingCart } from 'react-icons/fa';
import './main-layout.css';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectUser, signOut } from '../redux/reducers/user-slice';
import NavLink from '../components/navigator/nav-link';
import Button from '../components/button/button';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

interface Props {
    children: React.ReactNode;
    background: 'gray' | 'white';
}

export default function Layout({ children, background }: Props) {
    const dispatch = useAppDispatch();
    const sUser = useAppSelector(selectUser);
    const navigate = useNavigate();

    const handleBackground = () => {
        if (background === 'gray') {
            return 'bg-gray-5';
        }
        return 'bg-white';
    };

    const handleGoSignIn = () => {
        navigate('/sign-in');
    };

    const handleGoProfile = () => {
        navigate('/user/profile');
    };

    const handleSignOut = () => {
        dispatch(signOut());
        navigate('/sign-in');
    };

    return (
        <>
            <header className={`header px-10 ${handleBackground()}`}>
                <section className="header__header-left">
                    <nav className="header-left__nav">
                        <Link to={'/'}>
                            <div className="nav__logo">
                                <img src={logo} alt="logo" />
                            </div>
                        </Link>

                        <ul className="nav__nav-list">
                            <li className="nav-list__li">
                                <NavLink title="Female" to="/clothes?parentCate=female" />
                            </li>
                            <li className="nav-list__li">
                                <NavLink title="Male" to="/clothes?parentCate=male" />
                            </li>
                            <li className="nav-list__li">
                                <NavLink title="Kids" to="/clothes?parentCate=kids" />
                            </li>
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
                        {sUser.isLogin ? (
                            <div onClick={handleGoProfile} className="header-right__user-info">
                                <div className="user-info__name-container">
                                    <p className="name-container__greeting">Hello</p>
                                    <p className="name-container__name">{sUser.data.name}</p>
                                </div>
                            </div>
                        ) : (
                            <Button title="Sign in" type="primay" onClick={handleGoSignIn} />
                        )}
                        <button className="header-right__button">
                            <FaShoppingCart className="cart-button__icon" size={16} />
                        </button>
                        {sUser.isLogin ? (
                            <button onClick={handleSignOut} className="header-right__button">
                                <FiLogOut size={16} />
                            </button>
                        ) : null}
                    </div>
                </section>
            </header>

            <main className={`px-10 mb-25 ${handleBackground()}`}>{children}</main>

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
