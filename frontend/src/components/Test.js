import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      message: null
    }
  }

  componentDidMount() {
    const testUrl = 'http://localhost:8000/api/test';
    fetch(testUrl)
      .then( (data) => {
        return data.json();
      })
      .then((message) => {
        this.setState({
          message: message['message']
        })
      })
  }

  render() {
    return (
      <div>
        { 
          this.state.message 
          ? <p style={{textAlign: "center"}}>
              {this.state.message}
            </p>

          : <p>Waiting on response from server.</p>
        }
          <Spinner animation="grow" variant="success" />

      </div>
    )
  }
}