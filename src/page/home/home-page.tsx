import Layout from 'layout/layout';
import styles from './home-promotions.module.css';
import homePromotion1 from '../../assets/images/homePromotion1.png';
import homePromotion2 from '../../assets/images/homePromotion2.png';
import homePromotion3 from '../../assets/images/homePromotion3.png';
import Hero from '../../components/hero/hero';

export default function HomePage() {
    return (
        <Layout background="gray">
            <Hero />

            {/* Promotions */}
            <div className={styles.promotions}>
                <div className={styles.promotionContent}>
                    <h3 className={styles.promotionContentColor}>PROMOTIONS</h3>
                    <h1>Our Promotion Events</h1>
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
            </div>
        </Layout>
    );
}
