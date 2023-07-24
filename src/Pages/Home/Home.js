import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../Shared/NewsSummaryCard/NewsSummary';

const Home = () => {
    const allnews = useLoaderData();
    return (
        <div>
            <h2>Dragon News:{ allnews.length}</h2>
            {
                allnews.map(news => <NewsSummary
                    key={news._id}
                    news={news}
                ></NewsSummary>)   
        }
        </div>
    );
};

export default Home;