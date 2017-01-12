import React, { Component } from 'react';

const Answers = React.createClass ({
	getInitialState() {
		return {
			selectedOption: 'option1'
		};
	},

	handleOptionChange(changeEvent) {
		this.setState({
			selectedOption: 'changeEvent.target.value'
		});
	},

	handleFormSubmit(formSubmitEvent) {
		formSubmitEvent.preventDefault();

		console.log('You have selected : ', this.state.selectedOption)
		const results = {
			question1: this.question1.value,
			question2: this.question2.value,
			question3: this.question3.value
		}
		console.log(results);
	},

	render() {
		console.log(this.props, "DA PROPS"); 
		for (var i = 0; i > this.props.quiz.answers.length; i++) {
			console.log(this.props.quiz.answers[i], "DA ANSWERS");
		// 	results.push([this.props.quiz.answers[i])
		}

		return (
			<form>
				<div className="radio">
					<label>
						<input ref={(input) => this.question1 = input} type="radio" value="option1" 
						checked={this.state.selectedOption === 'option1'} 
						onChange={this.handleOptionChange}/>
						{this.props.quiz.answers[0]}
					</label>
				</div>
				<div className="radio">
					<label>
						<input ref={(input) => this.question1 = input} type="radio" value="option2" 
						checked={this.state.selectedOption === 'option2'} 
						onChange={this.handleOptionChange}/>
						{this.props.quiz.answers[1]}
					</label>
				</div>
				<div className="radio">
					<label>
						<input ref={(input) => this.question1 = input} type="radio" value="option3" 
						checked={this.state.selectedOption === 'option3'} 
						onChange={this.handleOptionChange}/>
						{this.props.quiz.answers[2]}
					</label>
				</div>
				
			</form>
		)
	}
})

export default Answers;