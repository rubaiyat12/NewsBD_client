import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../Shared/NewsSummaryCard/NewsSummary';

const Category = () => {
    const categorynews = useLoaderData();
    return (
        <div>
            <h2>Category:{categorynews.length}</h2>
            {
                categorynews.map(news => <NewsSummary
                    key={news._id}
                    news={news}
                
                ></NewsSummary>)
            }
        </div>
    );
};

export default Category;