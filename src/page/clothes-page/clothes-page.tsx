import NavigateLink from '../../components/navigator/navigate-link';
import Layout from '../../layout/layout';
import styles from './ClothesPage.module.css';
import Navbar from '../../components/navbar/navbar';
import ProductCard from '../../components/product-card/product-card';

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
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                            columnGap: '20px',
                            rowGap: '36px',
                        }}
                    >
                        <ProductCard
                            id={'6b930bfd-d558-40ea-ac4d-f99093b237d3'}
                            image={'./assets/images/sweater.png'}
                            price={1700}
                            category={'sweater'}
                            name={'Flex sweater Flex sweater Flex sweater Flex sweater'}
                        />
                        <ProductCard
                            id={'6b930bfd-d558-40ea-ac4d-f99093b237d3'}
                            image={'./assets/images/paint.png'}
                            price={1700}
                            category={'sweater'}
                            name={'Flex sweater'}
                        />
                        <ProductCard
                            id={'6b930bfd-d558-40ea-ac4d-f99093b237d3'}
                            image={'./assets/images/dress1.png'}
                            price={1700}
                            category={'sweater'}
                            name={'Flex sweater'}
                        />
                        <ProductCard
                            id={'6b930bfd-d558-40ea-ac4d-f99093b237d3'}
                            image={'./assets/images/dress2.png'}
                            price={1700}
                            category={'sweater'}
                            name={'Flex sweater'}
                        />
                        <ProductCard
                            id={'6b930bfd-d558-40ea-ac4d-f99093b237d3'}
                            image={'./assets/images/bomber.png'}
                            price={1700}
                            category={'sweater'}
                            name={'Flex sweater'}
                        />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
