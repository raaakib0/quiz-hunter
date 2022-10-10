import React from 'react';

const Quiz = (quiz) => {
    const { logo } = quiz;
    return (
        <div>
            <img src={logo} alt="" />
        </div>
    );
};

export default Quiz;