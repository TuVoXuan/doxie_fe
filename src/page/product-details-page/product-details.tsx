import Layout from '../../layout/layout';
import ProductInformation from '../../components/product-details/product-information';
import ProductOverview from 'components/product-details/product-overview';

export default function ProductDetails() {
    return (
        <Layout background="gray">
            <ProductOverview />
            <ProductInformation />
        </Layout>
    );
}
