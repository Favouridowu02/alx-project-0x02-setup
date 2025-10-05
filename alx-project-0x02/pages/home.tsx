import React from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>Welcome!</h1>
            <p>This is the home page of our application.</p>

            <Card title="This is just the beginning" content="We are going to church and I am coding" />
            <Card title="I am going to be very great and wealthy" content="God please forgive me of all my sins, I am a sinner" />
        </div>

    )
};

export default Home;
