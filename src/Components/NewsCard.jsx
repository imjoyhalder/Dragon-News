import React from 'react';

const NewsCard = ({singleNews}) => {
    const {title} = singleNews
    return (
        <div>
            <li>{title}</li>
        </div>
    );
};

export default NewsCard;