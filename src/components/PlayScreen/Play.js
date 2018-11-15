import React, { Component } from 'react';
import './Play.css';

import EndScreen from '../EndScreen/End';

class Play extends Component {

    constructor(props) {
        
        super(props);
        
		this.state = {
			numberSeries : [
                [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99],
                [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38, 39, 42, 43, 46, 47, 50, 51, 54, 55, 58, 59, 62, 63, 66, 67, 70, 71, 74, 75, 78, 79, 82, 83, 86, 87, 90, 91, 94, 95, 98, 99],
                [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55, 60, 61, 62, 63, 68, 69, 70, 71, 76, 77, 78, 79, 84, 85, 86, 87, 92, 93, 94, 95, 100],
                [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63, 72, 73, 74, 75, 76, 77, 78, 79, 88, 89, 90, 91, 92, 93, 94, 95],
                [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95],
                [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 96, 97, 98, 99, 100],
                [64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
            ],
            index : 0,
            isEnd : false,
            number : 0
		}
	
        this.changeIndex = this.changeIndex.bind(this);
        
    }

    changeIndex = (e) => {

        if(e.target.value === 'yes') {
            this.setState({
                number : this.state.number + this.state.numberSeries[this.state.index][0]
            })
        }

        let newIndex = this.state.index + 1;
        if(newIndex <= 6) {
            this.setState({
                index : newIndex
            });
        } else {
            this.setState({
                isEnd : true
            });
        }
        
    }

    showNumbers = () => {
        let elements = [];
        let counter = 1;
        this.state.numberSeries[this.state.index].map((number) => {
            if(counter % 11 === 0) {
                elements.push(<br key={(number*1000).toString()}/>);
                counter = 1;
            }

            elements.push(<p key={number.toString()} className="number">{number}</p>);
            counter++;
            return elements;
        });

        return (
            <section className="number-series">

                <h1>Is your number in the next series of numbers?</h1>
                
                <article>{elements}</article>

                <button onClick={this.changeIndex} className="btn btn-no" value="no">NO</button>
                <button onClick={this.changeIndex} className="btn btn-yes" value="yes">YES</button>
                
            </section>
        );
    }

    playAgain = () => {
        this.setState({
            index : 0,
            isEnd : false,
            number : 0
        });
    }


	render() {

        let data;

        if(this.state.isEnd) {
            data = <EndScreen number={this.state.number} playAgain={this.playAgain}/>;
        } else {
            data = <this.showNumbers />;
        }

		return (
            
            <div>{data}</div>
			
		);
  	}
}

export default Play;