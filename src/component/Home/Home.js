import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const QuizHead = useLoaderData();
    console.log(QuizHead.data[0].logo);
    // const {}
    return (
        <div>
            {
                // tshirts.map(tshirt => <Tshirt
                //     key={tshirt.id}
                //     tshirt={tshirt}
                // ></Tshirt>)
               
            }
            <h1>{QuizHead.data[0].logo} home</h1>
        </div>
    );
};

export default Home;