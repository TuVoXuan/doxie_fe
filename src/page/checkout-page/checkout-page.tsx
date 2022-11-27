import InputForm from 'components/input-form/input-form';
import SelectForm from 'components/select-form/select-form';
import Title from 'components/title/Title';
import Layout from 'layout/layout';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getDistricts, getProvinces, getWards } from 'utils/province-api';
import styles from './checkout.module.css';

export default function CheckoutPage() {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<IFormCheckOut>();

    const [provinces, setProvinces] = useState<IOption[]>([]);
    const [districts, setDistricts] = useState<IOption[]>([]);
    const [wards, setWards] = useState<IOption[]>([]);

    const watchProvince = watch('province');
    const watchDistrict = watch('district');

    const submitForm = (value: IFormCheckOut) => {
        console.log(value);
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
                                <InputForm
                                    className={styles.formName}
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
                                    className={styles.formPhone}
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
                                            message: 'Phone not correct Vietnamese phone format',
                                        },
                                    }}
                                />
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

                                <SelectForm
                                    className={`${styles.form__input}, ${styles.formProvince}`}
                                    register={register}
                                    error={errors.province?.message}
                                    name={'province'}
                                    option={{
                                        required: { value: true, message: 'Select your province.' },
                                    }}
                                    placeholder="Select your province"
                                    title="Province"
                                    options={provinces}
                                />

                                <SelectForm
                                    className={`${styles.form__input}, ${styles.formDistrict}`}
                                    register={register}
                                    error={errors.district?.message}
                                    name={'district'}
                                    option={{
                                        required: { value: true, message: 'Select your district.' },
                                    }}
                                    placeholder="Select your district"
                                    title="District"
                                    options={districts}
                                />
                                <SelectForm
                                    className={styles.form__input}
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
                            </form>

                            <div className={styles.bottomForm}>
                                <button className={styles.buttonBack}>
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
                                        <span className={styles.billSummaryLeft}>5Product</span>
                                    </p>
                                    <p className={styles.billSummaryLine}>
                                        Sub Total
                                        <span className={styles.billSummaryLeft}>$140</span>
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
                                    Total<span className={styles.billSummaryLeftTotal}>$161</span>
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
