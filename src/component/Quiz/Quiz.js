import React, { useEffect } from 'react';
import './Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Question, { QuizQuestion } from '../Question/Question';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const Quiz = (quiz) => {
    const { logo, name, total, id } = quiz.quiz;
    console.log(quiz.quiz);

   

    return (
        <div className='quiz-container' >
            <div >
                <img src={logo} alt="" />
            </div>
            <div className='quiz-text-container'>
                <h2>{name}</h2>
                <h3>Question : {total}</h3>
                <Link to={`question/${id}`}  > <button  >Let's Practice <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button></Link>
            </div>
        </div>
    );
};

export default Quiz;