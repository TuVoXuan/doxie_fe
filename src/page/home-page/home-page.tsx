import Layout from 'layout/layout';
import styles from './HomePage.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { categories } from 'fake-data/category';
import ProductCard from 'components/product-card/product-card';
import { useEffect, useState } from 'react';
import { getProducts } from 'utils/products';
import Hero from '../../components/hero/hero';
import homePromotion1 from '../../assets/images/homePromotion1.png';
import homePromotion2 from '../../assets/images/homePromotion2.png';
import homePromotion3 from '../../assets/images/homePromotion3.png';
import Hoodie from '../../assets/images/hoodie.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import Container from '../../components/Container/Container';
import Title from '../../components/title/Title';

export default function HomePage() {
    const [pros, setPros] = useState<IProductCard[]>([]);

    useEffect(() => {
        const categoryIds = categories.map((item) => item.id);
        setPros(getProducts(categoryIds, 6, '').data);
    }, []);

    return (
        <Layout background="white">
            <Hero />

            {/* Promotions */}
            <section className={styles.promotions}>
                <div className={styles.promotionContent}>
                    <h3 className={styles.promotionContentColor}>PROMOTIONS</h3>
                    <p className={styles.title}>Our Promotion Events</p>
                </div>
                <div className={styles.promotionAll}>
                    <div className={styles.promotionSell}>
                        <div className={styles.promotionSellUpBackground}>
                            <div className={styles.promotionSellUpContent}>
                                <div className={styles.promotionSellUpContentMain}>
                                    <h1 className={styles.promotionSellUpContentMain1}>
                                        GET UP TO
                                    </h1>
                                    <h1 className={styles.promotionSellUpContentMain2}>60%</h1>
                                </div>
                                <h3 className={styles.promotionSellUpContentSub}>
                                    For the summer season
                                </h3>
                            </div>
                            <img
                                className={styles.promotionSellUpImage}
                                src={homePromotion1}
                                alt="For the summer season"
                            />
                        </div>

                        <div className={styles.promotionSellBottomBackground}>
                            <div className={styles.promotionSellBottomColorWord}>
                                <h1 className={styles.promotionSellBottomMain}>GET 30% Off</h1>
                                <div className={styles.promotionSellBottomSpace1}> </div>
                                <p className={styles.promotionSellBottomSup}>USE PROMO CODE</p>
                                <div className={styles.promotionSellBottomSpace1}> </div>
                                <div className={styles.promotionSellBottomSupBox}>
                                    <h3 className={styles.promotionSellBottomSupBoxWord}>
                                        DINEWEEKENDSALE
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.promotionDiscount}>
                        <div className={styles.promotionDiscountLeft}>
                            <div className={styles.promotionDiscountLeftBoxContent}>
                                <p className={styles.promotionDiscountLeftContent}>
                                    Flex Sweatshirt
                                </p>
                                <div className={styles.promotionDiscountLeftSpace}></div>
                                <div className={styles.promotionDiscountLeftPrice}>
                                    <p className={styles.promotionDiscountLeftPrice1}>$100.00</p>
                                    <h3 className={styles.promotionDiscountLeftPrice2}>$75.00</h3>
                                </div>
                            </div>
                            <img
                                className={styles.promotionDiscountLeftImage}
                                src={homePromotion2}
                                alt="Flex Sweatshirt"
                            />
                        </div>
                        <div className={styles.promotionDiscountRight}>
                            <div className={styles.promotionDiscountRightBoxContent}>
                                <p className={styles.promotionDiscountRightContent}>
                                    Flex Push Button Bomber
                                </p>
                                <div className={styles.promotionDiscountRightSpace}></div>
                                <div className={styles.promotionDiscountRightPrice}>
                                    <p className={styles.promotionDiscountRightPrice1}>$225.00</p>
                                    <h3 className={styles.promotionDiscountRightPrice2}>$190.00</h3>
                                </div>
                            </div>
                            <img
                                className={styles.promotionDiscountRightImage}
                                src={homePromotion3}
                                alt="Flex Push button Bomber"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className={styles.productsSection}>
                <h3 className={styles.categories}>PRODUCTS</h3>
                <p className={styles.title}>Check What We Have</p>
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
            </section>

            {/* Description */}
            <section>
                <div className={styles.title__wrapper}>
                    <h1>
                        Unique and Authentic <br />
                        Vintage Designer <br />
                        Jewellery
                    </h1>
                </div>
                <div className={styles.descriptionContainer}>
                    <div className={styles.productInfo__container}>
                        <div className={styles['product__info--wrapper']}>
                            <div className={styles.product__information}>
                                <p className={styles.product__title}>
                                    Using Good Quality Materials
                                </p>
                                <p className={styles.product__description}>
                                    Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                                </p>
                            </div>
                            <div className={styles.product__information}>
                                <p className={styles.product__title}>100% Handmade Products</p>
                                <p className={styles.product__description}>
                                    Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                                </p>
                            </div>
                            <div className={styles.product__information}>
                                <p className={styles.product__title}>Modern Fashion Design</p>
                                <p className={styles.product__description}>
                                    Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                                </p>
                            </div>
                            <div className={styles.product__information}>
                                <p className={styles.product__title}>Discount for Bulk Orders</p>
                                <p className={styles.product__description}>
                                    Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.wrapper__img}>
                            <img src={Hoodie} alt="Picture" className={styles.product__img} />
                        </div>
                        <div className={styles.wrapper__detail}>
                            <div>
                                <p>
                                    This piece is ethically crafted in our small family-owned
                                    workshop in Peru with unmatched attention to detail and care.
                                    The Natural color is the actual natural color of the fiber,
                                    undyed and 100% traceable.
                                </p>
                            </div>
                            <div>
                                <button>See All Products</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subscribe newsletter */}
            <section className={styles.container__email}>
                <form action="">
                    <h1>Subscribe Our Newsletter</h1>
                    <p>Get the latest information and promo offers directly</p>
                    <div className={styles.email__box}>
                        <input
                            className={styles.tbox}
                            type="email"
                            name=""
                            value=""
                            placeholder="Input email address"
                        />
                        <button className={styles.btn} type="button" name="button">
                            Get Started
                        </button>
                    </div>
                </form>
            </section>
        </Layout>
    );
}
