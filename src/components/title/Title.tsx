import React from 'react';
import styles from './Title.module.css';

interface Props {
    mainTitle: string;
    subTitle: string;
    titleBold?: boolean;
}

export default function Title({ mainTitle, subTitle, titleBold }: Props) {
    return (
        <article className={styles.title}>
            <p className={`${styles.title__main} ${titleBold && styles['title__sub--bold']}`}>
                {mainTitle}
            </p>
            <h1 className={styles.title__sub}>{subTitle}</h1>
        </article>
    );
}
