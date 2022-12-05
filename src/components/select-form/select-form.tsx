import { useRef } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { TiWarningOutline } from 'react-icons/ti';
import styles from './select-form.module.css';

interface Props {
    title: string;
    options: IOption[];
    register: UseFormRegister<any>;
    option?: RegisterOptions;
    error?: string;
    name: string;
    defaulValue?: string;
    placeholder: string;
    className?: string;
}

export default function SelectForm({
    title,
    options,
    register,
    option,
    error,
    name,
    defaulValue,
    placeholder,
    className,
}: Props) {
    const detailsRef = useRef<HTMLDetailsElement>(null);

    const handleClick = () => {
        if (detailsRef.current) {
            detailsRef.current.removeAttribute('open');
        }
    };

    return (
        <div className={className}>
            <h4 className={styles.title}>{title}</h4>

            <details ref={detailsRef} className={`custom-select ${styles.details}`}>
                <summary className={`${styles.summary} ${styles.select}`}>
                    {!defaulValue && (
                        <input
                            className={`${styles.select__placeholder} ${styles.input}`}
                            type="radio"
                            name={name}
                            title={placeholder}
                            defaultChecked
                        />
                    )}
                    {options.map((item) => (
                        <input
                            className={styles.input}
                            {...register(name, option)}
                            key={item.value}
                            value={item.value}
                            type="radio"
                            name={name}
                            id={item.value}
                            title={item.content}
                            defaultChecked={defaulValue === item.value}
                        />
                    ))}
                </summary>
                <ul className={`list ${styles.ul}`}>
                    {options.map((item) => (
                        <li className={styles.li} key={item.value}>
                            <label
                                className={styles.label}
                                htmlFor={item.value}
                                onClick={handleClick}
                            >
                                {item.content}
                                <span></span>
                            </label>
                        </li>
                    ))}
                </ul>
            </details>
            {error && (
                <p className={styles.error}>
                    <TiWarningOutline size={14} />
                    {error}
                </p>
            )}
        </div>
    );
}
