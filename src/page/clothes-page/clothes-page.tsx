import NavigateLink from '../../components/navigator/navigate-link';
import Layout from '../../layout/layout';
import styles from './ClothesPage.module.css';
import Navbar from '../../components/navbar/navbar';

export default function ClothesPage() {
    const navigators: INavigator[] = [
        { title: 'home', to: '/' },
        { title: 'female product', to: '/clothes' },
    ];

    return (
        <Layout>
            <NavigateLink navigators={navigators} />
            <section className={styles.container}>
                <div className={styles.container__navBar}>
                    <Navbar />
                </div>
                <div className={styles.container__listCardContainer}>
                    <h1>hahaha</h1>
                </div>
            </section>
        </Layout>
    );
}
