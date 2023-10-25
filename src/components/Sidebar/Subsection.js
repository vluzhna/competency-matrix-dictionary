import React, {useState} from 'react';

const Subsection = ({ subtitle, topics, onSelectTopic }) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleSubsection = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <h4 className='subsectionHeader' onClick={toggleSubsection}>{subtitle}</h4>
            {
                isOpen && (
                    <ul>
                        {topics.map((topic, topicIndex) => {
                            return (
                                <li key={topicIndex} onClick={onSelectTopic}>{topic}</li>
                            )
                        })}
                    </ul>
                )
            }
        </div>
    );
};

export default Subsection;