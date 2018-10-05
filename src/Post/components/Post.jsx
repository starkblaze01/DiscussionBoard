import React from 'react';
import './styles/Post.css';

const Post = (props) => {
    return(  
      <div className="card post-body">
      	<div className="card-body">
    		{props.postBody}
      	</div>
      </div>
    ) 	
};

export default Post;