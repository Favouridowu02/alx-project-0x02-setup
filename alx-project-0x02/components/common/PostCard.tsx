import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
    return (
        <div className="post-card">
            <h2>{title}</h2>
            <p>{content}</p>
            <p><strong>User ID:</strong> {userId}</p>
        </div>
    );
}


x