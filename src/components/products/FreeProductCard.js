import React from 'react';
import Image from 'next/image';

const FreeProductCard = ({ src, name, description }) => {
    return (
        <div >
            <Image src={src} alt={name} height={200} width={300} />
            <h3>{name}</h3>
            <p>{description}</p>

        </div>
    );
}

export default FreeProductCard;