import React from 'react';
import Image from 'next/image';
import FooterLinks from './FooterLinks';
import styles from './footer.module.css';

const Footer = () => {

    const footerLinks = [
        ["Contact", "FAQ's"], ["Tutorials", "Blog"], ["Privacy", "Banned Items"], ["About",
            "Jobs"], ["Facebook", " Twitter", "Linkedin"]
    ]

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerDiv}>
                <div className={styles.logo}>
                    <Image src="/assets/logos/white-logo.svg" alt="logo" height={44} width={160} />
                    <div style={{ flexGrow: 1 }}></div>
                </div>

                <div className={styles.links}>
                    {footerLinks.map((linkSet, index) => {
                        return <FooterLinks key={index} links={linkSet} />
                    })}
                </div>
            </div>
            <div className={styles.copyright}>
                <p>Dukaan 2020, All rights reserved.</p>
                <div style={{ flexGrow: 1 }}></div>
                <p style={{ paddingRight: "10px" }}>Made in</p>
                <Image src="/assets/icons/flag.svg" alt="indian flag" height={18} width={27} />
            </div>

        </footer >
    );
}

export default Footer;