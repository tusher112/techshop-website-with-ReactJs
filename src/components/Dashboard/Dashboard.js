// import React from 'react';
import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
    LineChart,
    Line,
    CartesiaGrid,
    CartesianGrid
} from 'recharts';

const Dashboard = () => {

    const data =
        [
            {
                "month": "Mar",
                "investment": 100000,
                "sell": 241,
                "revenue": 10401
            },
            {
                "month": "Apr",
                "investment": 200000,
                "sell": 423,
                "revenue": 24500
            },
            {
                "month": "May",
                "investment": 500000,
                "sell": 726,
                "revenue": 67010
            },
            {
                "month": "Jun",
                "investment": 500000,
                "sell": 529,
                "revenue": 40405
            },
            {
                "month": "Jul",
                "investment": 600000,
                "sell": 601,
                "revenue": 50900
            },
            {
                "month": "Aug",
                "investment": 700000,
                "sell": 670,
                "revenue": 61000
            }
        ]

    return (

        <div>
            <LineChart width={400} height={500} data={data}>

                <Line dataKey={"investment"}></Line>
                <Line dataKey={"sell"}></Line>
                <Line dataKey={"revenue"}></Line>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>


            <BarChart width={400} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>

        </div>
    );
};

export default Dashboard;