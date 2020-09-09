import React from 'react'

        const Blogs = props => {
            console.log(props.blog)
            const listBlogs = props.blog.map((blog, index) => {
               return <li key={index}>{blog.post} - Written by {blog.user.username}</li>;
            });

        return (
            <div>
                <ul>
                    {listBlogs}
                </ul>
            </div>
        )
    }


export default Blogs;