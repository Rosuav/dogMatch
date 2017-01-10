import React from 'react';

const QuestionPreview = (quiz) => (
	<div className="QuestionPreview">
		<div>
			{quiz.questions}
		</div>
		<div>
			{quiz.options}
		</div>
	</div>
);

export default QuestionPreview;