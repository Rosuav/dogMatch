import React from 'react';
import Header from './Header';
import Answers from './Answers';


class App extends React.Component {
	state= {
		pageHeader: 'Find Your Dog Match',
		quiz: this.props.initialQuiz
	}

	render() {
		return (
			<div className="App">
				<Header message={this.state.pageHeader} />
				<div>
					{this.state.quiz.map(quiz => 
						{quiz.questions}
					)}
				</div>
				
				<button className="btn btn-default" type="submit">Results</button>
			</div>
		);
	}
};


export default App;


// <div className="answers">
// 					{/*<Answers quiz={quiz} />*/}

// 				</div>