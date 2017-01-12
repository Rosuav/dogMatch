import React, { Component } from 'react';

const Answers = React.createClass ({
	getInitialState() {
		return {
			selectedOption: 'option1'
		};
	},

	handleOptionChange(changeEvent) {
		this.setState({
			selectedOption: changeEvent.target.value
		});
	},

	handleFormSubmit(formSubmitEvent) {
		formSubmitEvent.preventDefault();

		console.log('You have selected : ', this.state.selectedOption)
		const results = [];
		const selected = this.state.selectedOption;
		results.push(selected);

		// for (let i = 0; i > this.props.quiz.questions.length; i++) {
		// 	console.log("pushing");
		// 	results.push(selected);
		// }
			// option1: this.option1.value,
			// option2: this.option2.value,
			// option3: this.option3.value
		
		console.log(results, "RESULTS");
		
	},

	render() {
		for (let i = 0; i > this.props.quiz.answers.length; i++) {
			console.log(this.props.quiz.answers[i], "DA ANSWERS");
		}

		return (
			<div>
				<form >
					<div className="radio">
						<label>
							<input ref={(input) => this.option1 = input} type="radio" value="option1" 
							checked={this.state.selectedOption === 'option1'} 
							onChange={this.handleOptionChange}/>
							{this.props.quiz.answers[0]}
						</label>
					</div>
					<div className="radio">
						<label>
							<input ref={(input) => this.option2 = input} type="radio" value="option2" 
							checked={this.state.selectedOption === 'option2'} 
							onChange={this.handleOptionChange}/>
							{this.props.quiz.answers[1]}
						</label>
					</div>
					<div className="radio">
						<label>
							<input ref={(input) => this.option3 = input} type="radio" value="option3" 
							checked={this.state.selectedOption === 'option3'} 
							onChange={this.handleOptionChange}/>
							{this.props.quiz.answers[2]}
						</label>
					</div>
				</form>
				
			</div>
		)
	}
})

export default Answers;