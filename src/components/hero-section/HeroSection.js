import React from 'react'
import Navbar from './Navbar';
import SloganGeneratorSection from '../slogan-generator/SloganGeneratorSection'
import styles from './hero.module.css'

const HeroSection = () => {
    return (
        <div className={styles.lightBg}>
            <div className={styles.blueBg}> <Navbar /></div>
            <div className={styles.sloganCard}><SloganGeneratorSection /></div>
        </div>
    );
}

export default HeroSection;