import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './flashcard.css';
import './App.css';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const awsAccessKey = import.meta.env.VITE_AWS_ACCESS_KEY;
const awsSecretKey = import.meta.env.VITE_AWS_SECRET_KEY;

const s3Client = new S3Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: awsAccessKey,
    secretAccessKey: awsSecretKey
  }
});

function HighScore({ highScores, initials, setInitials, correctAnswers, setIsScoreSaved, setIsSaving, setHighScores, showHighScores, setShowHighScores }) {

  const sortedHighScores = [...highScores].sort((a, b) => b.score - a.score);

  const handleInitialsChange = (event) => {
    const { name, value } = event.target;
    setInitials(prevState => ({
      ...prevState,
      [name]: value.toUpperCase()
    }));
  };

  const handleSaveScore = async () => {
    setIsSaving(true);
    const initialsString = `${initials.letter1}.${initials.letter2}.${initials.letter3}.`;
    const percentageScore = Math.round((correctAnswers / 20) * 100);
    const newScore = { initials: initialsString, score: percentageScore };

    const sortedCurrentScores = [...highScores].sort((a, b) => b.score - a.score);

    let updatedScores;

    if (sortedCurrentScores.length < 10) {
      updatedScores = [...sortedCurrentScores, newScore].sort((a, b) => b.score - a.score);
    } else if (percentageScore > sortedCurrentScores[9].score) {
      updatedScores = [...sortedCurrentScores.slice(0, 9), newScore].sort((a, b) => b.score - a.score);
    } else {
      updatedScores = sortedCurrentScores;
    }

    const params = {
      Bucket: 'pmp.questions',
      Key: 'HighScores.json',
      Body: JSON.stringify(updatedScores),
      ContentType: 'application/json'
    };

    try {
      const command = new PutObjectCommand(params);
      const response = await s3Client.send(command);
      setIsScoreSaved(true);
      setHighScores(updatedScores);
    } catch (err) {
      console.error('Error saving high score:', err);
      alert('Failed to save high score. Please try again.');
    } finally {
      setIsSaving(false);
    }
    setInitials({ letter1: '', letter2: '', letter3: '' });
  };

  return (
    <div className='flashcard_container'>
      {showHighScores ? (
        <Card className='flashcard' variant="outlined">
          <CardContent className='flashcard_content'>
            <div className='content'>
              <h3 className='highScoreH3'>High Scores</h3>
              <ol>
                {sortedHighScores.map((score, index) => (
                  <li className='highScore' key={index} > {score.initials} - {score.score}%</li>
                ))}
              </ol>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className='content'>
          <h3>Enter Your Initials</h3>
          <div className='initials-input'>
            <input
              type="text"
              name="letter1"
              value={initials.letter1}
              onChange={handleInitialsChange}
              placeholder="A"
              maxLength="1"
              style={{ width: '2em', textAlign: 'center', textTransform: 'uppercase' }}
              className='initial'
            />
            <input
              type="text"
              name="letter2"
              value={initials.letter2}
              onChange={handleInitialsChange}
              placeholder="B"
              maxLength="1"
              style={{ width: '2em', textAlign: 'center', textTransform: 'uppercase' }}
              className='initial'
            />
            <input
              type="text"
              name="letter3"
              value={initials.letter3}
              onChange={handleInitialsChange}
              placeholder="C"
              maxLength="1"
              style={{ width: '2em', textAlign: 'center', textTransform: 'uppercase' }}
              className='initial'
            />
            <Button variant="contained" onClick={handleSaveScore} style={{ marginBottom: '.7em', marginLeft: '10px' }}>Save Score</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HighScore;