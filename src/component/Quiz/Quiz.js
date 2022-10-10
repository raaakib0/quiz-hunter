import React from 'react';
import './Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons'


const Quiz = (quiz) => {
    const { logo,name,total } = quiz.quiz;
    // console.log(quiz.quiz);
    return (
        <div className='quiz-container' >
            <div >
                <img src={logo} alt="" />
            </div>
            <div className='quiz-text-container'>
                <h2>{name}</h2>
                <h3>Question : {total}</h3>
                <button>Let's Practice <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button>
            </div>
        </div>
    );
};

export default Quiz;