import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './flashcard.css';

function Flashcard({ flashcard, isFlipped, selectedChoice, isCorrect, handleChoiceClick, currentIndex, hideIndex = false }) {

    const answer = flashcard?.choices?.find(choice => choice.id === flashcard?.answer);

    return (
        <div className='flashcard_container'>
            <Card className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
                <CardContent className='flashcard_content'>
                    {!isFlipped ? (
                        <div className='content'>
                            {!hideIndex && currentIndex !== undefined && flashcard?.choices && flashcard.choices.length > 0 && (
                                <div className='questionIndex'>Question {currentIndex + 1} of 20</div>
                            )}
                            <div className="question-text">{flashcard?.question}</div>
                            <ul>
                                {flashcard?.choices?.map((choice) => (
                                    <li key={choice.id}>
                                        <button
                                            onClick={() => handleChoiceClick(choice.id)}
                                            className={`choice-button ${selectedChoice === choice.id ? 'selected' : ''}`}
                                        >
                                            <span className='choice-text'>{choice.text}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className='content'>
                            <div className={isCorrect ? 'correct' : 'incorrect'}>
                                {isCorrect ? 'Correct!' : 'Incorrect!'}
                            </div>
                            <div className='correct_answer'>
                                The correct answer is:
                            </div>
                            <p>
                                {answer ? `${answer.id.toUpperCase()}. ${answer.text}` : 'Answer not found'}
                            </p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

export default Flashcard;