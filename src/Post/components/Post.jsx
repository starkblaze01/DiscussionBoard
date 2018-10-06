import React from 'react';
import './styles/Post.css';

const Post = (props) => {
    return(  
      <div className="card post-body">
      	<div className="card-body">
    		{props.postBody.map(( postPart, idx ) => (
    			<div>{postPart}</div>
    		))
    		}
      	</div>
      </div>
    ) 	
};

export default Post;