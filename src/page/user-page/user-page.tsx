import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useRoutes } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import NavbarItem from '../../components/navbar/navbar-item';
import NavigateLink from '../../components/navigator/navigate-link';
import Layout from '../../layout/layout';
import { useQuery } from '../../utils/router';
import Transaction from './transaction/transaction';
import styles from './user.module.css';

export default function UserPage() {
    const query = useQuery();

    const { id } = useParams();

    const location = useLocation();

    const type = query.get('type');

    const handleNavigator = (): INavigator[] => {
        const navigators: INavigator[] = [{ title: 'home', to: '/' }];

        if (location.pathname === '/user/profile') {
            navigators.push({ title: 'profile', to: '/user/profile' });
        } else if (location.pathname === '/user/transaction') {
            navigators.push({ title: 'transaction', to: '#' });
            switch (type) {
                case 'pending':
                    navigators.push({ title: 'pending', to: '/user/transaction?type=pending' });
                    break;
                case 'delivering':
                    navigators.push({
                        title: 'delivering',
                        to: '/user/transaction?type=delivering',
                    });
                    break;
                case 'completed':
                    navigators.push({ title: 'completed', to: '/user/transaction?type=completed' });
                    break;
                default:
                    break;
            }
        }

        return navigators;
    };

    const handleRender = () => {
        if (location.pathname === '/user/profile') {
            return <div>user profile</div>;
        } else if (location.pathname === '/user/transaction') {
            switch (type) {
                case 'pending':
                    return <Transaction type="pending" />;
                case 'delivering':
                    return <Transaction type="delivering" />;
                case 'completed':
                    return <Transaction type="completed" />;
                default:
                    return null;
            }
        }
        return null;
    };

    return (
        <Layout background="gray">
            <NavigateLink navigators={handleNavigator()} />

            <section className={styles.container}>
                <div className={styles.container__navBar}>
                    <Navbar
                        active={location.pathname === '/user/profile'}
                        navTitle={'my profile'}
                        to={`/user/profile`}
                    />
                    <Navbar navTitle="transaction">
                        <NavbarItem
                            active={location.pathname === '/user/transaction' && type === 'pending'}
                            title={'pending'}
                            to={`/user/transaction?type=pending`}
                        />
                        <NavbarItem
                            active={
                                location.pathname === '/user/transaction' && type === 'delivering'
                            }
                            title={'delivering'}
                            to={`/user/transaction?type=delivering`}
                        />
                        <NavbarItem
                            active={
                                location.pathname === '/user/transaction' && type === 'completed'
                            }
                            title={'completed'}
                            to={`/user/transaction?type=completed`}
                        />
                    </Navbar>
                </div>

                {handleRender()}
            </section>
        </Layout>
    );
}
