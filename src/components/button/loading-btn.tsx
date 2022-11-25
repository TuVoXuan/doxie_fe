import styles from './LoadingButton.module.css';

export default function LoadingButton() {
    return (
        <button className={styles.container}>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </button>
    );
}
