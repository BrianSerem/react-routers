
// const Home = () => (
//     <div>

//     </div>
// );

// export default Home

import React, { Component } from 'react'
import {Card, Button } from 'react-bootstrap';

class Home extends Component {
     constructor(props){
         super(props);
         this.state = {
             users : []
         }
     }
     componentDidMount(){
         fetch("https://jsonplaceholder.typicode.com/users")
         .then(res => res.json())
         .then(data => this.setState({
             users : data
         }))
     }
  render() {
      const PostItem = this.state.users.map(user =>
        <div key={user.id}>
        <Card>
          <Card.Header>{user.name}</Card.Header>
            <Card.Body>
              <Card.Title>{user.email}</Card.Title>
              <Card.Text>{user.username}</Card.Text>
              <Button variant="primary">Call {user.phone}</Button>
            </Card.Body>
        </Card>;
      </div>
      )
        
    return (
      <div>
        
        { PostItem }
      </div>
    )
  }
}

export default Home