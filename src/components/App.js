
import React from 'react';
import Header from './Header';
import QuestionPreview from './QuestionPreview';


class App extends React.Component {
	state= {
		pageHeader: 'Find Your Dog Match',
		quiz: this.props.initialQuiz
	};
	componentDidMount() {
		

		
	};
	componentWillUnmount() {
	};
	render() {
		return (
			<div className="App">
				<Header message={this.state.pageHeader} />
				<div>
					{this.state.quiz.map(quiz => 
						<QuestionPreview key={quiz.id} {...quiz} />
					)}
				</div>
			</div>
		);
	}
};

export default App;

