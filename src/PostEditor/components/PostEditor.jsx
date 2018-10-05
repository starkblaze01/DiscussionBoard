import React, { Component } from 'react';
import './styles/PostEditor.css';

class PostEditor extends Component {
	constructor(props){
		super(props);

		this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
		this.createPost = this.createPost.bind(this);
		this.state = {
			newPostBody: '',
		};
	}

	createPost() {
		this.props.addPost(this.state.newPostBody);
		this.setState({
			newPostBody: '',
		})
	}
	
	handlePostEditorInputChange(ev) {
		this.setState({
			newPostBody: ev.target.value
		});
	}


	render() {
		return(
      		<div className="card panel-default post-editor">
      			<div className="card-body">
   					<textarea className="form-control post-editor-input" value={this.state.newPostBody} onChange={this.handlePostEditorInputChange}/>
   					<button className="btn btn-success post-editor-button" onClick={this.createPost}>Post</button>
      			</div>      		
      		</div>
		)
	}

}

export default PostEditor;