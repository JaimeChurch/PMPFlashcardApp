import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import './flashcard.css'

function Flashcard({ flashcard, isFlipped, selectedChoice, isCorrect, handleChoiceClick, currentIndex }) {

    return (
        <div className='flashcard_container'>
            <Card className='flashcard' variant="outlined">
                <CardContent className='flashcard_content'>
                    <div className='content'>
                        {isFlipped ? (
                            <>
                                <div className={isCorrect ? 'correct' : 'incorrect'}>
                                    {isCorrect ? 'Correct!' : 'Incorrect!'}
                                </div>
                                The correct answer is:
                                <p>
                                    {flashcard.choices.find(choice => choice.id === flashcard.answer).text}
                                </p>
                            </>
                        ) : (
                            <>
                                <div className='questionIndex'>Question {currentIndex + 1} of 20</div>
                                <div>{flashcard.question}</div>
                            </>

                        )}
                    </div>
                    {!isFlipped && (
                        <ul>
                            {flashcard.choices.map((choice) => (
                                <li key={choice.id}>
                                    <button
                                        onClick={() => handleChoiceClick(choice.id)}
                                        className={selectedChoice === choice.id ? 'selected' : ''}
                                    >
                                        {choice.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default Flashcard