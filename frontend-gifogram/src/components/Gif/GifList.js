import React from 'react';

const GifList = props => {
    return (
        <div>
            {props.gifs.map(gif => {             
                if(gif.blog.id === props.blogid) {
               return <img class="animated-gif" key={gif.url} src={gif.url} alt="gif"/>}
            })}
        </div>
      )
}

export default GifList;