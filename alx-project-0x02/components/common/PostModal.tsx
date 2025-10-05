import React from "react";


const PostModal: React.FC= () => {
    return (
        <form action="">
            <label htmlFor="title">Title</label>
            <input type="text"  id="title" name="title" placeholder="Enter your title"/>
            <label htmlFor="content">Content</label>
            <textarea  id="content" name="content" placeholder="Enter your content"></textarea>
        </form>
    )
}

export default PostModal;
