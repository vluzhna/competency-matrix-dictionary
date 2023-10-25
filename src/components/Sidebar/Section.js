import React, {useState} from 'react';
import Subsection from "./Subsection";

const Section = ({ section, onSelectTopic }) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleSection= () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="section">
            <h3 className='sectionHeader' onClick={toggleSection}>{section.title}</h3>
            {
                isOpen && Object.keys(section.subtitle).map((tier, tierIndex) => {
                return (
                    <Subsection key={tierIndex} subtitle={section.subtitle[tier]} topics={section.topics[tier]} onSelectTopic={onSelectTopic}/>
                )
            })}
        </div>
    );
};

export default Section;