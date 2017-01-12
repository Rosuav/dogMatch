import React, { Component } from 'react';
import Answers from './Answers';


class QuestionPreview extends React.Component {
	constructor(props) {
		super(props);
		this.handleFormSubmit.bind(this)
	}

	handleFormSubmit(formSubmitEvent) {
		formSubmitEvent.preventDefault();

		console.log('You have selected : ', this.state.selectedOption)
		const results = {
			option1: this.question1.value,
			option2: this.question2.value,
			option3: this.question3.value
		}
		console.log(results);
		console.log(this.props.quiz.questions, "QIZZ")
	}
	

	render() {
		return (
			<div className="QuestionPreview">
				<div className="questions">
				{quiz.questions}
				</div>
				<form className="answers" onSubmit={this.handleFormSubmit}>
					<Answers quiz={this.props.quiz} />
					<button className="btn btn-default" type="submit">Results</button>
				</form>
			</div>
		)
	}
}



export default QuestionPreview;