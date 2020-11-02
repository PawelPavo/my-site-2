import * as express from 'express';
const fetch = require('node-fetch');
const url = "https://secret-ravine-28184.herokuapp.com/api/hello"
var CronJob = require('cron').CronJob;
const WakeUpServerJob = new CronJob('*/14 * * * *', async () => {
        try {
                const res = await fetch(url)
                const data = await res.json()  
                console.log('Message from the server: ' + data)
        } catch (error) {
                console.log('Ping Fail' + error)
        }
}, null, true, 'America/New_York');

export default WakeUpServerJob