import NavigateLink from '../../components/navigator/navigate-link';
import Layout from '../../layout/layout';
import styles from './ClothesPage.module.css';
import Navbar from '../../components/navbar/navbar';
import ProductCard from '../../components/product-card/product-card';
import { useLocation } from 'react-router-dom';
import NavbarItem from '../../components/navbar/navbar-item';
import React, { useEffect, useState } from 'react';
import { categories } from '../../fake-data/category';
import { getProducts } from '../../utils/products';
import { useQuery } from '../../utils/router';

export default function ClothesPage() {
    const query = useQuery();
    const parentCate = query.get('parentCate');
    const childrenCate = query.get('childrenCate');
    const [after, setAfter] = useState<string>('');
    const [pros, setPros] = useState<IProductCard[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

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

    const handleLoadMore = () => {
        setLoading(true);
        let idCateogries: string[] = [];

        if (childrenCate) {
            const idCategory = categoryList.find((item) => item.name === childrenCate)?.id || '';
            idCateogries = [idCategory];
        } else {
            idCateogries = categoryList.map((item) => item.id);
        }

        const response = getProducts(idCateogries, 6, after);

        setTimeout(() => {
            setLoading(false);
            setPros((value) => [...value, ...response.data]);
            setAfter(response.after);
        }, 2000);
    };

    useEffect(() => {
        let idCateogries: string[] = [];

        if (childrenCate) {
            const idCategory = categoryList.find((item) => item.name === childrenCate)?.id || '';
            idCateogries = [idCategory];
        } else {
            idCateogries = categoryList.map((item) => item.id);
        }

        const response = getProducts(idCateogries, 6, '');
        setPros(response.data);

        setAfter(response.after);
    }, [parentCate, childrenCate]);

    return (
        <Layout background="white">
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
                        {pros.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                    {after && (
                        <div className={styles.container__loadmore}>
                            {loading ? (
                                <button className={styles.container__loadmore__button}>
                                    <div className="lds-ring">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </button>
                            ) : (
                                <button className="button" onClick={handleLoadMore}>
                                    Load more
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}
