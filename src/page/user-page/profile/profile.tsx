import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import Button from '../../../components/button/button';
import LoadingButton from '../../../components/button/loading-btn';
import InputForm from '../../../components/input-form/input-form';
import SelectForm from '../../../components/select-form/select-form';
import Title from '../../../components/title/Title';
import { users } from '../../../fake-data/user';
import { updateProfile } from '../../../redux/actions/user-actions';
import { selectUser } from '../../../redux/reducers/user-slice';
import { getDistricts, getProvinces, getWards } from '../../../utils/province-api';
import { toastError, toastSuccess } from '../../../utils/toast';
import styles from './Profile.module.css';

export default function Profile() {
    const dispatch = useAppDispatch();
    const sUser = useAppSelector(selectUser);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IUpdateProfile>({
        defaultValues: {
            name: sUser.data.name,
            phone: sUser.data.phone,
            email: sUser.data.email,
            province: sUser.data.province,
            district: sUser.data.district,
            ward: sUser.data.ward,
            streetAddress: sUser.data.streetAddress,
        },
    });

    const [provinces, setProvinces] = useState<IOption[]>([]);
    const [districts, setDistricts] = useState<IOption[]>([]);
    const [wards, setWards] = useState<IOption[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const watchProvince = watch('province');
    const watchDistrict = watch('district');

    const onSubmit = async (value: IUpdateProfile) => {
        try {
            setLoading(true);
            await dispatch(updateProfile({ userId: sUser.data.id, ...value })).unwrap();
            setTimeout(() => {
                toastSuccess('Update profile successfully');
                setLoading(false);
            }, 2000);
        } catch (error: any) {
            toastError(error.message);
        }
    };

    useEffect(() => {
        getProvinces(setProvinces);
    }, []);

    useEffect(() => {
        const provinceId = provinces.find((item) => item.value === watchProvince)?.id || '5';
        getDistricts(provinceId, setDistricts);
    }, [watchProvince, provinces]);

    useEffect(() => {
        const districtId = districts.find((item) => item.value === watchDistrict)?.id || '5';
        getWards(districtId, setWards);
    }, [watchProvince, watchDistrict, districts]);

    return (
        <aside className={styles.container}>
            <Title mainTitle="profile" subTitle="profile" titleBold />
            <hr className={styles.line} />
            <div className={styles.formContainer}>
                <form
                    id="UpdateProfileForm"
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.form}
                >
                    <aside className={styles.form__info}>
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
                    <aside>
                        <SelectForm
                            className={styles.form__input}
                            register={register}
                            error={errors.province?.message}
                            name={'province'}
                            option={{
                                required: { value: true, message: 'Select your province.' },
                            }}
                            //defaulValue="hehe"
                            defaulValue={sUser.data.province}
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
                            defaulValue={sUser.data.district}
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
                            defaulValue={sUser.data.ward}
                            placeholder="Select your ward"
                            title="Ward"
                            options={wards}
                        />
                    </aside>
                </form>
                {loading ? (
                    <LoadingButton />
                ) : (
                    <Button submit form="UpdateProfileForm" title="Save" type="primay" />
                )}
            </div>
        </aside>
    );
}
