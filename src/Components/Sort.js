import React, { Component } from 'react';

export class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'By ID'};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form>
          <label>
            <div className="padding-right">Sort by</div>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="id">By ID</option>
              <option value="Ascending">A to Z, Ascending</option>
              <option value="Descending">Z to A, Descending</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
export default Sort;
