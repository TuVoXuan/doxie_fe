import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import styles from './NavBar.module.css';

interface Props {
    navTitle: string;
    children: React.ReactNode;
}

export default function Navbar({ navTitle, children }: Props) {
    return (
        <div className={styles.navBar}>
            <div className={styles.navBar__head}>
                <h4 className={styles.navBar__head__title}>{navTitle}</h4>
                <IoIosArrowUp className={styles.navBar__head__icon} size={14} />
            </div>
            <div className={styles.navBar__body}>{children}</div>
        </div>
    );
}
