import React from 'react';
import '../../styles/styles.css';

function TopicList({ sections, onSelectTopic }) {
    return (
        <div className="topic-list">
            {sections.map((section, index) => (
                <div key={index}>
                    <h2>{section.title}</h2>
                    <ul>
                        {section.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} onClick={() => onSelectTopic(topic)}>
                                {topic}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default TopicList;