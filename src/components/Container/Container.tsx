import React from 'react';
import styles from './Container.module.css';

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

export default function Container({ children }: Props) {
    return <section className={styles.container}>{children}</section>;
}
