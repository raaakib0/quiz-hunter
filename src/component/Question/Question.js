import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  
import QuizItems from '../QuizItems/QuizItems';

const Quiz = () => {
    const { quizId } = useParams();
    console.log(quizId)
    const [quizDetails, setQuizDetails] = useState([]);

    const getQuizData = async () => {
        try {
            const response = await fetch(`https://openapi.programming-hero.com/api/quiz/${quizId}`)
                .then((response) => response.json())

            if (response.status) {
                setQuizDetails(response.data)
            }

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getQuizData()
    }, []);




    return (
        <div>
            <h1>{quizDetails.name} <img src={quizDetails.logo} height="40px" alt="" srcSet="" /></h1>
            <div className=''>
                {
                    quizDetails.questions && quizDetails.questions.map((quz, index) => <QuizItems

                        key={index}
                        questions={quz}
                    ></QuizItems>)
                }
            </div>
        </div>
    );
};

export default Quiz;