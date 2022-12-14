import React, { useEffect } from 'react';
import styles from './SignIn.module.css';
import logo from '../../assets/images/logo.svg';
import InputForm from '../../components/input-form/input-form';
import { TbArrowBigRightLines } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { signIn } from '../../redux/actions/user-actions';
import { toastError } from '../../utils/toast';
import { selectUser } from '../../redux/reducers/user-slice';

interface ISignInForm {
    email: string;
    password: string;
}

export default function SignInPage() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const userId = localStorage.getItem('userId');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ISignInForm>();

    const onSubmit = async (value: any) => {
        try {
            await dispatch(signIn(value)).unwrap();
            navigate('/');
        } catch (error: any) {
            toastError(error.message);
        }
    };

    useEffect(() => {
        if (userId) {
            navigate('/');
        }
    }, []);

    return (
        <section className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.container__leftContainer}>
                    <div className={styles.signInContainer}>
                        <div className={styles.signInContainer__imageConainer}>
                            <img src={logo} alt="logo" />
                        </div>
                        <p className={styles.signInContainer__subTitle}>Wellcome back !!!</p>
                        <h1 className={styles.signInContainer__title}>Sign in</h1>
                        <form
                            id="signInForm"
                            onSubmit={handleSubmit(onSubmit)}
                            className={styles.form}
                        >
                            <InputForm
                                name="email"
                                register={register}
                                option={{
                                    required: { value: true, message: 'Fill in your email.' },
                                }}
                                error={errors.email?.message}
                                className={styles.form__input}
                                title="email"
                                type="email"
                            />
                            <InputForm
                                name="password"
                                register={register}
                                option={{
                                    required: { value: true, message: 'Fill in your password.' },
                                }}
                                className={styles.form__input}
                                error={errors.password?.message}
                                title="password"
                                type="password"
                            />
                        </form>
                        <div className={styles.btnContainer}>
                            <button
                                form="signInForm"
                                type="submit"
                                className={styles.btnContainer__btn}
                            >
                                Sign In <TbArrowBigRightLines size={24} />
                            </button>
                        </div>
                        <div className={styles.signInContainer__endLogin}>
                            <p>Dont have account?</p>
                            <Link className={styles.endLogin__Signup} to={'/sign-up'}>
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
