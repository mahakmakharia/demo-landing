import React from 'react';
import Image from 'next/image'
import styles from './hero.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}><Image src="/assets/logos/white-logo.png" alt="logo" height={44} width={160} /></div>
            <div style={{ flexGrow: 1 }}></div>
            <div className={styles.navItems}>
                <a className={styles.signinButton}>Sign In</a>
                <button className={styles.whiteButton}>Dukaan for PC</button>
            </div>

        </div>
    );
}

export default Navbar;