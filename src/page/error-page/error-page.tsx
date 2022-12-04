import { useNavigate } from 'react-router-dom';
import styles from './ErrorPage.module.css';

export default function ErrorPage() {
    const navigate = useNavigate();

    const handleGoHomePage = () => {
        navigate('/');
    };

    return (
        <section className={styles.errorContainer}>
            <div className={styles.errorContent}>
                <img className={styles.errorImage} src="./assets/images/error-page.svg" />
                <button onClick={handleGoHomePage} className={styles.GoHomeBtn}>
                    Go to home page
                </button>
            </div>
        </section>
    );
}
