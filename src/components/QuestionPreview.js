import React from 'react';
import Answers from './Answers';

const QuestionPreview = (quiz) => (
	<div className="QuestionPreview">
		<div className="questions">
			{quiz.questions}
		</div>
		<div className="answers">
			<Answers quiz={quiz} />
		</div>
	</div>
);

export default QuestionPreview;