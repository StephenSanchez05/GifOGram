export const postBlog = (blog) => {
    return(dispatch) => {
        console.log(blog.post)
        fetch("http://localhost:3001/blogs", {
            "method": 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            credentials: 'include',
            body: JSON.stringify({post: blog.post,
                user_id: blog.user_id
            })
            })            
            .then(res => res.json())
            .then(data => {
                    dispatch({type: 'ADD_POST', blog: data})
            
            })
        }
}
