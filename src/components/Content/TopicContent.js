import React from 'react';
import '../../styles/styles.css';

function TopicContent({ selectedTopic, content }) {
    return (
        <div className="topic-content">
            <h2>{selectedTopic}</h2>
            <p>{content}</p>
        </div>
    );
}

export default TopicContent;