import React from 'react';
import Image from 'next/image';
import FooterLinks from './FooterLinks';

const Footer = () => {

    const footerLinks = [
        ["Contact", "FAQ's"], ["Tutorials", "Blog"], ["Privacy", "Banned Items"], ["About",
            "Jobs"], ["Facebook", " Twitter", "Linkedin"]
    ]

    return (
        <footer>
            <div>
                <Image src="/assets/logos/white-logo.png" alt="logo" height={44} width={150} />
            </div>
            <div>
                {footerLinks.map((linkSet, index) => {
                    return <FooterLinks key={index} links={linkSet} />
                })}
            </div>
            <div>
                <p>Dukaan 2020, All rights reserved.</p>
                <p>Made in</p> <Image src="/assets/icons/flag.svg" alt="indian flag" height={20} width={35} />
            </div>

        </footer>
    );
}

export default Footer;