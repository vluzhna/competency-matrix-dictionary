import React from 'react';
import '../../styles/styles.css';
import Section from "./Section";

function TopicList({ sections, onSelectTopic }) {
    return (
        <div className="topic-list">
            {
                sections.map((section, index) => {
                    return (
                        <Section key={index} section={section} onSelectTopic={onSelectTopic}/>
                    )
                })
            }
        </div>
    );
}

export default TopicList;