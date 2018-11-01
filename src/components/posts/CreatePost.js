import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';

class CreatePost extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e)  => {
        e.preventDefault();        
        this.props.createPost(this.state);
        this.props.history.push('/');
    }
  render() {
    const { auth } = this.props;
    if (!auth.uid){
        return <Redirect to='/signIn' />
    }

    return (
      <div className="container">
          <div className="card">
              <div className="card-content">                  
                  <form onSubmit={this.handleSubmit} className="white">
                    <h5>New Post</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Post</label>
                        <textarea name="content" id="content"  className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Submit Post</button>
                    </div>
                </form>
              </div>
          </div>
          
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
 }
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
