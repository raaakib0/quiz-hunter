import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const QuizHead = useLoaderData();
    return (
        <div>
            {
                // tshirts.map(tshirt => <Tshirt
                //     key={tshirt.id}
                //     tshirt={tshirt}
                // ></Tshirt>)
               
            }
            <h1>{QuizHead.length}</h1>
        </div>
    );
};

export default Home;