import React from 'react';
import styles from './slogan.module.css'

const SloganCard = ({ slogan }) => {
    return (
        <div className={styles.sloganBox}>
            <div className={styles.sloganText}>
                {slogan}
            </div>
        </div>)
}

export default SloganCard;