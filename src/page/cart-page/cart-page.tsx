import Layout from 'layout/layout';
import Title from 'components/title/Title';
import styles from './CartPage.module.css';
import Container from 'components/Container/Container';
import { useState, useEffect } from 'react';
import CartItem from 'components/cart-item/cart-item';
import { useAppSelector } from 'app/hooks';
import { selectCart } from 'redux/reducers/cart-slice';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
    const sCart = useAppSelector(selectCart);
    const navigate = useNavigate();
    const [totalQuantity, setTotalQuantity] = useState<number>(0);
    const [subTotal, setSubTotal] = useState<number>(0);

    const handleSumQuantity = () => {
        const total = sCart.reduce(
            (sumCartItems, currCartItem) => sumCartItems + currCartItem.quantity,
            0
        );
        setTotalQuantity(total);
    };

    const handleSubTotal = () => {
        const tempSubTotal = sCart.reduce(
            (sum, currCartItem) => sum + currCartItem.quantity * currCartItem.price,
            0
        );
        setSubTotal(tempSubTotal);
    };

    const handleGoToCheckOut = () => {
        navigate('/checkout');
    };

    useEffect(() => {
        handleSumQuantity();
        handleSubTotal();
    }, [sCart]);

    return (
        <Layout background="gray">
            <section className={styles.container}>
                <Container>
                    <Title mainTitle="Shopping cart" subTitle="Cart List" titleBold={true} />
                    <hr className={styles.separator_line} />
                    <div className={styles.cart_container}>
                        <div className={styles.item_list}>
                            {sCart.length > 0 ? (
                                sCart.map((item) => (
                                    <div key={item.id}>
                                        <CartItem
                                            id={item.id}
                                            image={item.defaultImg}
                                            name={item.name}
                                            price={item.price}
                                            category={item.category}
                                            size={item.size}
                                            quantity={item.quantity}
                                            delivery_time={5}
                                        />
                                        <hr className={styles.separator_line} />
                                    </div>
                                ))
                            ) : (
                                <div>
                                    <div className={styles.empty_cart}>
                                        <img
                                            className={styles.empty_cart__image}
                                            src="assets/images/add_to_card.svg"
                                            alt="empty-cart"
                                        />
                                    </div>
                                    <p
                                        className={`${styles.empty_cart_title} ${styles['font--bold']} ${styles.margin_bot_20}`}
                                    >
                                        Your cart is empty
                                    </p>
                                    <p className={styles.empty_cart_text}>
                                        Looks like you have not added anything to your cart. Go
                                        ahead & take a look at our new product.
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className={styles.order_summary__container}>
                            <div className={styles.order_summary}>
                                <p className={styles['font--bold']}>Order Summary</p>
                                <hr className={styles.separator_line} />
                                <div className={styles.order}>
                                    <p>Quantity</p>
                                    <p className={styles['font--bold']}>
                                        {totalQuantity} Product
                                        {totalQuantity > 1 ? 's' : ''}
                                    </p>
                                </div>
                                <hr className={styles.separator_line} />
                                <div className={styles.order}>
                                    <div>
                                        <p className={styles.margin_bot_20}>Subtotal</p>
                                        <p className={styles.margin_bot_20}>Tax</p>
                                        <p className={styles.margin_bot_20}>Duty fee</p>
                                        <p>Shipping fee</p>
                                    </div>
                                    <div>
                                        <p
                                            className={`${styles.item_price} ${styles.margin_bot_20}`}
                                        >
                                            {subTotal.toLocaleString()}
                                        </p>
                                        <p
                                            className={`${styles.item_price} ${styles.margin_bot_20}`}
                                        >
                                            {sCart.length > 0 ? 5 : 0}
                                        </p>
                                        <p
                                            className={`${styles.item_price} ${styles.margin_bot_20}`}
                                        >
                                            {sCart.length > 0 ? 3 : 0}
                                        </p>
                                        <p className={styles.item_price}>
                                            {sCart.length > 0 ? 13 : 0}
                                        </p>
                                    </div>
                                </div>
                                <hr className={styles.separator_line} />
                                <div className={styles.order}>
                                    <div>
                                        <p className={styles['font--bold']}>Total</p>
                                    </div>
                                    <div>
                                        <p className={styles.item_price__total}>
                                            {sCart.length > 0
                                                ? (subTotal + 21).toLocaleString()
                                                : 0}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {totalQuantity < 1 ? (
                                <button className={styles.button_checkout__disabled}>
                                    Process to checkout
                                </button>
                            ) : (
                                <button
                                    onClick={handleGoToCheckOut}
                                    className={styles.button_checkout}
                                >
                                    Process to checkout
                                </button>
                            )}
                        </div>
                    </div>
                </Container>
            </section>
        </Layout>
    );
}
