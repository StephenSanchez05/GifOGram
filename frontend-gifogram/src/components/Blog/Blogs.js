import React from 'react'
import GifsContainer from '../../containers/GifsContainer'

        const Blogs = props => {


            const listBlogs = props.blog.map((blog, index) => {
                return <p className="blog" key={index}>{blog.post}<br />
                - Written by {blog.user.username}<br /><br />
                <GifsContainer blogger={blog} />
                </p>
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