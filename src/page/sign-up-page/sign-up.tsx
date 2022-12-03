import React, { useEffect, useState } from 'react';
import styles from '../sign-in-page/SignIn.module.css';
import stylesSignUp from './sign-up.module.css';
import logo from '../../assets/images/logo.svg';
import InputForm from '../../components/input-form/input-form';
import { TbArrowBigRightLines } from 'react-icons/tb';
import { useForm } from 'react-hook-form';
import SelectForm from '../../components/select-form/select-form';
import { getDistricts, getProvinces, getWards } from '../../utils/province-api';
import { signUp } from '../../redux/actions/user-actions';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { toastError } from '../../utils/toast';
import { selectUser } from '../../redux/reducers/user-slice';

export default function SignUpPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<ISignUP>();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');

    const [provinces, setProvinces] = useState<IOption[]>([]);
    const [districts, setDistricts] = useState<IOption[]>([]);
    const [wards, setWards] = useState<IOption[]>([]);

    const watchProvince = watch('province');
    const watchDistrict = watch('district');

    console.log('watch province: ', watchProvince);
    console.log('watch district: ', watchDistrict);

    const onSubmit = async (value: any) => {
        console.log('value: ', value);

        try {
            await dispatch(signUp(value)).unwrap();
            navigate('/');
        } catch (error: any) {
            toastError(error.message);
        }
    };

    useEffect(() => {
        if (userId) {
            navigate('/');
        }
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
        <section className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.container__leftContainer}>
                    <div className={styles.signInContainer}>
                        <div className={styles.signInContainer__imageConainer}>
                            <img src={logo} alt="logo" />
                        </div>
                        <h1 className={styles.signInContainer__title}>Sign up</h1>
                        <form
                            id="signInForm"
                            onSubmit={handleSubmit(onSubmit)}
                            className={`${styles.form} ${stylesSignUp.form__signup}`}
                        >
                            <aside className={stylesSignUp.form__aside}>
                                <InputForm
                                    name="name"
                                    register={register}
                                    option={{
                                        required: { value: true, message: 'Fill in your name.' },
                                    }}
                                    error={errors.name?.message}
                                    className={styles.form__input}
                                    title="name"
                                    type="text"
                                />
                                <InputForm
                                    name="phone"
                                    register={register}
                                    option={{
                                        required: { value: true, message: 'Fill in your phone.' },
                                    }}
                                    className={styles.form__input}
                                    error={errors.phone?.message}
                                    title="phone"
                                    type="text"
                                />
                                <InputForm
                                    name="email"
                                    register={register}
                                    option={{
                                        required: { value: true, message: 'Fill in your email.' },
                                    }}
                                    className={styles.form__input}
                                    error={errors.email?.message}
                                    title="email"
                                    type="email"
                                />
                                <InputForm
                                    name="password"
                                    register={register}
                                    option={{
                                        required: {
                                            value: true,
                                            message: 'Fill in your password.',
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: 'Length not excedd 20 character',
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                            message:
                                                'Contain at least on uppercase,  number and special charater',
                                        },
                                    }}
                                    className={styles.form__input}
                                    error={errors.password?.message}
                                    title="Password"
                                    type="password"
                                />
                            </aside>
                            <aside className={stylesSignUp.form__aside}>
                                <SelectForm
                                    className={styles.form__input}
                                    register={register}
                                    error={errors.province?.message}
                                    name={'province'}
                                    option={{
                                        required: { value: true, message: 'Select your province.' },
                                    }}
                                    //defaulValue="hehe"
                                    placeholder="Select your province"
                                    title="Province"
                                    options={provinces}
                                />
                                <SelectForm
                                    className={styles.form__input}
                                    register={register}
                                    error={errors.district?.message}
                                    name={'district'}
                                    option={{
                                        required: { value: true, message: 'Select your district.' },
                                    }}
                                    //defaulValue="hehe"
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
                                    //defaulValue="hehe"
                                    placeholder="Select your ward"
                                    title="Ward"
                                    options={wards}
                                />
                                <InputForm
                                    name="streetAddress"
                                    register={register}
                                    option={{
                                        required: {
                                            value: true,
                                            message: 'Fill in your street address.',
                                        },
                                    }}
                                    className={styles.form__input}
                                    error={errors.streetAddress?.message}
                                    title="street address"
                                    type="text"
                                />
                            </aside>
                        </form>
                        <div className={`${styles.btnContainer} ${stylesSignUp.button_signup}`}>
                            <button
                                form="signInForm"
                                type="submit"
                                className={styles.btnContainer__btn}
                            >
                                Sign Up <TbArrowBigRightLines size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
