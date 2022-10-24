import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import Navbar from '../../components/navbar/navbar';
import NavbarItem from '../../components/navbar/navbar-item';
import NavigateLink from '../../components/navigator/navigate-link';
import Layout from '../../layout/layout';
import { selectUser } from '../../redux/reducers/user-slice';
import { useQuery } from '../../utils/router';
import Profile from './profile/profile';
import Transaction from './transaction/transaction';
import styles from './user.module.css';
import { useNavigate } from 'react-router-dom';

export default function UserPage() {
    const sUser = useAppSelector(selectUser);
    const query = useQuery();
    const navigate = useNavigate();

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
            return <Profile />;
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
