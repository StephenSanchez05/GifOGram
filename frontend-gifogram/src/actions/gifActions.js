export const postGif = (gif) => {
    return(dispatch) => {
        fetch('http://localhost:3001/gifs', {
            "method": 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            credentials: 'include',
            body: JSON.stringify({url: gif.url,
                blog_id: gif.blog_id
            })
            })            
            .then(res => res.json())
            .then(data => {
                    dispatch({type: 'ADD_GIF', gifs: data})
            
            })
        }
}

export const getGifs = () => {
    return(dispatch) => {
        fetch("http://localhost:3001/gifs")
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'GRAB_GIF', gifs: data})
            })
        }
    }


