import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class PersonList extends Component {
	state = {
		personList: [],
		clickValue: 'idAscending' //❓按 select 會先傳這個，怎麼不是 select 裡面的 value
	};

	componentDidMount(){
		axios.get(`https://jsonplaceholder.typicode.com/users`).then( res => {
			this.setState({personList: res.data});
		})
	}

	// 選 clickValue 去 sort something

  handleChange = (event) => { //為什麼用 fat arrow 就可以!
  	this.setState({clickValue: event.target.value})
  }

	render() {
		const { clickValue, personList } = this.state
		let list = [].concat(personList);
		if(clickValue === 'Ascending') {
			list = list.sort((a,b)=>{
				if (a.name > b.name) {
					return 1;
				} else if (a.name < b.name) {
					return -1;
				} else {
					return 0;
				}
			})
		} else if(clickValue === 'Descending') {
			list = list.sort((a,b)=>{
				if (a.name < b.name) {
					return 1;
				} else if (a.name > b.name) {
					return -1;
				} else {
					return 0;
				}
			})
		} else if(clickValue === 'idDescending') {
			list.reverse();
		}

		return (
			<div>
				<div>
	        <form>
	          <label>
	            <span className="padding-x-m">Sort by</span>
	            <select value={clickValue} onChange={this.handleChange}>
	              <option value="idAscending">1 to 10</option>
	              <option value="idDescending">10 to 1</option>
	              <option value="Ascending">A to Z, Ascending</option>
	              <option value="Descending">Z to A, Descending</option>
	            </select>
	          </label>
	        </form>
      	</div>
				<ul className="list-lined padding-x-m">
					{list.map(person =>
						<li key={person.id}>
							<Link to={`/users/${person.id}`}>{person.id}. {person.name}</Link>
						</li>
					)}
				</ul>
			</div>
		);
	}
}
export default PersonList;
