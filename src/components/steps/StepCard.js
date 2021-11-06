import React from 'react';
import Image from 'next/image';

const StepCard = ({ src, name, description }) => {
    return (
        <div >
            <Image src={src} alt={name} height={100} width={100} />
            <h6>{name}</h6>
            <p>{description}</p>

        </div>
    );
}

export default StepCard;