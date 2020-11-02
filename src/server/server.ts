import * as express from 'express';
import * as path from 'path'
import apiRouter from './routes';
import WakeUpServerJob from './utils/cron_jobs/wakeUpServerJob'

const app = express();

WakeUpServerJob.start();
app.use(express.static('public'));
app.use(apiRouter);
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')))


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
