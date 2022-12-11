import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import Title from '../../../components/title/Title';
import TransactionItem from '../../../components/transaction-item/transaction-item';
import { orders } from '../../../fake-data/order';
import { selectUser } from '../../../redux/reducers/user-slice';
import style from './transaction.module.css';

interface Props {
    type: 'pending' | 'delivering' | 'completed';
}

export default function Transaction({ type }: Props) {
    let orderIds: string[] = [];
    const user = useAppSelector(selectUser).data;

    switch (type) {
        case 'pending':
            orderIds = orders
                .filter((item) => item.statetus === 'pending' && user.id === item.userId)
                .map((item) => item.id);
            break;
        case 'delivering':
            orderIds = orders
                .filter((item) => item.statetus === 'delivering' && user.id === item.userId)
                .map((item) => item.id);
            break;
        case 'completed':
            orderIds = orders
                .filter((item) => item.statetus === 'completed' && user.id === item.userId)
                .map((item) => item.id);
            break;
        default:
            break;
    }

    return (
        <aside className={style.container}>
            <Title mainTitle={type} subTitle="Transaction" titleBold />
            <hr className={style.line} />
            <section className={style.container__transactions}>
                {orderIds.map((id) => <TransactionItem orderId={id} key={id} />).reverse()}
            </section>
        </aside>
    );
}
