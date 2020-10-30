import * as express from 'express';
import config from './config'

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('Basix');
});



export default router;