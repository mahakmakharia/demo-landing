import React from 'react';
import GeneratedSlogan from './GeneratedSlogan';
import styles from './slogan.module.css'

const SloganGeneratorSection = () => {
    return (
        <div className={styles.generatorCard}>
            <h4 className={styles.heading}>Free slogan maker</h4>
            <p className={styles.desc}>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</p>
            <p className={styles.inputlabel}>Word for your slogan</p>
            <div className={styles.inputBox}>
                <input type="text" />
            </div>
            <button className={styles.blueButton}>Generate slogans</button>
            <GeneratedSlogan />

        </div>
    );
}

export default SloganGeneratorSection;