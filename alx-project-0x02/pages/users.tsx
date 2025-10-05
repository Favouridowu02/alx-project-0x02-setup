import React from 'react';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';
import Header from '@/components/layout/Header';


const User: React.FC<{users: UserProps[]}> = ({users}) => {
    return (
        <div>
            <Header/>
            <h1>Users</h1>
            <div>
                {
                    users.map(({id, name, username, email, address, phone, website, company}: UserProps, key: number) => (
                        <UserCard key={key} id={id} name={name} username={username} email={email} address={address} phone={phone} website={website} company={company}/>
                    ))
                }
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        users: {
            props: data,
        }
    };
};

export default User;