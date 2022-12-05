import React, { useEffect, useState } from 'react';
import { BsSearch, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaShoppingCart } from 'react-icons/fa';
import './main-layout.css';
import logo from '../assets/images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectUser, signOut } from '../redux/reducers/user-slice';
import NavLink from '../components/navigator/nav-link';
import Button from '../components/button/button';
import { FiLogOut } from 'react-icons/fi';
import { products } from '../fake-data/product';

interface Props {
    children: React.ReactNode;
    background: 'gray' | 'white';
}

export default function Layout({ children, background }: Props) {
    const dispatch = useAppDispatch();
    const sUser = useAppSelector(selectUser);
    const navigate = useNavigate();
    const [key, setKey] = useState<string>('');
    const [searchItems, setSearchItems] = useState<IProduct[]>([]);
    const [hidden, setHidden] = useState(true);
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

    const handleSeeProductDetail = (id: string) => () => {
        navigate(`/product-details/${id}`);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (key) {
                const outcome = products.filter((item) =>
                    item.name.toLowerCase().includes(key.toLowerCase())
                );
                setSearchItems(outcome.slice(0, 10));
                setHidden(false);
            } else {
                setSearchItems([]);
                setHidden(true);
            }
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [key]);

    const handleCartClick = () => {
        navigate('/cart');
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
                    <section className="header-left__search">
                        <div className="autocomplete">
                            <div className="header-left__search-box">
                                <BsSearch size={16} />
                                <input
                                    onBlur={() => {
                                        setTimeout(() => {
                                            setHidden(true), setSearchItems([]), setKey('');
                                        }, 500);
                                    }}
                                    value={key}
                                    onChange={(value) => setKey(value.target.value)}
                                    className="search-box__input"
                                    type="text"
                                    placeholder="What are you looking for?"
                                />
                            </div>
                            {searchItems.length > 0 &&
                                searchItems.map((item) => (
                                    <p
                                        onClick={handleSeeProductDetail(item.id)}
                                        key={item.id}
                                        className="header-left__search-item"
                                    >
                                        {item.name}
                                    </p>
                                ))}
                            {key && searchItems.length === 0 && (
                                <p className="header-left__search--not-found">No products found.</p>
                            )}
                        </div>
                    </section>
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
                        {sUser.isLogin ? (
                            <>
                                <button
                                    onClick={handleCartClick}
                                    className="header-right__cart-button"
                                >
                                    <FaShoppingCart className="cart-button__icon" size={16} />
                                </button>
                                <button onClick={handleSignOut} className="header-right__button">
                                    <FiLogOut size={16} />
                                </button>
                            </>
                        ) : null}
                    </div>
                </section>
            </header>

            <main className={`px-10 mb-25 overflow-x-hidden ${handleBackground()}`}>
                {children}
            </main>

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
