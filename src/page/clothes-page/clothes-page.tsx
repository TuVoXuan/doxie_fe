import NavigateLink from '../../components/navigator/navigate-link';
import Layout from '../../layout/layout';
import styles from './ClothesPage.module.css';
import Navbar from '../../components/navbar/navbar';
import ProductCard from '../../components/product-card/product-card';
import { useLocation } from 'react-router-dom';
import NavbarItem from '../../components/navbar/navbar-item';
import React from 'react';
import { categories } from '../../fake-data/category';

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function ClothesPage() {
    const query = useQuery();
    const parentCate = query.get('parentCate');
    const childrenCate = query.get('childrenCate');

    const parentCategory: ICategory | undefined = categories.find(
        (item) => item.name === parentCate
    );

    const categoryList: ICategory[] = categories.filter(
        (item) => item.parentId === parentCategory?.id
    );
    categoryList.unshift({
        id: '6362dd53-33a4-4bab-9cc7-9428c5931a3b',
        name: 'all products',
        parentId: null,
    });

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
                            ? categoryList.map((cate, index) => {
                                  if (childrenCate === cate.name) {
                                      return (
                                          <NavbarItem
                                              key={cate.id}
                                              active
                                              title={cate.name}
                                              to={`/clothes?parentCate=${parentCate}&childrenCate=${cate.name}`}
                                          />
                                      );
                                  }
                                  if (index === 0) {
                                      return (
                                          <NavbarItem
                                              key={cate.id}
                                              title={cate.name}
                                              to={`/clothes?parentCate=${parentCate}`}
                                          />
                                      );
                                  }
                                  return (
                                      <NavbarItem
                                          key={cate.id}
                                          title={cate.name}
                                          to={`/clothes?parentCate=${parentCate}&childrenCate=${cate.name}`}
                                      />
                                  );
                              })
                            : categoryList.map((cate, index) => {
                                  if (index === 0) {
                                      return (
                                          <NavbarItem
                                              key={cate.id}
                                              active
                                              title={cate.name}
                                              to={`/clothes?parentCate=${parentCate}`}
                                          />
                                      );
                                  }
                                  return (
                                      <NavbarItem
                                          key={cate.id}
                                          title={cate.name}
                                          to={`/clothes?parentCate=${parentCate}&childrenCate=${cate.name}`}
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
