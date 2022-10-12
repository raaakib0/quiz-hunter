
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistics.css'

const Statistics = () => {

    const statistics = useLoaderData();
    console.log(statistics);

     


    return (
        <div className='statistics-container'>
            <h1 className='p-5'>Quiz Statistics</h1>
            <div className='patient-running-month'>
                <LineChart width={1000} height={300} data={statistics.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;

