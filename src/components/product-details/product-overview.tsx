import React, { useEffect, useState } from 'react';
import './product-overview.css';
import { FaShoppingCart } from 'react-icons/fa';
import Title from '../title/Title';
import { selectUser } from 'redux/reducers/user-slice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { add } from 'redux/reducers/cart-slice';
import { v4 as uuidv4 } from 'uuid';
import { toastError, toastSuccess } from 'utils/toast';

interface Props {
    product: IProduct;
    category: ICategory;
}

export default function ProductOverview({ product, category }: Props) {
    const navigate = useNavigate();
    const isLogin = useAppSelector(selectUser).isLogin;
    const dispatch = useAppDispatch();

    const [imagePresent, setImagePresent] = useState<string>(product.imageDefault);
    const [size, setSize] = useState<string>('');

    const handleClick = (value: string) => () => {
        setImagePresent(value);
    };

    const handleChooseSize = (value: string) => () => {
        setSize(value);
    };

    const handleAddToCart = () => {
        if (!size) {
            toastError('Please Choose Size!');
            return;
        }

        if (!isLogin) {
            navigate('/sign-in');
        } else {
            dispatch(
                add({
                    id: uuidv4(),
                    category: category.name,
                    defaultImg: product.imageDefault,
                    name: product.name,
                    price: product.price,
                    productId: product.id,
                    quantity: 1,
                    size,
                })
            );
            toastSuccess('Add product to cart success!');
        }
    };

    useEffect(() => {
        setImagePresent(product.imageDefault);
    }, [product]);

    return (
        <div className="product__overview">
            <div className="overview__left">
                <div className="product__thumbnail">
                    {product.images.map((image) => (
                        <img onClick={handleClick(image)} key={image} src={image} alt="" />
                    ))}
                </div>
            </div>
            <div className="container__right">
                <div className="image__default">
                    <img src={imagePresent} alt="" className="product__main-img" />
                </div>
                <div className="overview__right">
                    <div className="product__name">
                        <Title
                            mainTitle={product.name}
                            subTitle={category.name}
                            large
                            subBoldColor
                        />
                    </div>

                    <form action="">
                        <p>Select Size</p>
                        <div className="size-select">
                            {product.size.map((item) => (
                                <label key={item} htmlFor={item}>
                                    <input
                                        onClick={handleChooseSize(item)}
                                        type="radio"
                                        name="size"
                                        id={item}
                                    />
                                    <span>{item}</span>
                                </label>
                            ))}
                        </div>
                    </form>
                    <div className="product__buy">
                        <button onClick={handleAddToCart} className="add-to-card-btn">
                            <FaShoppingCart className="add-to-card-icon" size={20} /> Add to Cart
                        </button>
                        <h2 className="product__price">
                            {product.price.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            })}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
