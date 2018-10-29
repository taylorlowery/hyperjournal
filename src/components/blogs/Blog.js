import React from 'react'

const Blog = (props) => {
    const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Blog Title</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque natus consequatur sit numquam quis iure, facere, praesentium corporis et corrupti unde tempore exercitationem autem dolores repellendus? Aspernatur aut quaerat nam?</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted By Tater</div>
                <div>Octover 28th, 2018</div>
            </div>
        </div>
    </div>
  )
}

export default Blog
