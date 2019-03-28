import React, { Component } from 'react'
import {Card, Button } from 'react-bootstrap';

class Articles extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => this.setState({
            posts : data
        }))
    }
  render() {
    const PostItem = this.state.posts.map(post =>
        <div key={post.id}>
        <Card>
          <Card.Header>{post.id}</Card.Header>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </div>
    )
    return (
      <div>
        { PostItem }
      </div>
    )
  }
}

export default Articles
