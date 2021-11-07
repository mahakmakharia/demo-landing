import React from 'react';
import styles from './slogan.module.css'

const SloganCard = ({ slogan, copied = true }) => {
    return (
        <>
            <div className={styles.sloganBox}>
                <div className={styles.sloganText}>
                    {slogan}
                </div>
                {copied ? <div className={styles.copiedToast} >Copied!</div>
                    : <div className={styles.copyToast} >Click to copy</div>}

            </div>

        </>
    )
}

export default SloganCard;