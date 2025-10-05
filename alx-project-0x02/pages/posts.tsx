import React from 'react';
import Header from '@/components/layout/Header'
import { PostProps } from '@/interfaces';

const Post: React.FC<{posts: PostProps[]}> = ({posts}) => {
    return (
        <div>
            <Header />
            <h1>Post Page</h1>
            <p>This is the post page of our application.</p>
            <div>
                { posts.map(({title, content, userId}: PostProps, key: number) => (
                    <div key={key} className="border p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">{title}</h2>
                        <p>{content}</p>
                        <p className="text-sm text-gray-500">User ID: {userId}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: PostProps[] = await response.json();
    
    return {
        props: {
            posts: data,
        },
    };
}

export default Post;