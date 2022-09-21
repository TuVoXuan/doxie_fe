import React from 'react';
import styles from './product-card.module.css';

interface Props {
    id: string;
    image: string;
    price: number;
    name: string;
    category: string;
}

export default function ProductCard({ image, price, category, name }: Props) {
    return (
        <section className={styles.product__card}>
            <div className={styles.image__container}>
                <img className={styles.image} width="100%" alt="image" src={image} />
            </div>
            <p className={`${styles.product__name} ${styles['font--bold']}`}>{name}</p>
            <p className={`${styles.product__category} ${styles['font--bold']}`}>{category}</p>
            <p className={`${styles.product__price} ${styles['font--bold']}`}>
                {price.toLocaleString()}
            </p>
        </section>
    );
}
