import React, { useState } from 'react';
import QuizItem from '../QuizItem/QuizItem';
import './QuizItems.css'

const QuizItems = ({ questions }) => {

    const { options, correctAnswer, id } = questions;

    const [correctAnsCount, setCorrectAnsCount] = useState(0);



    const clickHandler = (e) => {
        const value = e.target.value;

        if (correctAnswer === value) {
            alert("Your Ans is Correct!")
            setCorrectAnsCount(() => correctAnsCount + 1);

        } else {
            alert("Your Ans is Wrong!!")
        }
    }
    const viewAnsHandler = (value) => {

        if (value) {
            alert("Answer: " + value)
        }
    }

    return (

        <div id='quizItems' className='bg-info'>
            <span onClick={() => viewAnsHandler(correctAnswer)} id='view-ans'><i className="fa-solid fa-eye"></i></span>
            <p className='p-2 text-white '>Title {questions.question}</p>
            {/* <p>Correct Ans: {correctAnswer}</p>
            <p>ID: {id}</p> */}
            <div className='d-flex justify-content-center gap-2'>

                <div >
                    {
                        options && options.map((qz, index) => <QuizItem
                            id={id}
                            key={index}
                            qz={qz}
                            quizData={questions}
                            clickHandler={clickHandler}
                        ></QuizItem>)
                    }
                </div>
            </div>
        </div>

    );
};

export default QuizItems;