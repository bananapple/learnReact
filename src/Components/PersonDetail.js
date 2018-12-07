import React, { Component } from 'react';
import axios from 'axios';

export class PersonDetail extends Component {
  state = {
    personFull: {},
  };

  componentDidMount(){
    const { match } = this.props
    axios.get(`https://jsonplaceholder.typicode.com/users/` + match.params.userId).then( res => {
      this.setState({personFull: res.data});
    })
  }
	render() {
    const {personFull} = this.state
		return(
      <div>
  			<div>
          email: {personFull.email}
        </div>
        <div>
          name: {personFull.name}
        </div>
        <div>
          phone: {personFull.phone}
  			</div>
      </div>
		)
	}
}
export default PersonDetail;
