import React from 'react';
import Header from './Header';
import Questions from './Questions';


class App extends React.Component {
	state= {
		pageHeader: 'Find Your Dog Match'
	};
	componentDidMount() {
	};
	componentWillUnmount() {
	};
	render() {
		return (
			<div className="App">
				<Header message={this.state.pageHeader}/>
				<div>
					<Questions {...this.props.quiz[0]}/>
				</div>
			</div>
		);
	}
};

export default App;