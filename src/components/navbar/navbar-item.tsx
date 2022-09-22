import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

interface Props {
    to: string;
    title: string;
    active?: boolean;
}

export default function NavbarItem({ to, title, active }: Props) {
    if (active) {
        return (
            <Link
                to={to}
                className={`${styles.navBar__navBarItem} ${styles['navBar__navBarItem--active']}`}
            >
                <h4 className={styles['navBarItem__title--active']}>{title}</h4>
                <IoIosArrowForward className={styles['navBarItem__icon--active']} size={14} />
            </Link>
        );
    }

    return (
        <Link to={to} className={styles.navBar__navBarItem}>
            <h4 className={styles.navBarItem__title}>{title}</h4>
            <IoIosArrowForward className={styles.navBarItem__icon} size={14} />
        </Link>
    );
}
