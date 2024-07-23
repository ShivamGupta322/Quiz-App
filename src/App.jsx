import { useState } from 'react'
import {questions}  from './Components/Questions';
import './App.css'
function App() {
  const [index,setIndex]=useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[index]);

  const next=()=>{
    if(index<questions.length-1){
      setIndex(index+1);
      setCurrentQuestion(questions[index]);
    }
    else{
      alert("Quiz completed!");
    }
  }

  const prev=()=>{
    if(index>questions.length-1){
      setIndex(index-1);
      setCurrentQuestion(questions[index]);
    }
    else{
      alert("Quiz reached to end!");
    }
  }


  const checkAnswer=(e,ans)=>{
    if(questions.ans==ans){
      alert("Correct Answer!");
    }
    else{
      alert("Wrong Answer! The correct answer is: "+questions.ans);
    }
  }

  return (
    <>
      
      <div className='main'>
        <div className='content'>
          <h1>Quiz App</h1>
          <h3 className='question'>Question-{index+1} {currentQuestion.question}</h3>
          <h3 className='option' onClick={(e)=>{checkAnswer(e,1)}}> {currentQuestion.option1}</h3>
          <h3 className='option' onClick={(e)=>{checkAnswer(e,2)}}> {currentQuestion.option2}</h3>
          <h3 className='option' onClick={(e)=>{checkAnswer(e,3)}}> {currentQuestion.option3}</h3>
          <h3 className='option' onClick={(e)=>{checkAnswer(e,4)}}> {currentQuestion.option4}</h3>
          <div className='button'>
          <button onClick={prev} id='prev'>Previous</button>
          <button onClick={next}>Next</button>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default App
