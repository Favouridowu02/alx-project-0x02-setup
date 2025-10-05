import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const About: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>About Us</h1>
            <p>This is the about page of our application.</p>

            <Button size="medium" shape="rounded-md">Click Me</Button>
            <Button size="medium" shape="rounded-md">Click Me</Button>
        </div>
    );
};

export default About;