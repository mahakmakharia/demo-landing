import React from 'react';

const FooterLinks = ({ links }) => {
    return (
        <div>
            <ul>
                {links.map(link => <li key={link}>{link}</li>)}
            </ul>

        </div>
    );
}

export default FooterLinks;