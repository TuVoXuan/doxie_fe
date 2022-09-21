import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigateLink.module.css';

interface Props {
    title: string;
    to: string;
}

export default function NavLink({ title, to }: Props) {
    return (
        <Link className={styles.link} to={to}>
            {title}
        </Link>
    );
}
