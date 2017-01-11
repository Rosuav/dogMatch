import config, { nodeEnv } from './config';
import apiRouter from './api/index';
import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const app = express();

app.use(sassMiddleware({
	src: path.join(__dirname, 'sass'),
	dest: path.join(__dirname, 'public')
}));

app.set('view engine', 'ejs');


import serverRender from './serverRender';

app.get('/', (req, res) => {
	serverRender()
		.then(({ initialMarkup, initialData }) => {
			res.render('index', {
				initialMarkup,
				initialData
			});
		})
		.catch(console.error)
});

app.use('/api', apiRouter);
app.use(express.static('public'));

app.listen(config.port, config.host, () => {
	console.info('Express listening on port ', config.port);
});