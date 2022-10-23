import styles from './Button.module.css';

interface Props {
    title: string;
    type?: 'primay' | 'secondary';
    onClick?: () => void;
    submit?: boolean;
    form?: string;
}

export default function Button({ title, type, form, onClick, submit = false }: Props) {
    const handleType = () => {
        if (type === 'primay') {
            return styles['btn--primary'];
        }
        return styles['btn--secondary'];
    };

    if (submit) {
        return (
            <button
                type="submit"
                form={form}
                onClick={onClick}
                className={`${styles.btn} ${handleType()}`}
            >
                {title}
            </button>
        );
    }

    return (
        <button onClick={onClick} className={`${styles.btn} ${handleType()}`}>
            {title}
        </button>
    );
}
