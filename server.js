//NOTE: ES6 'import' statements cannot be used in the server - just use ES5
//syntax instead ('require'). Other ES6 features should all be available.
const express = require('express');

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;
const sassMiddleware = require('node-sass-middleware');

const app = express();
app.use(express.static("build"));
app.use(sassMiddleware({
        src: './client',
        dest: './build',
}));

const testData = require('./testData');
app.get('/quiz', (req, res) => {
	res.send({ quiz: testData.quiz })
});

function run_server() {
	app.listen(PORT, HOST, err => {
		if (err) return console.error(err);
		console.log(`Listening on port ${PORT}`);
	});
}

if (require.main === module) run_server();
