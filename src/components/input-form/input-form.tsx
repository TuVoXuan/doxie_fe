import React from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import styles from './InputForm.module.css';
import { TiWarningOutline } from 'react-icons/ti';

interface Props {
    className?: string;
    title: string;
    type: 'email' | 'password' | 'number' | 'text';
    register: UseFormRegister<any>;
    option?: RegisterOptions;
    error?: string;
    name: string;
}

export default function InputForm({
    className,
    title,
    type,
    register,
    option,
    error,
    name,
}: Props) {
    return (
        <>
            <div className={`${styles.container} ${className}`}>
                <h4 className={styles.title}>{title}</h4>
                <input {...register(name, { ...option })} className={styles.input} type={type} />
                {error && (
                    <p className={styles.error}>
                        <TiWarningOutline size={14} />
                        {error}
                    </p>
                )}
            </div>
        </>
    );
}
