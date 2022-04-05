// import React from 'react';
import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
    LineChart,
    Line,
    CartesiaGrid,
    CartesianGrid,
    ComposedChart,
    Area
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

        <div className='row '>

            <div className='col'>

                <LineChart width={400} height={400} data={data}>

                    <Line dataKey={"investment"}></Line>
                    <Line dataKey={"sell"}></Line>
                    <Line dataKey={"revenue"}></Line>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>


            <div className="col">
                <BarChart width={400} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>


            <div className="col-12 col-md-6 col-lg-6">
                <ComposedChart width={400} height={350} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                </ComposedChart>

            </div>
        </div>
    );
};

export default Dashboard;