import React from 'react';
import QuestionPreview from './QuestionPreview';


const QuizList = ( {quiz} ) => {
	<div className="QuizList">
		{quiz.map(quiz => 
			<QuestionPreview key={quiz.id} {...quiz} />
		)}
	</div>
}

QuizList.propTypes = {
	quiz: React.PropTypes.array
}

export default QuizList;