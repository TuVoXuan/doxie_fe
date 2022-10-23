import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useRoutes } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import NavbarItem from '../../components/navbar/navbar-item';
import NavigateLink from '../../components/navigator/navigate-link';
import Layout from '../../layout/layout';
import { useQuery } from '../../utils/router';
import styles from './user.module.css';

export default function UserPage() {
    const query = useQuery();

    const { id } = useParams();
    console.log('id: ', id);

    const location = useLocation();
    console.log('location: ', location);

    const type = query.get('type');

    // const [navigators, setNavigators] = useState<INavigator[]>([{ title: 'home', to: '/' }]);

    const handleNavigator = (): INavigator[] => {
        const navigators: INavigator[] = [{ title: 'home', to: '/' }];

        if (location.pathname === '/user/profile') {
            // setNavigators((value) => [
            //     ...value.splice(0, 1),
            //     { title: 'profile', to: '/user/profile' },
            // ]);
            navigators.push({ title: 'profile', to: '/user/profile' });
        } else if (location.pathname === '/user/transaction') {
            // setNavigators((value) => [...value.splice(0, 1), { title: 'transaction', to: '#' }]);
            navigators.push({ title: 'transaction', to: '#' });
            switch (type) {
                case 'pending':
                    // setNavigators((value) => [
                    //     ...value.splice(0, 2),
                    //     { title: 'pending', to: '/user/transaction?type=pending' },
                    // ]);
                    navigators.push({ title: 'pending', to: '/user/transaction?type=pending' });
                    break;
                case 'delivering':
                    // setNavigators((value) => [
                    //     ...value.splice(0, 2),
                    //     { title: 'delivering', to: '/user/transaction?type=delivering' },
                    // ]);
                    navigators.push({
                        title: 'delivering',
                        to: '/user/transaction?type=delivering',
                    });
                    break;
                case 'completed':
                    // setNavigators((value) => [
                    //     ...value.splice(0, 2),
                    //     { title: 'completed', to: '/user/transaction?type=completed' },
                    // ]);
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
                    return <div>pending</div>;
                case 'delivering':
                    return <div>delivering</div>;
                case 'completed':
                    return <div>completed</div>;
                default:
                    return null;
            }
        }
        return null;
    };

    // useEffect(() => {
    //     handleNavigator();
    // }, [location.pathname, type]);
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
