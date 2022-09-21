import ProductCard from '../components/product-card/product-card';
import Layout from '../layout/layout';

export default function ClothesPage() {
    return (
        <Layout>
            <h1>Clothes page</h1>

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
        </Layout>
    );
}
