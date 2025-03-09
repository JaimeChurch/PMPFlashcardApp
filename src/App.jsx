import Button from '@mui/material/Button';
import './App.css';
import Flashcard from './Flashcard';
import InstructionCard from './InstructionCard';
import { useState, useEffect } from 'react';
import HighScore from './HighScore';

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [initials, setInitials] = useState({ letter1: '', letter2: '', letter3: '' });
  const [highScores, setHighScores] = useState([]);
  const [showHighScores, setShowHighScores] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isScoreSaved, setIsScoreSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const fetchQuestions = () => {
    setLoading(true);
    fetch(`https://s3.us-east-1.amazonaws.com/pmp.questions/Questions.json`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          const shuffledQuestions = data.sort(() => 0.5 - Math.random());
          setFlashcards(shuffledQuestions.slice(0, 20));
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching questions:', error))
      .finally(() => setLoading(false));
  };

  const fetchHighScores = () => {
    setLoading(true);
    fetch(`https://s3.us-east-1.amazonaws.com/pmp.questions/HighScores.json?timestamp=${new Date().getTime()}`)
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            throw new Error(`Server returned ${response.status}: ${response.statusText} - ${text}`);
          });
        }
        return response.json();
      })
      .then(data => {
        setHighScores(data);
      })
      .catch(error => {
        console.error('Error fetching high scores:', error);
        setHighScores([]);
      })
      .finally(() => setLoading(false));
  };

  const handleToggleHighScores = () => {
    if (!showHighScores) {
      fetchHighScores();
      setShowHighScores(true);
    } else {
      setShowHighScores(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isQuizStarted) {
        event.preventDefault();
        event.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isQuizStarted]);

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
    fetchQuestions();
    setIsQuizStarted(true);
  }

  const handleResetQuiz = (event) => {
    if (isQuizStarted) {
      const confirmReset = window.confirm("All progress will be lost if you return to the home screen. Are you sure you want to continue?");
      if (!confirmReset) {
        event.preventDefault();
        return;
      }
    }
    setIsQuizStarted(false);
    setCurrentIndex(0);
    setIsFlipped(false);
    setSelectedChoice(null);
    setIsCorrect(null);
    setCorrectAnswers(0);
    setShowHighScores(false);
    setIsScoreSaved(false);
    fetchQuestions();
  }

  const handleRestartQuiz = () => {
    setIsQuizStarted(false);
    setCurrentIndex(0);
    setIsFlipped(false);
    setSelectedChoice(null);
    setIsCorrect(null);
    setCorrectAnswers(0);
    setIsScoreSaved(false);
    setShowHighScores(false);
    fetchQuestions();
  }

  return (
    <>
      <a href="#" onClick={handleResetQuiz} className='title-link'><h1 className='title'>FlashCard.pro</h1></a>
      {!isQuizStarted ? (
        <div className='home'>
          {showHighScores ? (
            loading ? (
              <Flashcard
                flashcard={{ question: "Loading...", choices: [] }}
                isFlipped={false}
                selectedChoice={null}
                isCorrect={null}
                handleChoiceClick={() => { }}
                currentIndex={currentIndex}
                hideIndex={true}
              />
            ) : (
              <HighScore
                highScores={highScores}
                initials={initials}
                setInitials={setInitials}
                correctAnswers={correctAnswers}
                setIsScoreSaved={setIsScoreSaved}
                setIsSaving={setIsSaving}
                setHighScores={setHighScores}
                showHighScores={showHighScores}
                setShowHighScores={setShowHighScores}
              />
            )
          ) : (
            <InstructionCard style={{ marginBottom: '20px' }} />
          )}
          <div className="button-container">
            {!showHighScores && (
              <Button variant="contained" onClick={handleStartQuiz}>Start Quiz</Button>
            )}
            <Button variant="contained" onClick={handleToggleHighScores}>
              {showHighScores ? 'Back to Instructions' : 'High Scores'}
            </Button>
          </div>
        </div>
      ) : (
        <>
          {loading ? (
            <Flashcard
              flashcard={{ question: "Loading...", choices: [] }}
              isFlipped={false}
              selectedChoice={null}
              isCorrect={null}
              handleChoiceClick={() => { }}
              currentIndex={currentIndex}
              hideIndex={true}
            />
          ) : (
            <>
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
                    <Button onClick={handleNextOrFlip} variant='contained'>{isFlipped ? 'Next' : 'Flip'}</Button>
                  </div>
                </>
              ) : (
                <div className='score'>
                  <h2>Quiz Completed!</h2>
                  <h4>Correct Answers: {correctAnswers}</h4>
                  <h4>Total Score: {Math.round((correctAnswers / 20) * 100)}%</h4>
                  {isSaving ? (
                    <h3>Saving score...</h3>
                  ) : isScoreSaved ? (
                    <h3>High Score has been saved</h3>
                  ) : (
                    <>
                      <HighScore
                        highScores={highScores}
                        initials={initials}
                        setInitials={setInitials}
                        correctAnswers={correctAnswers}
                        setIsScoreSaved={setIsScoreSaved}
                        setIsSaving={setIsSaving}
                        setHighScores={setHighScores}
                        showHighScores={showHighScores}
                        setShowHighScores={setShowHighScores}
                      />
                    </>
                  )}
                  <Button variant="contained" onClick={handleRestartQuiz}>Return Home</Button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;