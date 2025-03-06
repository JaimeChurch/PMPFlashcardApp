import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './flashcard.css';
import './App.css';

function InstructionCard() {
    return (
        <div className='flashcard_container'>
            <Card className='flashcard' variant="outlined">
                <CardContent className='flashcard_content'>
                    <div className='content'>
                        <h3>Welcome to FlashCard.pro</h3>
                        <h4>The PMP exam prep app.</h4>
                        <p>
                            This quiz consists of 20 questions selected randomly from a 200 question bank designed to help
                            you prepare for the PMP exam. Each question has 4 multiple choice answers and feedback
                            will be given after each question. A final score will be given upon completion.
                        </p>
                        <p> Can you get the high score? </p>
                        <p>Good luck!</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default InstructionCard;