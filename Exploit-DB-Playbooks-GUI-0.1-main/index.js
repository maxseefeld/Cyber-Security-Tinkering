const express = require('express');
const axios = require('axios');
const cron = require('cron');

const app = express();

// Clone Exploit DB every hour
const job = new cron.CronJob('0 0 * * * *', () => {
  axios.get('https://github.com/offensive-security/exploitdb/archive/master.zip')
    .then(res => console.log('Exploit DB cloned successfully'))
    .catch(error => console.log('Error cloning Exploit DB:', error));
});
job.start();

// Serve exploit data
app.get('/exploits', (req, res) => {
  // TODO: Parse exploit data from files in exploitdb-master/exploits/
});

app.get('/exploits/:id', (req, res) => {
  const id = req.params.id;
  // TODO: Find exploit with given ID and send back details
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
