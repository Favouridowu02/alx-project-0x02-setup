import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header>
            <h1>My Application Header</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/home">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/posts">Post</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
