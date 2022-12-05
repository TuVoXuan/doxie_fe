import React from 'react';
import styles from './Title.module.css';

interface Props {
    mainTitle: string;
    subTitle: string;
    titleBold?: boolean;
    large?: boolean;
    subBoldColor?: boolean;
}

export default function Title({ mainTitle, subTitle, titleBold, large, subBoldColor }: Props) {
    return (
        <article className={styles.title}>
            <p
                className={`${styles.title__main} ${titleBold && styles['title__sub--bold']} ${
                    large && styles.title__large
                } `}
            >
                {mainTitle}
            </p>
            <h1
                className={`${styles.title__sub} ${large && styles['title__sub--large']} ${
                    subBoldColor && styles['title__sub--bold-color']
                }`}
            >
                {subTitle}
            </h1>
        </article>
    );
}
