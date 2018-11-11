import React, { Component } from 'react';
import './App.css';

import StartScreen from '../components/StartScreen/Start';
import PlayScreen from '../components/PlayScreen/Play';

class App extends Component {

	constructor(props) {
		
		super(props);
        
		this.state = {
			isStartClicked : false
		}
	
        this.clickStart = this.clickStart.bind(this);
        
	}

	clickStart = () => {
		this.setState({
			isStartClicked : true
		});
	}
	
	render() {

		let data;

		if(this.state.isStartClicked) {
			data = <PlayScreen />;

		} else {
			data = <StartScreen clicked={this.clickStart}/>;
		}

		return (
			<div className="App">
				{data}
			</div>
		);
  	}
}

export default App;
