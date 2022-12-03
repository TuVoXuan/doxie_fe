import { useAppDispatch, useAppSelector } from 'app/hooks';
import InputForm from 'components/input-form/input-form';
import SelectForm from 'components/select-form/select-form';
import Title from 'components/title/Title';
import Layout from 'layout/layout';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { removeAll, selectCart } from 'redux/reducers/cart-slice';
import { getDistricts, getProvinces, getWards } from 'utils/province-api';
import styles from './checkout.module.css';
import { v4 as uuidv4 } from 'uuid';
import { selectUser } from 'redux/reducers/user-slice';
import { orderDetails } from 'fake-data/order-detail';
import { orders } from 'fake-data/order';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<IFormCheckOut>();

    const dispatch = useAppDispatch();
    const sCart = useAppSelector(selectCart);
    const user = useAppSelector(selectUser);
    const navigate = useNavigate();

    const totalQuantity = sCart.reduce((preValue, currValue) => {
        return preValue + currValue.quantity;
    }, 0);

    const subTotal = sCart.reduce((preValue, currValue) => {
        return preValue + currValue.quantity * currValue.price;
    }, 0);
    const total = subTotal + 21;
    const [provinces, setProvinces] = useState<IOption[]>([]);
    const [districts, setDistricts] = useState<IOption[]>([]);
    const [wards, setWards] = useState<IOption[]>([]);

    const watchProvince = watch('province');
    const watchDistrict = watch('district');

    const submitForm = (value: IFormCheckOut) => {
        console.log(value);
        // add product in cart to order detail fake data
        const orderDetail: string[] = [];
        for (let index = 0; index < sCart.length; index++) {
            const item: IOrderDetail = {
                id: uuidv4(),
                price: sCart[index].price,
                productId: sCart[index].productId,
                quantity: sCart[index].quantity,
                size: sCart[index].size,
            };
            orderDetails.push(item);
            orderDetail.push(item.id);
        }

        // create new order
        const newOrder: IOrder = {
            id: uuidv4(),
            date: new Date(),
            district: value.district,
            province: value.province,
            ward: value.ward,
            phone: value.phone,
            streetAddress: value.streetAddress,
            total: total,
            shippingFee: 5,
            statetus: 'pending',
            userId: user.data.id,
            orderDetailId: orderDetail,
        };

        // add new order
        orders.push(newOrder);
        // remove cart
        dispatch(removeAll());
        // go to detail order page
        navigate('/');
    };
    const goBack = () => {
        navigate('/cart');
    };
    useEffect(() => {
        getProvinces(setProvinces);
    }, []);

    useEffect(() => {
        const provinceId = provinces.find((item) => item.value === watchProvince)?.id || '5';
        getDistricts(provinceId, setDistricts);
    }, [watchProvince]);

    useEffect(() => {
        const districtId = districts.find((item) => item.value === watchDistrict)?.id || '5';
        getWards(districtId, setWards);
    }, [watchDistrict]);

    return (
        <Layout background="gray">
            <section style={{ paddingBottom: '40px' }}>
                <div className={styles.formCheckout}>
                    <Title mainTitle="Checkout Process" subTitle="Checkout" titleBold />
                    <div className={styles.content}>
                        <div className={styles.personalInformation}>
                            <form
                                id="checkOutForm"
                                onSubmit={handleSubmit(submitForm)}
                                className={styles.formInformation}
                            >
                                <div className={styles.form2Cols}>
                                    <InputForm
                                        name="name"
                                        register={register}
                                        title="Full name"
                                        type="text"
                                        option={{
                                            required: {
                                                value: true,
                                                message: 'Please enter your full name',
                                            },
                                        }}
                                        error={errors.name?.message}
                                    />
                                    <InputForm
                                        name="phone"
                                        register={register}
                                        title="Phone"
                                        type="text"
                                        error={errors.phone?.message}
                                        option={{
                                            required: {
                                                value: true,
                                                message: 'Please enter your phone number',
                                            },
                                            pattern: {
                                                value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                                                message:
                                                    'Phone not correct Vietnamese phone format',
                                            },
                                        }}
                                    />
                                </div>

                                <InputForm
                                    className={styles.formstreetAddress}
                                    name="streetAddress"
                                    register={register}
                                    title="Street address"
                                    type="text"
                                    error={errors.streetAddress?.message}
                                    option={{
                                        required: {
                                            value: true,
                                            message: 'Please enter your street address',
                                        },
                                    }}
                                />

                                <div className={styles.form2Cols}>
                                    <SelectForm
                                        register={register}
                                        error={errors.province?.message}
                                        name={'province'}
                                        option={{
                                            required: {
                                                value: true,
                                                message: 'Select your province.',
                                            },
                                        }}
                                        placeholder="Select your province"
                                        title="Province"
                                        options={provinces}
                                    />

                                    <SelectForm
                                        register={register}
                                        error={errors.district?.message}
                                        name={'district'}
                                        option={{
                                            required: {
                                                value: true,
                                                message: 'Select your district.',
                                            },
                                        }}
                                        placeholder="Select your district"
                                        title="District"
                                        options={districts}
                                    />
                                    <SelectForm
                                        register={register}
                                        error={errors.ward?.message}
                                        name={'ward'}
                                        option={{
                                            required: { value: true, message: 'Select your ward.' },
                                        }}
                                        placeholder="Select your ward"
                                        title="Ward"
                                        options={wards}
                                    />
                                </div>
                            </form>

                            <div className={styles.bottomForm}>
                                <button onClick={goBack} className={styles.buttonBack}>
                                    <span className={styles.inButtonBack}>Back</span>
                                </button>
                                <button
                                    form="checkOutForm"
                                    type="submit"
                                    className={styles.buttonNext}
                                >
                                    <span className={styles.inButtonNext}>Submit</span>
                                </button>
                            </div>
                        </div>

                        <aside className={styles.bill}>
                            <div className={styles.billContent}>
                                <h2 className={styles.titleBill}>Order Summary</h2>
                                <div className={styles.billSummary}>
                                    <p className={styles.billSummaryLine}>
                                        Quanlity
                                        <span className={styles.billSummaryLeft}>
                                            {totalQuantity} Products
                                        </span>
                                    </p>
                                    <p className={styles.billSummaryLine}>
                                        Sub Total
                                        <span className={styles.billSummaryLeft}>
                                            ${subTotal.toLocaleString()}
                                        </span>
                                    </p>
                                    <p className={styles.billSummaryLine}>
                                        Tax<span className={styles.billSummaryLeft}>$5</span>
                                    </p>
                                    <p className={styles.billSummaryLine}>
                                        Duty Fee<span className={styles.billSummaryLeft}>$3</span>
                                    </p>
                                    <p className={styles.billSummaryLine}>
                                        Shipping Fee
                                        <span className={styles.billSummaryLeft}>$13</span>
                                    </p>
                                </div>
                                <p className={styles.billSummaryLineTotal}>
                                    Total
                                    <span className={styles.billSummaryLeftTotal}>${total}</span>
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
