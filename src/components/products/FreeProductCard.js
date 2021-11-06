import React from 'react';
import Image from 'next/image';
import styles from './product.module.css'

const FreeProductCard = ({ src, name, description }) => {
    return (
        <div className={styles.productCard} >
            <div >
                <Image className={styles.productImg} src={src} alt={name} height={200} width={400} />
            </div>

            <h3 className={styles.productName}>{name}</h3>
            <p className={styles.productDesc}>{description}</p>

        </div>
    );
}

export default FreeProductCard;