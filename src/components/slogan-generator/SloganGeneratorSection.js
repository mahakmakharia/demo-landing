import React from 'react';
import GeneratedSlogan from './GeneratedSlogan';

const SloganGeneratorSection = () => {
    return (
        <div >
            <h4>Free slogan maker</h4>
            <p>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</p>
            <p>Word for your slogan</p>
            <input type="text" />
            <button>Generate slogans</button>
            <GeneratedSlogan />

        </div>
    );
}

export default SloganGeneratorSection;