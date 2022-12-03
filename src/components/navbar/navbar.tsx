import React from 'react';
import { IoIosArrowForward, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

interface Props {
    navTitle: string;
    children?: React.ReactNode;
    to?: string;
    active?: boolean;
}

export default function Navbar({ navTitle, children, to, active }: Props) {
    return to ? (
        <Link to={to} className={styles.navBar}>
            <div className={`${styles.navBar__head} ${active && styles['navBar__head--active']}`}>
                <h4
                    className={`${styles.navBar__head__title} ${
                        active && styles['navBar__head__title--acitve']
                    }`}
                >
                    {navTitle}
                </h4>
                <IoIosArrowForward
                    className={`${active && styles['navBar__head__icon--active']} `}
                    size={14}
                />
            </div>
            <div className={styles.navBar__body}>{children}</div>
        </Link>
    ) : (
        <div className={styles.navBar}>
            <div className={styles.navBar__head}>
                <h4 className={styles.navBar__head__title}>{navTitle}</h4>
                <IoIosArrowUp className={styles.navBar__head__icon} size={14} />
            </div>
            <div className={styles.navBar__body}>{children}</div>
        </div>
    );
}
