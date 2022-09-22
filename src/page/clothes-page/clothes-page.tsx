import NavigateLink from '../../components/navigator/navigate-link';
import Layout from '../../layout/layout';
import styles from './ClothesPage.module.css';
import Navbar from '../../components/navbar/navbar';
import ProductCard from '../../components/product-card/product-card';
import { useLocation } from 'react-router-dom';
import NavbarItem from '../../components/navbar/navbar-item';
import React from 'react';

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function ClothesPage() {
    const query = useQuery();
    const parentCate = query.get('parentCate');
    console.log('parentCate: ', parentCate);
    const childrenCate = query.get('childrenCate');
    console.log('childrenCate: ', childrenCate);

    const categories: string[] = [
        'all products',
        't shirts',
        'sweater',
        'jackets',
        'dress',
        'pants',
        'coats',
        'underware',
        'shoes',
    ];
    const navigators: INavigator[] = [
        { title: 'home', to: '/' },
        { title: `${parentCate} product`, to: `/clothes?parentCate=${parentCate}` },
    ];

    return (
        <Layout>
            <NavigateLink navigators={navigators} />
            <section className={styles.container}>
                <div className={styles.container__navBar}>
                    <Navbar navTitle="product category">
                        {childrenCate
                            ? categories.map((cate, index) => {
                                  if (childrenCate === cate) {
                                      return (
                                          <NavbarItem
                                              key={cate}
                                              active
                                              title={cate}
                                              to={`/clothes?parentCate=${parentCate}&childrenCate=${cate}`}
                                          />
                                      );
                                  }
                                  if (index === 0) {
                                      return (
                                          <NavbarItem
                                              key={cate}
                                              title={cate}
                                              to={`/clothes?parentCate=${parentCate}`}
                                          />
                                      );
                                  }
                                  return (
                                      <NavbarItem
                                          key={cate}
                                          title={cate}
                                          to={`/clothes?parentCate=${parentCate}&childrenCate=${cate}`}
                                      />
                                  );
                              })
                            : categories.map((cate, index) => {
                                  if (index === 0) {
                                      return (
                                          <NavbarItem
                                              key={cate}
                                              active
                                              title={cate}
                                              to={`/clothes?parentCate=${parentCate}`}
                                          />
                                      );
                                  }
                                  return (
                                      <NavbarItem
                                          key={cate}
                                          title={cate}
                                          to={`/clothes?parentCate=${parentCate}&childrenCate=${cate}`}
                                      />
                                  );
                              })}
                    </Navbar>
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
