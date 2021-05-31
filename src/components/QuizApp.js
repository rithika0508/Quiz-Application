import React, { useState, useReducer } from 'react';
import Questions from '../Questions/data.json';
import { handleDisability } from '../utils/handleDisability';
import { connect } from 'react-redux';
import handleSignOut from '../utils/handleSignOut';

const QuizById = (props) => {
    const number = props.match.params.id;
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [selectedOption, setSelectedOption] = useState('');
    
    const handleQuestions = () => {
      handleDisability(false);
      const correctOption = Questions[number].correct;
      const Option = Questions[number].options[correctOption];
      if(selectedOption === Option) {
        setScore(score+1);
      }
      props.history.push(`/${parseInt(props.match.params.id) + 1}`);
    }

    const finishQuiz = () => {
      const correctOption = Questions[number].correct;
      const Option = Questions[number].options[correctOption];
      if(selectedOption === Option) {
        setScore(score+1);
      }
      setShowScore(true);
    }

    const handleClearSelection = () => { 
      handleDisability(false);
      const selected = document.getElementsByName(selectedOption);
      selected[0].removeAttribute("style", "color:black;")
      selected[0].removeAttribute("style", "background-color:#ACE1AF;");
    }
    const handleOption = (e) => {
      const selected = document.getElementsByName(e.target.value);
      handleDisability(true);
      setSelectedOption(e.target.value);
      selected[0].setAttribute("style", "background-color:#ACE1AF;");
      selected[0].setAttribute("style", "color:black;")
    }
    
    const signOut = () => {
      handleSignOut(props.dispatch)
      props.history.push('/');
    }


    return (
      <div>
        <p className='question'>Question {number + 1} {Questions[number].question}</p>
        <div className="FourChoices">
            {Questions[number].options.map((option) => <button className="option" key={option} value={option} name={option} onClick={handleOption}>{option}</button>)}<br />
        </div>
        <div className="bottom_btn">
          <button className="clearSelection_btn" onClick={handleClearSelection}>Clear Selection</button>
          {number>=9 ? <button className="nxt_btn" onClick={finishQuiz}>Finish Quiz</button> : <button className="nxt_btn" onClick={handleQuestions}>Next</button>}
          </div>
        {showScore && <div>Your Score is {score}/10 <button onClick={signOut}>SignOut</button></div>}
      </div>
    );
  }

const Connected = connect()(QuizById)

export default Connected;