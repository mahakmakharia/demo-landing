import React from 'react';
import Image from 'next/image';
import styles from './product.module.css'

const FreeProductCard = ({ src, name, description }) => {
    return (
        <div className={styles.productCard} >
            <div >
                <Image className={styles.productImg} src={src} alt={name} height={220} width={400} />
            </div>

            <p className={styles.productName}>{name}</p>
            <p className={styles.productDesc}>{description}</p>

        </div>
    );
}

export default FreeProductCard;