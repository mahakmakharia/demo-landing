import React from 'react';
import Image from 'next/image';
import styles from './steps.module.css'

const StepCard = ({ src, name, description }) => {
    return (
        <div className={styles.stepCard} >
            <Image className={styles.stepIcon} src={src} alt={name} height={72} width={72} />
            <h6 className={styles.stepName}>{name}</h6>
            <p className={styles.stepDesc}>{description}</p>
        </div>
    );
}

export default StepCard;