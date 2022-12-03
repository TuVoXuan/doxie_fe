import styles from './cart-item.module.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { useAppDispatch } from 'app/hooks';
import { remove, changeQuantity } from 'redux/reducers/cart-slice';

interface Props {
    id: string;
    image: string;
    name: string;
    price: number;
    category: string;
    size: string;
    quantity: number;
    delivery_time: number;
}

export default function CartItem({
    id,
    image,
    name,
    price,
    category,
    size,
    quantity,
    delivery_time,
}: Props) {
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(remove(id));
    };

    const handleIncrease = () => {
        dispatch(changeQuantity({ id, type: 'increase' }));
    };

    const handleDecrease = () => {
        dispatch(changeQuantity({ id, type: 'decrease' }));
    };

    return (
        <section className={styles.container}>
            <div className={styles.image__container}>
                <img className={styles.image} src={image} alt="img" />
            </div>
            <div className={styles.div__content}>
                <p className={`${styles.item_text} ${styles['font--title']}`}>{name}</p>

                <p className={`${styles.item_text} ${styles['font--gray']}`}>{category}</p>

                <div>
                    <div className={styles.size_container}>
                        <p className={`${styles.item_text} ${styles['font--bold']}`}>
                            Delivery Estimation
                        </p>
                        <p>
                            Size: <span className={styles['font--bold']}>{size}</span>
                        </p>
                    </div>
                    <p
                        className={`${styles.item_text} ${styles['font--gold']} ${styles['font--bold']}`}
                    >
                        {delivery_time} Working Days
                    </p>
                </div>

                <p className={styles.item_price}>{price.toLocaleString()}</p>
            </div>
            <div className={styles.div__button}>
                <div className={styles.delBtn__container}>
                    <button onClick={handleDelete} className={styles.delBtn}>
                        <FiTrash2 size={20} />
                    </button>
                </div>
                <div className={styles.quantityBtn_container}>
                    {quantity < 2 ? (
                        <button
                            onClick={handleDecrease}
                            className={`${styles.button_quantity} ${styles.button_quantity__disabled}`}
                        >
                            <AiOutlineMinus size={16} />
                        </button>
                    ) : (
                        <button onClick={handleDecrease} className={styles.button_quantity}>
                            <AiOutlineMinus size={16} />
                        </button>
                    )}

                    <p className={`${styles.item__quantity} ${styles['font--bold']}`}>{quantity}</p>
                    <button onClick={handleIncrease} className={styles.button_quantity}>
                        <AiOutlinePlus size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
}
