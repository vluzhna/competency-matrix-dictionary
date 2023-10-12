import TopicList from "./components/Sidebar/TopicList";
import TopicContent from "./components/Content/TopicContent";
import { useState } from "react";

function App() {
    const [selectedTopic, setSelectedTopic] = useState('');

    const sections = [
        {
            title: 'Розділ 1',
            topics: ['Тема 1.1', 'Тема 1.2', 'Тема 1.3'],
        },
        {
            title: 'Розділ 2',
            topics: ['Тема 2.1', 'Тема 2.2'],
        },
    ];

    const contentMap = {
        'Тема 1.1': 'Вміст для Теми 1.1',
        'Тема 1.2': 'Вміст для Теми 1.2',
        'Тема 1.3': 'Вміст для Теми 1.3',
        'Тема 2.1': 'Вміст для Теми 2.1',
        'Тема 2.2': 'Вміст для Теми 2.2',
    };

    const onSelectTopic = (topic) => {
        setSelectedTopic(topic);
    };

    return (
        <div className="app">
            <TopicList sections={sections} onSelectTopic={onSelectTopic} />
            <TopicContent selectedTopic={selectedTopic} content={contentMap[selectedTopic]} />
        </div>
    );
}

export default App;
