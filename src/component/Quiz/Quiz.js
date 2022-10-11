import React from 'react';
import './Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons'
import Question from '../Question/Question';
import { Link } from 'react-router-dom';



const Quiz = (quiz) => {
    const { logo,name,total } = quiz.quiz;
    // console.log(quiz.quiz);

    const QuizQuestion = () => {
        console.log("question");
        <Link to='/question' >Blog</Link>
    }
    return (
        <div className='quiz-container' >
            <div >
                <img src={logo} alt="" />
            </div>
            <div className='quiz-text-container'>
                <h2>{name}</h2>
                <h3>Question : {total}</h3>
                <Link to='/question' onClick={QuizQuestion} ><button  >Let's Practice <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button></Link>
            </div>
        </div>
    );
};

export default Quiz;