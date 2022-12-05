import Title from 'components/title/Title';
import React from 'react';
import style from './product-information.module.css';

interface Props {
    product: IProduct;
}

export default function ProductInformation({ product }: Props) {
    return (
        <div className={style.cover}>
            <div className={style.product__info}>
                <Title mainTitle="Product Infomation" subTitle="Overview" titleBold />
                <hr className={style.line} />
                <div className={style.product__note}>
                    <h4 className={style.note__title}>PRODUCT DETAILS</h4>
                    <div className={style.note__content}>
                        <p>{product.productDetail}</p>
                    </div>
                </div>
                <div className={style.space}></div>
                <div className={style.product__note}>
                    <h4 className={style.note__title}>PRODUCT CARE</h4>
                    <div className={style.note__content}>
                        <ul>
                            {product.productCare.map((item) => (
                                <li key={item}>
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
