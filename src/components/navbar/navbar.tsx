import React from 'react';
import { IoIosArrowForward, IoIosArrowUp } from 'react-icons/io';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

interface Props {
    navTitle: string;
    navItem: string;
}

export default function Navbar() {
    return (
        <div className={styles.navBar}>
            <div className={styles.navBar__head}>
                <h4>PRODUCT CATEGORY</h4>
                <IoIosArrowUp size={14} />
            </div>
            <div className={styles.navBar__body}>
                <Link
                    to="/clothes"
                    className={`${styles.navBar__navBarItem} ${styles['navBar__navBarItem--active']}`}
                >
                    <h4 className={styles['navBarItem__title--active']}>all product</h4>
                    <IoIosArrowForward className={styles['navBarItem__icon--active']} size={14} />
                </Link>
                <Link to="/clothes" className={styles.navBar__navBarItem}>
                    <h4 className={styles.navBarItem__title}>T shirts</h4>
                    <IoIosArrowForward className={styles.navBarItem__icon} size={14} />
                </Link>
                <Link to="/clothes" className={styles.navBar__navBarItem}>
                    <h4 className={styles.navBarItem__title}>T shirts</h4>
                    <IoIosArrowForward className={styles.navBarItem__icon} size={14} />
                </Link>
                <Link to="/clothes" className={styles.navBar__navBarItem}>
                    <h4 className={styles.navBarItem__title}>T shirts</h4>
                    <IoIosArrowForward className={styles.navBarItem__icon} size={14} />
                </Link>
            </div>
        </div>
    );
}
