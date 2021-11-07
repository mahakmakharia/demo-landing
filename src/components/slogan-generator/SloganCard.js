import React, { useState } from 'react';
import styles from './slogan.module.css'

const SloganCard = ({ slogan }) => {

    const [copy, setCopy] = useState(false);
    const [copied, setCopied] = useState(false);

    return (
        <>
            <div className={styles.sloganBox} onMouseOver={() => { setCopy(true) }}
                onMouseOut={() => { setCopy(false); setCopied(false) }}
                onClick={() => setCopied(true)}
            >
                <div className={styles.sloganText}>
                    {slogan}
                </div>

                {copy && copied === false ? <div className={styles.copyToast} >Click to copy</div>
                    : null}

                {copied ? <div className={styles.copiedToast} >Copied!</div> : null}

            </div>

        </>
    )
}

export default SloganCard;