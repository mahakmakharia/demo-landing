import React from 'react';
import Image from 'next/image'

const Navbar = () => {
    return (
        <div style={{ background: "blue" }}>
            <Image src="/assets/logos/white-logo.png" alt="logo" height={44} width={150} />
            <a>Sign In</a>
            <button>Dukaan for PC</button>
        </div>
    );
}

export default Navbar;