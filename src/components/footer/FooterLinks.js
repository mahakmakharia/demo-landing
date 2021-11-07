import React from 'react';
import styles from './footer.module.css';

const FooterLinks = ({ links }) => {
    return (
        <div className={styles.linksBox}>
            <ul className={styles.linkList}>
                {links.map((link, index) => {
                    return (
                        <div key={index}>
                            <li className={styles.link} key={link}>
                                {link}
                                {link === "Jobs" ? <span className={styles.count}>3</span> : null}
                            </li>
                        </div>
                    )
                })}
            </ul>

        </div>
    );
}

export default FooterLinks;