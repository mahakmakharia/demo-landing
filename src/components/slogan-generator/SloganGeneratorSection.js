import React, { useState } from 'react';
import GeneratedSlogan from './GeneratedSlogan';
import styles from './slogan.module.css'

const SloganGeneratorSection = () => {

    const [sloganText, setSloganText] = useState("");
    const [showIcon, setShowIcon] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [showGeneratedText, setShowGeneratedText] = useState(false);

    const handleCancel = () => {
        setSloganText('');
        setShowIcon(false);
        setDisabled(true)
        setShowGeneratedText(false);
    };

    const handleClick = () => {
        if (!disabled) {
            setShowGeneratedText(true);
            window.scroll({
                top: 500,
                left: 0,
                behavior: 'smooth'
            });
        }

    }


    const handleChange = (e) => {

        const value = e.target.value;
        setSloganText(value);

        if (value) {
            setShowIcon(true);
            setDisabled(false);
        }
        else
            handleCancel();
    }

    const handleEnter = (e) => {
        if (e.keyCode == 13) {
            handleClick();
        }
    };


    return (
        <div className={styles.generatorCard}>
            <p className={styles.heading}>Free slogan maker</p>
            <p className={styles.desc}>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</p>
            <p className={styles.inputlabel}>Word for your slogan</p>
            <div className={styles.inputBox}>
                {  /* eslint-disable-next-line @next/next/no-img-element */}
                {showIcon ? <img className={styles.crossIcon} src="/assets/icons/cross.svg"
                    alt="close icon" onClick={handleCancel} />
                    : null}

                <input type="text" value={sloganText} onChange={handleChange} onKeyDown={handleEnter} />
            </div>
            <button onClick={handleClick} className={disabled ? styles.blueButtonDisabled : styles.blueButton}>
                Generate slogans
            </button>
            {showGeneratedText ? <GeneratedSlogan slogan={sloganText} /> : null}


        </div>
    );
}

export default SloganGeneratorSection;