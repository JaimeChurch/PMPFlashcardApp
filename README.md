To Do:
  [X] Title screen
  [X] Add instructions/intro to start screen  
  [X] Home button
  [X] Add warning "progress will be lost when returning home"
  [X] Add question indexes
  [X] Add answer indexes
  [X] Randomize questions
  [X] Move Questions to cloud server
  [X] Add note card styling
  [X] Make answers clickable
  [X] Give user feedback after each question
  [X] Update answer checking to check index
  [X] Keep score
  [X] Make each quiz 20 questions
  [X] Give user score after quiz
  [X] Add high score table
  [X] Make cards flippable
  [X] Make github repo
  [X] Add gap under correct/incorrect
  [X] Line up li labels and answers
  [X] Only allow initials to be entered once after quiz complete
  [X] Limit # of High Scores to 10.
  [X] Remove warning for progress loss if the quiz is finished
  [/] Import questions 
  [/] Refactor App.jsx
  [ ] Publish app
  [ ] Nav bar?
  [ ] Sort questions into topics
  [ ] Add explaination for correct answers 
  [ ] Remove lines at card top
  [ ] Flip animation
  [ ] Next flashcard animation
  [ ] Align text and lines
  [ ] Static IP Address for server
  [ ] Mobile conversion via electronjs
  [ ] On initial entry, automatically move to next input box after each letter
  [ ] User login and authentification
 
  
Week 02
  - Created new react app.
  - Added Flashcard.jsx and Flashcard.css. 
  - Added styling and placeholders for questions/answers.  

Week 03
  - Moved questions to array in separate file. 
  - Added previous, next, and flip buttons. 
  - Flip displays answer. 

Week 04
  - Made choices selectable
  - When flipped, the card shows Correct or Incorrect based on the correct answer. 
  - Moving to the next or previous card deselects all choices. 
  - Added start screen.
  - Added lines to flashcard styling. 
  - Added 100 questions from PMP Prep Exam

Week 05 
  - Added answer indexes. 
  - Added question randomization. 
  - Limited quiz length to 20 questions. 
  - Added question number to each flashcard. 
  - Added scorekeeping. 
  - Removed Next/Prev button. Flip button now changes to Next. 

Week 06
  - Fixed line height styling mismatch.
  - Added instruction card to home page. 
  - Added warning when returning to home or refreshing page. 
  - Added restart quiz button to Quiz Completed page. 

Week 07
  - Moved question back to AWS server.
  - Added high score page, button, and entry form. 
  - Moved high score file to AWS server. 
  - Added "loading..." display while questions are loading. 

Week 08
  - Added "Score has been saved message" and removed initial input boxes after score is saved. 
  - Added temporary "Saving score" message that appears while score is being saved. 
  - Removed 'start quiz' button from High Scores page. 
  - Removed loss-of-progress warning if quiz is complete. 
  - Added slice to server.js to limit # of high scores to 10. 
  - Created global variable to store IP address, so it only needs to be changed once when it changes. 
  - Refactored App.jsx and moved handleInitialsChange and handleSaveScore to HighScore.jsx

Week 09
  - Moved questions.json to S3 bucket. 
  - Moved highScores.json to S3 bucket. 
  - Implemented PutObjectCommand function to access highScores.json

Week 10
  - Aligned text and background lines.
  - Changed answer_index to UpperCase.
  - Enlarged navigation buttons. 
  - Added questions 101-200. 
