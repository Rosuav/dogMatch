//fetch data from the api
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';
import axios from 'axios';
import config from './config'


const serverRender = () =>
	axios.get(`${config.serverUrl}/api/quiz`)
		.then(res => {
			return {
				initialMarkup: ReactDOMServer.renderToString(
					<App initialQuiz={res.data.quiz} />
				),
				initalData: res.data
			}
		});

export default serverRender;