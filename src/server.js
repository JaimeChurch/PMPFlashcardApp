const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname)));

app.get('/highscores', (req, res) => {
  const filePath = path.join(__dirname, 'highscores.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify([]));
      } else {
        console.error('Error reading highscores.json:', err);
        res.status(500).send('Internal Server Error');
      }
      return;
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.post('/highscores', (req, res) => {
  const newScore = req.body;
  const filePath = path.join(__dirname, 'highscores.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    let highScores = [];
    if (err) {
      if (err.code === 'ENOENT') {
        highScores = [];
      } else {
        console.error('Error reading highscores.json:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
    } else {
      highScores = JSON.parse(data);
    }
    highScores.push(newScore);
    highScores.sort((a, b) => b.score - a.score);
    if (highScores.length > 10) {
      highScores = highScores.slice(0, 10);
    }
    fs.writeFile(filePath, JSON.stringify(highScores, null, 2), (err) => {
      if (err) {
        console.error('Error writing to highscores.json:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.status(200).send('High score saved successfully');
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});