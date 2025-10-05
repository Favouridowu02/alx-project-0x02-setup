import {UserProps} from '@/interfaces';
import React from 'react';


const UserCard: React.FC<UserProps> = ({id, name, username, email, address, phone, website, company}) => {
    return (
        <div>
            <div>
                <h2>
                    {name} {username}
                </h2>
                <p>Email: {email}</p>
                <p>UserId: {id}</p>
            </div>
            <address>
                <span>Street: {address.street}</span>
                <span>Suite: {address.suite}</span>
                <span>City: {address.city}</span>
                <span>zipcode: {address.zipcode}</span>
                <span>Geo: Lat {address.geo.lat} and Lng {address.geo.lng}</span>
            </address>
        </div>


    );
};

export default UserCard;