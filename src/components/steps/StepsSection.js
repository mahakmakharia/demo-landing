import React from 'react';
import StepCard from './StepCard';

const StepsSection = () => {
    const steps = [
        {
            src: "/assets/icons/3.svg",
            name: "Search",
            description: "Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen."
        },
        {
            src: "/assets/icons/1.svg",
            name: "Select",
            description: "Choose from thousands of options generated by the slogan maker that fit your needs."
        },
        {
            src: "/assets/icons/2.svg",
            name: "Stand out",
            description: "Congrats on your new slogan. It's time to win the world!"
        }
    ]
    return (
        <div >
            {steps.map(step => {
                return (
                    <StepCard key={step.name} name={step.name} src={step.src} description={step.description} />
                )
            })}

        </div>
    );
}

export default StepsSection;