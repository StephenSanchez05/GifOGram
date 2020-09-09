import React from 'react'

        const Blogs = props => {
            const listBlogs = props.blog.map((blog, index) => {
               return <p key={index}>{blog.post}<br />- Written by {blog.user.username}</p>;
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