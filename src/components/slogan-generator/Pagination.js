import React from 'react';
import Image from 'next/image'
import styles from './slogan.module.css'

const Pagination = () => {
    return (
        <div className={styles.pageinationDiv}>
            <div style={{ flexGrow: 1 }}></div>
            <div className={styles.pageNumbers}>
                <div className={styles.selectedNo}>
                    1
                </div>
                <div className={styles.pageNo}>
                    2
                </div>
                <div className={styles.pageNo}>
                    3
                </div>
                <div className={styles.pageNo}>
                    ...
                </div>
                <div className={styles.pageNo}>
                    21
                </div>
            </div>

            <div className={styles.nextButton} >
                <button>Next</button>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.buttonIcon} alt="next icon" src="/assets/icons/next.svg" />
            </div>

        </div>)
}

export default Pagination;