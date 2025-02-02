import Button from '@mui/material/Button';
import './App.css'
import Flashcard from './Flashcard'
import { useState, useEffect } from 'react'
import Questions from './Questions'


function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [selectedChoice, setSelectedChoice] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)
  const [isQuizStarted, setIsQuizStarted] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    const shuffledQuestions = [...Questions].sort(() => 0.5 - Math.random());
    setFlashcards(shuffledQuestions.slice(0, 20));
  }, []);

  const handleNextOrFlip = () => {
    if (isFlipped) {
      if (currentIndex + 1 < flashcards.length) {
        setCurrentIndex((prevIndex) => prevIndex + 1)
      } else {
        setCurrentIndex(flashcards.length);
      }
      setIsFlipped(false)
      setSelectedChoice(null)
      setIsCorrect(null)
    } else {
      const currentFlashcard = flashcards[currentIndex];
      const isAnswerCorrect = selectedChoice === currentFlashcard.answer;
      setIsCorrect(isAnswerCorrect);
      if (isAnswerCorrect) {
        setCorrectAnswers(prev => prev + 1);
      }
      setIsFlipped(true)
    }
  }

  const handleChoiceClick = (choiceId) => {
    setSelectedChoice(choiceId)
  }

  const handleStartQuiz = () => {
    setIsQuizStarted(true)
  }

  return (
    <>
      {!isQuizStarted ? (
        <div className='home'>
          <h1 className='title'>FlashCard.pro</h1>
          <Button variant="contained" onClick={handleStartQuiz}>Start Quiz</Button>
        </div>
      ) : (
        <>
          <h1 className='title'>FlashCard.pro</h1>
          {currentIndex < flashcards.length ? (
            <>
              <Flashcard
                flashcard={flashcards[currentIndex]}
                isFlipped={isFlipped}
                selectedChoice={selectedChoice}
                isCorrect={isCorrect}
                handleChoiceClick={handleChoiceClick}
                currentIndex={currentIndex}
              />
              <div className='navigation'>
                <Button onClick={handleNextOrFlip} variant='contained'>{isFlipped ? 'Next' : 'Flip'}</Button> {/* Changed to combine flip and next functionality */}
              </div>
            </>
          ) : (
            <div className='score'>
              <h2>Quiz Completed!</h2>
              <p>Correct Answers: {correctAnswers} out of 20</p>
              <p>Total Score: {((correctAnswers / 20) * 100)}%</p>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App