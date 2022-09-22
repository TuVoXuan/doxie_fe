import React from 'react';
import styles from './product-card.module.css';

interface Props {
    product: IProductCard;
}

export default function ProductCard({ product }: Props) {
    return (
        <section className={styles.product__card}>
            <div className={styles.image__container}>
                <img className={styles.image} width="100%" alt="image" src={product.image} />
            </div>
            <p className={`${styles.product__name} ${styles['font--bold']}`}>{product.name}</p>
            <p className={`${styles.product__category} ${styles['font--bold']}`}>
                {product.category}
            </p>
            <p className={`${styles.product__price} ${styles['font--bold']}`}>
                {product.price.toLocaleString()}
            </p>
        </section>
    );
}
