import Layout from '../../layout/layout';
import ProductInformation from '../../components/product-details/product-information';
import ProductOverview from 'components/product-details/product-overview';
import NavigateLink from 'components/navigator/navigate-link';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { products } from '../../fake-data/product';
import { categories } from 'fake-data/category';

export default function ProductDetails() {
    const { id } = useParams();

    const [product, setProduct] = useState<IProduct>();
    const [category, setCategory] = useState<ICategory>();

    const navigators: INavigator[] = [
        { title: 'home', to: '/' },
        { title: `product`, to: `` },
    ];

    useEffect(() => {
        const data = products.find((item) => item.id === id);
        if (data) {
            const cate = categories.find((e) => e.id === data.category);
            if (cate) {
                setCategory(cate);
            }
            setProduct(data);
        }
    }, [id]);

    return (
        <Layout background="gray">
            <NavigateLink navigators={navigators} />
            {product && category && (
                <>
                    <ProductOverview category={category} product={product} />
                    <ProductInformation product={product} />
                </>
            )}
        </Layout>
    );
}
