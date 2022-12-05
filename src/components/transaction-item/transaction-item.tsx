import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../fake-data/category';
import { orders } from '../../fake-data/order';
import { orderDetails } from '../../fake-data/order-detail';
import { products } from '../../fake-data/product';
import style from './transaction-item.module.css';

interface Props {
    orderId: string;
}

export default function TransactionItem({ orderId }: Props) {
    const navigate = useNavigate();

    const order = orders.find((item) => item.id === orderId);
    const details = orderDetails.filter((item) => {
        if (order?.orderDetailId.findIndex((e) => e === item.id) !== -1) {
            return item;
        }
    });
    const nums = details.reduce((total: number, item: IOrderDetail) => total + item.quantity, 0);
    const product = products.find((item) => item.id === details[0]?.productId);
    const category = categories.find((item) => item.id === product?.category);

    const handleClick = () => {
        navigate(`/order-detail/${orderId}`);
    };

    return (
        <div className={style.container}>
            <div className={style.container__head}>
                <p className={style['container__head--id']}>{orderId}</p>
                <p>{order?.date.toDateString()}</p>
            </div>
            <div className={style.container__body}>
                <img
                    className={style.container__image}
                    width="100%"
                    src={product?.imageDefault}
                    alt={product?.name}
                />
                <div className={style['body__order--info']}>
                    <div className={style['body__product--info']}>
                        <div>
                            <p className={style.product__name}>{product?.name}</p>
                            <p className={style.product__category}>{category?.name}</p>
                        </div>
                        {nums > 1 && (
                            <p className={style['body__product--more']}>{`And ${
                                nums - 1
                            } items more`}</p>
                        )}
                    </div>
                    <div className={style['body__order--cash']}>
                        <p className={style['body__order--total']}>
                            {order?.total.toLocaleString()}
                        </p>
                        <p className={style['body__order--details']} onClick={handleClick}>
                            See details
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
