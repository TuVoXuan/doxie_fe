import { categories } from 'fake-data/category';
import { products } from 'fake-data/product';
import React, { useEffect, useState } from 'react';
import style from './order-detail-item.module.css';

interface Props {
    productId: string;
    quantity: number;
    size: string;
    price: number;
}

export default function OrderDetailItem({ productId, quantity, size, price }: Props) {
    const [product, setProduct] = useState<IProduct>();
    const [category, setCategory] = useState<ICategory>();

    useEffect(() => {
        const data = products.find((item) => item.id === productId);
        if (data) {
            const cate = categories.find((c) => c.id === data.category);
            if (cate) {
                setCategory(cate);
            }
            setProduct(data);
        }
    }, []);

    return (
        <>
            {product && category ? (
                <>
                    <div className={style.item__product}>
                        <img
                            src={product.imageDefault}
                            className={style.img__product}
                            alt="image"
                        />
                        <div className={style.detail}>
                            <div>
                                <p>{product.name}</p>
                                <p className={style.color__item}>{category.name}</p>
                                <p>Size: {size}</p>
                                <p>Quantity: {quantity}</p>
                            </div>
                            <h4>
                                {price.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                })}
                            </h4>
                        </div>
                    </div>
                    <hr className={style.line} />
                </>
            ) : (
                <></>
            )}
        </>
    );
}
