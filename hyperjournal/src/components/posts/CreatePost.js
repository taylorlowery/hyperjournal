import React, { Component } from 'react'

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
        console.log(this.state)
    }
  render() {
    return (
      <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
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
    )
  }
}

export default CreatePost
