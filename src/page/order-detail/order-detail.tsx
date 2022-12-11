import Container from 'components/Container/Container';
import Layout from 'layout/layout';
import React, { useEffect, useState } from 'react';
import style from './order-detail.module.css';
import logo from '../../assets/images/logo.svg';
import OrderDetailItem from 'components/order-detail-item/order-detail-item';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'utils/router';
import { orders } from '../../fake-data/order';
import { orderDetails } from 'fake-data/order-detail';
import { iteratorSymbol } from 'immer/dist/internal';

export default function OrderDetail() {
    const navigate = useNavigate();

    const { id } = useParams();

    const [details, setDetails] = useState<IOrderDetail[]>([]);
    const [subTotal, setSubTotal] = useState<number>(0);
    const [orderSoure, setOrderSoure] = useState<IOrder>();
    const totalQuantity = details.reduce((preValue, currentValue) => {
        return preValue + currentValue.quantity;
    }, 0);

    const handleGoToHomePage = () => {
        navigate('/');
    };

    useEffect(() => {
        const order = orders.find((item) => item.id === id);
        console.log('Order: ', order);
        if (order) {
            for (const item of order.orderDetailId) {
                const detail = orderDetails.find((e) => e.id === item);
                if (detail) {
                    setSubTotal((value) => value + detail.quantity * detail.price);
                    setDetails((value) => [...value, detail]);
                }
            }
            setOrderSoure(order);
        }
    }, []);

    return (
        <Layout background="gray">
            <div className={style.cover__page}>
                <Container>
                    <div className={style.order__detail}>
                        {/* logo page order */}
                        <div className={style.logo__container}>
                            <p className={style.logo__background}>Status</p>
                            <img className={style.logo} src={logo} alt="LOGO" />
                        </div>
                        {/* chua status cua page */}
                        <div className={style.status}>
                            <p className={style.font_bold}>{orderSoure?.id}</p>
                            <p className={style.font_bold}>{orderSoure?.statetus}</p>
                            <p className={style.font_bold}>{orderSoure?.date.toDateString()}</p>
                        </div>
                        {/* chua content cua page */}
                        <div className={style.td__content}>
                            {/* nua trai */}
                            <div className={`${style.td__children} ${style.item_list}`}>
                                {details.map((item) => (
                                    <OrderDetailItem
                                        key={item.id}
                                        productId={item.productId}
                                        quantity={item.quantity}
                                        size={item.size}
                                        price={item.price}
                                    />
                                ))}
                            </div>
                            {/* nua phai */}
                            {/* <div className={`${style.td__children} ${style['td__children-right']}`}>
                                <p className={`${style.order_title} ${style.font_bold}`}>Order Summary</p>
                                <hr className={style.line} />
                                <div className={style.item__info}>
                                    <p>Quantity</p>
                                    <h4>
                                        {details.reduce((preValue, currentValue) => {
                                            return preValue + currentValue.quantity;
                                        }, 0)}{' '}
                                        Product{' '}
                                    </h4>
                                </div>
                                <hr className={style.line} />
                                <div className={style.item__info}>
                                    <p>Sub Total</p>
                                    <h4>
                                        {subTotal.toLocaleString('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                        })}
                                    </h4>
                                </div>
                                <div className={style.item__info}>
                                    <p>Tax</p>
                                    <h4>$5</h4>
                                </div>
                                <div className={style.item__info}>
                                    <p>Shipping Fee</p>
                                    <h4>$3</h4>
                                </div>
                                <hr className={style.line} />
                                <div className={style.item__info}>
                                    <h4>Total</h4>
                                    <h4>
                                        {(subTotal + 8).toLocaleString('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                        })}
                                    </h4>
                                </div>
                            </div> */}

                            <div>
                                <div className={style.order_summary}>
                                    <p
                                        className={`${style.font_bold} ${style.border_bot} ${style.line_40}`}
                                    >
                                        Order Summary
                                    </p>

                                    <div className={`${style.order} ${style.border_bot}`}>
                                        <div>
                                            <p className={style.line_40}>Quantity</p>
                                            <p className={style.line_40}>Subtotal</p>
                                            <p className={style.line_40}>Tax</p>
                                            <p className={style.line_40}>Duty fee</p>
                                            <p className={style.line_40}>Shipping fee</p>
                                        </div>
                                        <div>
                                            <p className={`${style.font_bold} ${style.line_40}`}>
                                                {totalQuantity} Product
                                                {totalQuantity > 1 ? 's' : ''}
                                            </p>
                                            <p className={`${style.item_price} ${style.line_40}`}>
                                                {subTotal.toLocaleString()}
                                            </p>
                                            <p className={`${style.item_price} ${style.line_40}`}>
                                                5
                                            </p>
                                            <p className={`${style.item_price} ${style.line_40}`}>
                                                3
                                            </p>
                                            <p className={`${style.item_price} ${style.line_40}`}>
                                                13
                                            </p>
                                        </div>
                                    </div>

                                    <div className={`${style.order} ${style.line_40}`}>
                                        <div>
                                            <p className={style.font_bold}>Total</p>
                                        </div>
                                        <div>
                                            <p className={style.item_price__total}>
                                                {(subTotal + 21).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* chua footer page */}
                        <hr className={style.line__footer} />
                        <div className={style.td__footer}>
                            <button
                                className={style['transaction--list']}
                                onClick={() => navigate('/user/transaction?type=pending')}
                            >
                                Transaction List
                            </button>
                            <button
                                className={style['back--homepage']}
                                onClick={handleGoToHomePage}
                            >
                                Back to Home Page
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    );
}
