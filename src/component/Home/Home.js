import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const QuizHead = useLoaderData();
    // console.log(QuizHead.data[0].logo);
    return (
        <div>
            {
                QuizHead.data.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Home;