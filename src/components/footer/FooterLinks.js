import React from 'react';
import styles from './footer.module.css';

const FooterLinks = ({ links }) => {
    return (
        <div className={styles.linksBox}>
            <ul className={styles.linkList}>
                {links.map(link => <li className={styles.link} key={link}>{link}</li>)}
            </ul>

        </div>
    );
}

export default FooterLinks;