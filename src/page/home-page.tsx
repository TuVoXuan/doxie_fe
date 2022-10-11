import Container from '../components/Container/Container';
import Title from '../components/title/Title';
import Layout from '../layout/layout';
import Hoodie from '../assets/images/hoodie.jpg';
import '../styles/home.css';

export default function HomePage() {
    return (
        <Layout background="gray">
            <h1>Home page Home page</h1>
            <Container>
                <Title mainTitle="Shopping cart" subTitle="tshirt" titleBold={true} />
                <div>
                    <div className="title__wrapper">
                        <h1>
                            Unique and Authentic <br />
                            Vintage Designer <br />
                            Jewellery
                        </h1>
                    </div>
                    <div>
                        <div className="product__info--wrapper">
                            <div className="product__info--child">
                                <div className="product__information">
                                    <p className="product__title">Using Good Quality Materials</p>
                                    <p className="product__description">
                                        Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                                    </p>
                                </div>
                                <div className="product__information">
                                    <p className="product__title">100% Handmade Products</p>
                                    <p className="product__description">
                                        Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="product__info--child">
                                <div className="product__information">
                                    <p className="product__title">Modern Fashion Design</p>
                                    <p className="product__description">
                                        Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                                    </p>
                                </div>
                                <div className="product__information">
                                    <p className="product__title">Discount for Bulk Orders</p>
                                    <p className="product__description">
                                        Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="wrapper__img">
                                <img src={Hoodie} alt="Picture" className="product__img" />
                            </div>
                            <div className="wrapper__detail">
                                <div>
                                    <p>
                                        This piece is ethically crafted in our small family-owned
                                        workshop in Peru with unmatched attention to detail and
                                        care. The Natural color is the actual natural color of the
                                        fiber, undyed and 100% traceable.
                                    </p>
                                </div>
                                <div>
                                    <button>See All Products</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container__email">
                    <form action="">
                        <h1>Subscribe Our Newsletter</h1>
                        <p>Get the latest information and promo offers directly</p>
                        <div className="email__box">
                            <input
                                className="tbox"
                                type="email"
                                name=""
                                value=""
                                placeholder="Input email address"
                            />
                            <button className="btn" type="button" name="button">
                                Get Started
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </Layout>
    );
}
