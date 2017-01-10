import express from 'express';
import data from '../src/testData';

const router = express.Router();

router.get('/quiz', (req, res) => {
	res.send({ quiz: data.quiz })
});

export default router;