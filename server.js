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

app.get('/', (req, res) => {
	res.render('index', {
		content: 'Hello Express and EJS'
	});
});

app.use('/api', apiRouter);
app.use(express.static('public'));

app.listen(config.port, () => {
	console.info('Express listening on port ', config.port);
});
