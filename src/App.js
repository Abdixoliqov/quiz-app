import React, { useState } from 'react';
import { question } from './moke/data'
import QuestonsLists from './components/QuestonsLists';
import Queston from './components/Queston'


function App() {
  const [questions, setQuestions] = useState(question)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0)
  const [buttonColor, setButtonColor] = useState("")
  const [activeButtonColor, setActiveButtonColor] = useState('blue')
  const [bgColor, setBgColor] = useState('')
  

  function handleQuestonsSelect(option) {
    

  }

  function handleOptionSelect(option, index) {
    console.log(option, 'opt', index, 'idx');
    if(option === questions[currentQuestion].correctAnswer) {
      setBgColor('green')
      console.log('color');
      
    }

    const correctAnswer = questions[currentQuestion].correctAnswer;
    const isCorrect = option === correctAnswer;

    setScore(prevScore=> prevScore + (isCorrect ? 1 : 0))

    setButtonColor(prevColor=>{
      const newColors = [...prevColor];

      newColors[currentQuestion] = isCorrect ? 'green' : 'red'
      
      return newColors
    })
    

    setTimeout(() => {
      setCurrentQuestion(prevQuestion=>{
        const nextQuestion = prevQuestion + 1;
        if(nextQuestion < questions.length) {
          return nextQuestion
        } else {
          return prevQuestion
        }
      })
    }, 2000);
  }

  return (
    <div className='app'>
      <h1>Avto Questions</h1>
      <p>Score: {score}/{questions.length}</p>
      <QuestonsLists
        questions={questions}
        handleQuestonsSelect={handleQuestonsSelect}
        currentQuestion={currentQuestion}
        buttonColors={buttonColor}
      />
      <Queston
        question={questions[currentQuestion]}
        handleOptionSelect={handleOptionSelect}
        buttonColor={buttonColor}
        bgColor={bgColor}


      />

    </div>
  );
}

export default App;