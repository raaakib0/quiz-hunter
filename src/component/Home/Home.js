import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    const QuizHead = useLoaderData();
    // console.log(QuizHead.data[0].logo);
    return (
        <div className="main-ui">
            <Banner></Banner>
            <div>
                {
                    QuizHead.data.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;