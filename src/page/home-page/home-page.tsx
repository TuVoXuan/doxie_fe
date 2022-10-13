import Container from 'components/Container/Container';
import Title from 'components/title/Title';
import Layout from 'layout/layout';
import styles from './HomePage.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import { categories } from 'fake-data/category';
import ProductCard from 'components/product-card/product-card';
import { useEffect, useState } from 'react';
import { getProducts } from 'utils/products';

export default function HomePage() {
    const [pros, setPros] = useState<IProductCard[]>([]);

    useEffect(() => {
        const categoryIds = categories.map((item) => item.id);
        setPros(getProducts(categoryIds, 6, '').data);
    }, []);

    return (
        <Layout background="gray">
            <h1>Home page Home page</h1>
            <Container>
                <Title mainTitle="Shopping cart" subTitle="tshirt" titleBold={true} />
            </Container>

            <p className={styles.categories}>PRODUCTS</p>
            <p className={styles.text}>Check What We Have</p>
            <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={3}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {pros.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ProductCard product={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Layout>
    );
}
