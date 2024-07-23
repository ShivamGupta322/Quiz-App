import { useRef, useState } from 'react'
import {questions}  from './Components/Questions';
import './App.css'
function App() {
  const [index,setIndex]=useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[index]);
  let [lock,setLock]=useState(false);
  const [score, setScore] = useState()

  let option1=useRef(null);
  let option2=useRef(null);
  let option3=useRef(null);
  let option4=useRef(null);

  let option_array=[option1,option2,option3,option4];

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
    if(index!=0){
      setIndex(index-1);
      setCurrentQuestion(questions[index]);
    }
    else{
      alert("Quiz reached to end!");
    }
  }


  const checkAnswer=(e,ans)=>{
   if(lock===false){
    if(currentQuestion.ans===ans){
      e.target.classList.add("Correct");
      setLock(true);
      setScore(prev=>prev+1);
    }
    else{
      e.target.classList.add("Wrong");
      setLock(true);
      option_array[currentQuestion.ans-1].current.classList.add("Correct");
    }
   }
  }

  return (
    <>
      
      <div className='main'>
        <div className='content'>
          <h1>Quiz App</h1>
          <hr />
          <h3 className='question'>Question-{index+1} {currentQuestion.question}</h3>
          <h3 className='option' ref={option1} onClick={(e)=>{checkAnswer(e,1)}}> {currentQuestion.option1}</h3>
          <h3 className='option' ref={option2} onClick={(e)=>{checkAnswer(e,2)}}> {currentQuestion.option2}</h3>
          <h3 className='option' ref={option3} onClick={(e)=>{checkAnswer(e,3)}}> {currentQuestion.option3}</h3>
          <h3 className='option' ref={option4} onClick={(e)=>{checkAnswer(e,4)}}> {currentQuestion.option4}</h3>
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
