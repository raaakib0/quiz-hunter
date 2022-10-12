import React from 'react';
import './QuizItem.css'

const QuizItem = (props) => {
    const quzData = props.qz
    // const { options, correctAnswer, id } = props.quizData;



    return (
        <div >
            <div className='select-options' >
                <div className="form-check">
                    <input className={`form-check-input ${({ isActive }) => isActive ? 'active' : undefined}`} onClick={(e) => props.clickHandler(e)} value={quzData} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        {quzData}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default QuizItem;