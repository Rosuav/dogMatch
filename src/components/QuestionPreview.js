import React from 'react';

const QuestionPreview = (quiz) => (
	<div className="QuestionPreview">
		<div className="questions">
			{quiz.questions}
		</div>
		<div className="answers">
			{quiz.answers}
		</div>
	</div>
);

export default QuestionPreview;