import React from 'react';
import Pagination from './Pagination';
import styles from './slogan.module.css'
import SloganCard from './SloganCard';

const GeneratedSlogan = () => {

    const slogans = ["There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow",
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "coziness building for tomorrow"]

    return (
        <>
            <div className={styles.sloganList}>
                <div className={styles.resultDiv}>
                    <p className={styles.text} >We have generated 1,023 slogans for “cozy”</p>
                    <div style={{ flexGrow: 1 }}></div>
                    <button className={styles.outlinedButton}>Download All</button>
                </div>
                <div className={styles.slogansDiv}>
                    {slogans.map(slogan => {
                        return (<SloganCard key={slogan} slogan={slogan} />)
                    })}
                </div>



            </div>
            <Pagination />
        </>
    );
}

export default GeneratedSlogan;