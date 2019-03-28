import React, { Component } from 'react'
import {Button}  from 'reactstrap'
import Header from './Header'
import FormComponent from './Form'
import { Card}  from 'react-bootstrap'

class PostsComponent extends Component {
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => this.setState(
          {
            posts:data
          }
        ));

    }
    constructor(props){
        super(props);
        this.state = {
            posts : [],
            first : "brian"
        }
    }
  render() {
      const PostItems = this.state.posts.map(post =>
          <div key={post.id}>
          <Card>
  <Card.Header>{post.id}</Card.Header>
  <Card.Body>
    <Card.Title>{post.title}</Card.Title>
    <Card.Text>
      {post.body}
    </Card.Text>
  </Card.Body>
</Card>
<br/>
          </div>
      );
    return (
      <div>
        <Header/>
        <br/>
        {PostItems}
      </div>
    )
  }
}


export default PostsComponent