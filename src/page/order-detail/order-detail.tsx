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
        // test github
        <Layout background="gray">
            <div className={style.cover__page}>
                <Container>
                    <div className={style.order__detail}>
                        {/* logo page order */}
                        <div className={style.logo__container}>
                            <p className={style.logo__background}>Status</p>
                            <p className={style.logo}>
                                <img src={logo} alt="LOGO" />
                            </p>
                        </div>
                        {/* chua status cua page */}
                        <div className={style.status}>
                            <p>{orderSoure?.id}</p>
                            <p>{orderSoure?.statetus}</p>
                            <p>{orderSoure?.date.toDateString()}</p>
                        </div>
                        {/* chua content cua page */}
                        <div className={style.td__content}>
                            {/* nua trai */}
                            <div className={style.td__children}>
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
                            <div className={`${style.td__children} ${style['td__children-right']}`}>
                                <h2>Order Summary</h2>
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
                            </div>
                        </div>
                        {/* chua footer page */}
                        <hr className={style.line__footer} />
                        <div className={style.td__footer}>
                            <button
                                className={style['transaction--list']}
                                onClick={() => navigate(-1)}
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
